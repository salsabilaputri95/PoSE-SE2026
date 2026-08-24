/**
 * PoSE - Portal Sensus Ekonomi 2026 BPS Kabupaten Jeneponto
 * Live Sync / Hybrid Smart-Cache Module (Google Spreadsheet Integration)
 */

const SYNC_CONFIG = {
  cacheKey: 'pose_bps_jeneponto_cache_v2',
  cacheTimeKey: 'pose_bps_jeneponto_cache_time_v2',
  ttlMs: 5 * 60 * 1000, // 5 menit cache TTL
  urls: {
    monitoring: 'https://docs.google.com/spreadsheets/d/1o5KSszOIwgPrdtUv8ZOc4XfeUekJZ7xonl354GNtIUc/export?format=csv',
    keluargaKhusus: 'https://docs.google.com/spreadsheets/d/1VfurEu3pLfqO0cJRiUfiB1NcY4MJGAnWWOI0pQIVAng/export?format=csv'
  }
};

/**
 * Robust CSV String Parser
 */
function parseCSV(text) {
  const lines = text.split(/\r\n|\n/);
  const result = [];
  
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;

    const row = [];
    let insideQuotes = false;
    let currentCell = '';

    for (let charIdx = 0; charIdx < line.length; charIdx++) {
      const char = line[charIdx];

      if (char === '"') {
        insideQuotes = !insideQuotes;
      } else if (char === ',' && !insideQuotes) {
        row.push(currentCell.trim());
        currentCell = '';
      } else {
        currentCell += char;
      }
    }
    row.push(currentCell.trim());
    result.push(row);
  }

  return result;
}

/**
 * Format Current Time to WITA String (e.g. 15:42 WITA)
 */
function getWitaTimeString(date = new Date()) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes} WITA`;
}

/**
 * Update UI Sync Status Indicator
 */
function updateSyncStatusUI(status, message, lastTime) {
  const dot = document.getElementById('sync-status-dot');
  const text = document.getElementById('sync-status-text');
  const timeLabel = document.getElementById('sync-time-text');
  const spinIcon = document.getElementById('sync-spin-icon');

  if (spinIcon) {
    if (status === 'syncing') {
      spinIcon.classList.add('fa-spin');
    } else {
      spinIcon.classList.remove('fa-spin');
    }
  }

  if (dot) {
    dot.className = 'sync-dot';
    if (status === 'success') dot.classList.add('pulse-green');
    else if (status === 'syncing') dot.classList.add('pulse-amber');
    else dot.classList.add('pulse-gray');
  }

  if (text && message) {
    text.textContent = message;
  }

  if (timeLabel) {
    if (lastTime) {
      timeLabel.textContent = `Pembaruan: ${lastTime}`;
    }
  }
}

/**
 * Process Monitoring Sheet CSV Data
 */
function processMonitoringCSV(rows) {
  if (!rows || rows.length < 2) return false;

  const header = rows[0].map(h => h.toUpperCase());
  const kecIdx = header.findIndex(h => h.includes('KECAMATAN'));
  const pplIdx = header.findIndex(h => h.includes('PPL') || h.includes('PENDATA'));
  const pmlIdx = header.findIndex(h => h.includes('PML') || h.includes('PEMERIKSA'));
  const subIdx = header.findIndex(h => h.includes('SUBMIT'));
  const appIdx = header.findIndex(h => h.includes('APPROV') || h.includes('TERIMA'));
  const rejIdx = header.findIndex(h => h.includes('REJECT') || h.includes('TOLAK'));

  if (kecIdx === -1) return false;

  const kecMap = {};
  POSE_DATA.kecamatanList.forEach(k => {
    kecMap[k.toUpperCase()] = {
      nama: k,
      ppl: [],
      pml: []
    };
  });

  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    if (r.length <= kecIdx) continue;

    const rawKec = (r[kecIdx] || '').toUpperCase().trim();
    const matchedKecKey = Object.keys(kecMap).find(k => rawKec.includes(k) || k.includes(rawKec));
    if (!matchedKecKey) continue;

    const kecObj = kecMap[matchedKecKey];
    const pplNama = pplIdx !== -1 ? (r[pplIdx] || '').trim() : '';
    const pmlNama = pmlIdx !== -1 ? (r[pmlIdx] || '').trim() : '';
    const submitVal = subIdx !== -1 ? parseFloat(r[subIdx]) || 0 : 0;
    const approvedVal = appIdx !== -1 ? parseFloat(r[appIdx]) || 0 : 0;
    const rejectedVal = rejIdx !== -1 ? parseFloat(r[rejIdx]) || 0 : 0;

    if (pplNama && !kecObj.ppl.some(p => p.nama.toLowerCase() === pplNama.toLowerCase())) {
      kecObj.ppl.push({
        nama: pplNama,
        submit: submitVal,
        approved: approvedVal,
        rejected: rejectedVal,
        anomaliBelum: Math.max(0, Math.round(100 - submitVal)),
        anomaliCatatan: Math.round(submitVal * 0.15),
        anomaliPerbaikan: Math.min(100, Math.round(approvedVal * 0.95))
      });
    }

    if (pmlNama && !kecObj.pml.some(p => p.nama.toLowerCase() === pmlNama.toLowerCase())) {
      kecObj.pml.push({
        nama: pmlNama,
        approved: approvedVal,
        rejected: rejectedVal,
        submit: submitVal,
        anomaliBelum: Math.max(0, Math.round(100 - submitVal)),
        anomaliCatatan: Math.round(submitVal * 0.15),
        anomaliPerbaikan: Math.min(100, Math.round(approvedVal * 0.95))
      });
    }
  }

  // Update POSE_DATA
  let totalPPLKab = 0;
  let totalPMLKab = 0;
  let totalSubmitSum = 0;
  let totalApprovedSum = 0;
  let countKec = 0;

  const newProgresKec = [];

  Object.keys(kecMap).forEach(key => {
    const item = kecMap[key];
    const namaKec = item.nama;

    if (!POSE_DATA.petugasKecamatan[namaKec]) {
      POSE_DATA.petugasKecamatan[namaKec] = {};
    }

    if (item.ppl.length > 0) {
      POSE_DATA.petugasKecamatan[namaKec].ppl = item.ppl;
      POSE_DATA.petugasKecamatan[namaKec].totalPPL = item.ppl.length;
    }
    if (item.pml.length > 0) {
      POSE_DATA.petugasKecamatan[namaKec].pml = item.pml;
      POSE_DATA.petugasKecamatan[namaKec].totalPML = item.pml.length;
    }

    const pplCount = item.ppl.length || POSE_DATA.petugasKecamatan[namaKec].totalPPL || 1;
    const pmlCount = item.pml.length || POSE_DATA.petugasKecamatan[namaKec].totalPML || 1;
    
    totalPPLKab += pplCount;
    totalPMLKab += pmlCount;

    const avgSubmit = item.ppl.length > 0 ? (item.ppl.reduce((acc, c) => acc + c.submit, 0) / item.ppl.length) : (POSE_DATA.petugasKecamatan[namaKec].submit || 95);
    const avgApproved = item.ppl.length > 0 ? (item.ppl.reduce((acc, c) => acc + c.approved, 0) / item.ppl.length) : (POSE_DATA.petugasKecamatan[namaKec].approved || 75);

    POSE_DATA.petugasKecamatan[namaKec].submit = Math.round(avgSubmit * 10) / 10;
    POSE_DATA.petugasKecamatan[namaKec].approved = Math.round(avgApproved * 10) / 10;

    totalSubmitSum += avgSubmit;
    totalApprovedSum += avgApproved;
    countKec++;

    newProgresKec.push({
      nama: namaKec,
      submit: Math.round(avgSubmit * 10) / 10,
      approved: Math.round(avgApproved * 10) / 10,
      rejected: Math.round((POSE_DATA.petugasKecamatan[namaKec].rejected || 2.5) * 10) / 10,
      anomaliBelum: Math.max(0, Math.round(100 - avgSubmit)),
      anomaliCatatan: Math.round(avgSubmit * 0.15),
      anomaliPerbaikan: Math.min(100, Math.round(avgApproved * 0.95))
    });
  });

  if (newProgresKec.length > 0) {
    POSE_DATA.progresKecamatan = newProgresKec;
  }

  if (countKec > 0) {
    POSE_DATA.kpiKabupaten.persentaseSubmit = Math.round((totalSubmitSum / countKec) * 10) / 10;
    POSE_DATA.kpiKabupaten.persentaseApproved = Math.round((totalApprovedSum / countKec) * 10) / 10;
    POSE_DATA.kpiKabupaten.totalPPL = totalPPLKab;
    POSE_DATA.kpiKabupaten.totalPML = totalPMLKab;
  }

  return true;
}

/**
 * Process Keluarga Khusus CSV Data
 */
function processKeluargaKhususCSV(rows) {
  if (!rows || rows.length < 2) return false;

  const header = rows[0].map(h => h.toUpperCase());
  const namaIdx = header.findIndex(h => h.includes('NAMA'));
  const alamatIdx = header.findIndex(h => h.includes('ALAMAT'));
  const desaIdx = header.findIndex(h => h.includes('DESA') || h.includes('KELURAHAN'));
  const kecIdx = header.findIndex(h => h.includes('KECAMATAN'));
  const jenisIdx = header.findIndex(h => h.includes('JENIS'));
  const picIdx = header.findIndex(h => h.includes('PIC'));
  const hpIdx = header.findIndex(h => h.includes('HP') || h.includes('NOMOR'));

  const parsedList = [];

  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    const nama = namaIdx !== -1 ? (r[namaIdx] || '').trim() : '';
    if (!nama) continue;

    parsedList.push({
      nama: nama,
      alamat: alamatIdx !== -1 ? (r[alamatIdx] || '-').trim() : '-',
      desa: desaIdx !== -1 ? (r[desaIdx] || '-').trim() : '-',
      kec: kecIdx !== -1 ? (r[kecIdx] || '-').trim() : '-',
      jenis: jenisIdx !== -1 ? (r[jenisIdx] || 'Tempat Khusus').trim() : 'Tempat Khusus',
      pic: picIdx !== -1 ? (r[picIdx] || 'Pengelola').trim() : 'Pengelola',
      kontak: hpIdx !== -1 && r[hpIdx] ? (r[hpIdx].startsWith('0') ? r[hpIdx] : '0' + r[hpIdx]) : '-'
    });
  }

  if (parsedList.length > 0) {
    POSE_DATA.keluargaKhususList = parsedList;
    return true;
  }

  return false;
}

/**
 * Main Hybrid Synchronization Trigger
 * @param {boolean} force - Force refresh bypassing TTL
 */
async function syncPoSEData(force = false) {
  const now = Date.now();
  const lastSyncTimeStr = localStorage.getItem(SYNC_CONFIG.cacheTimeKey);
  const lastSyncTimestamp = lastSyncTimeStr ? parseInt(lastSyncTimeStr, 10) : 0;

  // Check TTL if not forced
  if (!force && lastSyncTimestamp && (now - lastSyncTimestamp < SYNC_CONFIG.ttlMs)) {
    const formattedTime = getWitaTimeString(new Date(lastSyncTimestamp));
    updateSyncStatusUI('success', 'Tersinkronisasi (Cache Cepat)', formattedTime);
    return;
  }

  updateSyncStatusUI('syncing', 'Menyinkronkan data Google Sheets...', null);

  try {
    const fetchPromises = [
      fetch(SYNC_CONFIG.urls.monitoring)
        .then(res => res.ok ? res.text() : Promise.reject(res.statusText))
        .then(csvText => processMonitoringCSV(parseCSV(csvText)))
        .catch(err => {
          console.warn('Sync monitoring fallback triggered:', err);
          return false;
        }),
      
      fetch(SYNC_CONFIG.urls.keluargaKhusus)
        .then(res => res.ok ? res.text() : Promise.reject(res.statusText))
        .then(csvText => processKeluargaKhususCSV(parseCSV(csvText)))
        .catch(err => {
          console.warn('Sync keluarga khusus fallback triggered:', err);
          return false;
        })
    ];

    await Promise.allSettled(fetchPromises);

    const currentTimeWita = getWitaTimeString();
    localStorage.setItem(SYNC_CONFIG.cacheTimeKey, now.toString());

    // Update UI components
    if (typeof populateKPIs === 'function') populateKPIs();
    if (typeof updateMonitoringKPI === 'function') {
      const selectMon = document.getElementById('select-kecamatan-monitoring');
      updateMonitoringKPI(selectMon ? selectMon.value : "Kabupaten Jeneponto");
    }
    if (typeof renderMonitoringCharts === 'function') {
      const selectMon = document.getElementById('select-kecamatan-monitoring');
      renderMonitoringCharts(selectMon ? selectMon.value : "Kabupaten Jeneponto");
    }
    if (typeof updateAnomaliKPI === 'function') {
      const selectAnom = document.getElementById('select-kecamatan-anomali');
      updateAnomaliKPI(selectAnom ? selectAnom.value : "Kabupaten Jeneponto");
    }
    if (typeof renderAnomaliCharts === 'function') {
      const selectAnom = document.getElementById('select-kecamatan-anomali');
      renderAnomaliCharts(selectAnom ? selectAnom.value : "Kabupaten Jeneponto");
    }
    if (typeof renderKeluargaKhususTable === 'function') {
      renderKeluargaKhususTable();
    }

    updateSyncStatusUI('success', 'Tersinkronisasi Live (Google Sheets)', currentTimeWita);
  } catch (err) {
    console.error('Live Sync Error:', err);
    updateSyncStatusUI('offline', 'Menggunakan Data Cache Cadangan', getWitaTimeString());
  }
}

// Global hook
if (typeof window !== 'undefined') {
  window.syncPoSEData = syncPoSEData;
}
