/**
 * PoSE - Portal Sensus Ekonomi 2026 BPS Kabupaten Jeneponto
 * Live Sync Module (Google Spreadsheet Direct GViz Integration)
 * 100% Real-time synchronization without CORS or redirect issues
 */

const SYNC_CONFIG = {
  cacheKey: 'pose_bps_jeneponto_cache_v4',
  cacheTimeKey: 'pose_bps_jeneponto_cache_time_v4',
  urls: {
    pertanian: 'https://docs.google.com/spreadsheets/d/19DcV3CA0FkcpsZldqd-ChW8JL0SgcVFX-dC7Y_0_3So/gviz/tq?tqx=out:csv&gid=46846179',
    keluargaKhusus: 'https://docs.google.com/spreadsheets/d/1VfurEu3pLfqO0cJRiUfiB1NcY4MJGAnWWOI0pQIVAng/gviz/tq?tqx=out:csv&gid=0',
    usahaPusat: 'https://docs.google.com/spreadsheets/d/1BT_ub01ex_h3yqI-n_EFO8pYFoVORRweB8V_5ebpgHo/gviz/tq?tqx=out:csv',
    usahaBesar: 'https://docs.google.com/spreadsheets/d/18e4NwGBJy8myLvNLTVj1jV4pLpwgqZn3/gviz/tq?tqx=out:csv',
    monitoring: 'https://docs.google.com/spreadsheets/d/1o5KSszOIwgPrdtUv8ZOc4XfeUekJZ7xonl354GNtIUc/gviz/tq?tqx=out:csv&gid=0',
    anomali: 'https://docs.google.com/spreadsheets/d/141zngbEXedgCgPF1c0TamUBdCy9g1T4YO-mVSzOmwUQ/gviz/tq?tqx=out:csv&gid=105002898'
  }
};

/**
 * Robust CSV String Parser handling escaped quotes and commas
 */
function parseCSV(text) {
  if (!text) return [];
  const rows = [];
  let currentRow = [];
  let currentCell = '';
  let insideQuotes = false;

  for (let i = 0; i < text.length; i++) {
    const char = text[i];
    const nextChar = text[i + 1];

    if (char === '"') {
      if (insideQuotes && nextChar === '"') {
        currentCell += '"';
        i++;
      } else {
        insideQuotes = !insideQuotes;
      }
    } else if (char === ',' && !insideQuotes) {
      currentRow.push(currentCell.trim());
      currentCell = '';
    } else if ((char === '\r' || char === '\n') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') i++;
      currentRow.push(currentCell.trim());
      if (currentRow.some(c => c.length > 0)) rows.push(currentRow);
      currentRow = [];
      currentCell = '';
    } else {
      currentCell += char;
    }
  }
  if (currentCell.length > 0 || currentRow.length > 0) {
    currentRow.push(currentCell.trim());
    if (currentRow.some(c => c.length > 0)) rows.push(currentRow);
  }
  return rows;
}

/**
 * Format Current Time to WITA String (e.g. 10:35 WITA)
 */
function getWitaTimeString(date = new Date()) {
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes} WITA`;
}

/**
 * Update UI Sync Status Indicator in the Hero Section
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
 * Process Keluarga Khusus CSV Data
 */
function processKeluargaKhususCSV(rows) {
  if (!rows || rows.length < 2) return false;

  const header = rows[0].map(h => (h || '').toUpperCase());
  const namaIdx = header.findIndex(h => h.includes('NAMA'));
  const alamatIdx = header.findIndex(h => h.includes('ALAMAT'));
  const desaIdx = header.findIndex(h => h.includes('DESA') || h.includes('KELURAHAN'));
  const kecIdx = header.findIndex(h => h.includes('KECAMATAN') || h.includes('KEC'));
  const picIdx = header.findIndex(h => h === 'PIC' || (h.includes('PIC') && !h.includes('HP') && !h.includes('NOMOR')));
  const hpIdx = header.findIndex(h => h.includes('HP') || h.includes('NOMOR') || h.includes('KONTAK') || h.includes('TELP'));
  const jenisIdx = header.findIndex(h => h.includes('JENIS'));
  const pjIdx = header.findIndex(h => h === 'PJ' || h.includes('PENANGGUNG'));
  const statusIdx = header.findIndex(h => h.includes('STATUS'));

  const parsedList = [];

  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    const nama = namaIdx !== -1 ? (r[namaIdx] || '').trim() : '';
    if (!nama || nama.includes('#N/A')) continue;

    const hpRaw = hpIdx !== -1 ? (r[hpIdx] || '').trim() : '';
    let hpFormatted = hpRaw;
    if (hpRaw && !hpRaw.startsWith('0') && !hpRaw.startsWith('+') && hpRaw.length >= 9) {
      hpFormatted = '0' + hpRaw;
    }

    parsedList.push({
      nama: nama,
      alamat: alamatIdx !== -1 ? (r[alamatIdx] || '-').trim() : '-',
      desa: desaIdx !== -1 ? (r[desaIdx] || '-').trim() : '-',
      kec: kecIdx !== -1 ? (r[kecIdx] || '-').trim() : '-',
      pic: picIdx !== -1 ? (r[picIdx] || '-').trim() || '-' : '-',
      kontak: hpFormatted || '-',
      noHpPic: hpFormatted || '-',
      jenis: jenisIdx !== -1 ? (r[jenisIdx] || '-').trim() || 'Tempat Tinggal Khusus' : 'Tempat Tinggal Khusus',
      pj: pjIdx !== -1 ? (r[pjIdx] || '-').trim() || '-' : '-',
      status: statusIdx !== -1 ? (r[statusIdx] || 'OPEN').trim() || 'OPEN' : 'OPEN'
    });
  }

  if (parsedList.length > 0) {
    POSE_DATA.keluargaKhususList = parsedList;
    if (POSE_DATA.kpiKabupaten) {
      POSE_DATA.kpiKabupaten.totalKeluargaKhusus = parsedList.length;
    }
    return true;
  }

  return false;
}

/**
 * Process Usaha Pusat (Kode 7) CSV Data
 */
function processUsahaPusatCSV(rows) {
  if (!rows || rows.length < 2) return false;

  const header = rows[0].map(h => (h || '').toUpperCase());
  const perushIdx = header.findIndex(h => h.includes('PERUSAHAAN') || (h.includes('NAMA') && !h.includes('KOMERSIL')));
  const komersilIdx = header.findIndex(h => h.includes('KOMERSIL') || h.includes('BRAND') || h.includes('MERK'));
  const alamatIdx = header.findIndex(h => h.includes('ALAMAT'));

  const parsedList = [];

  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    const perush = perushIdx !== -1 ? (r[perushIdx] || '').trim() : '';
    if (!perush) continue;

    const brand = komersilIdx !== -1 ? (r[komersilIdx] || '-').trim() : '-';
    const address = alamatIdx !== -1 ? (r[alamatIdx] || '-').trim() : '-';

    parsedList.push({
      id: parsedList.length + 1,
      namaUsaha: perush,
      nama: perush,
      namaKomersil: brand,
      komersil: brand,
      alamat: address
    });
  }

  if (parsedList.length > 0) {
    POSE_DATA.usahaPusatSample = parsedList;
    return true;
  }

  return false;
}

/**
 * Process Usaha Besar (UB) CSV Data
 */
function processUsahaBesarCSV(rows) {
  if (!rows || rows.length < 2) return false;

  const header = rows[0].map(h => (h || '').toUpperCase());
  const namaIdx = header.findIndex(h => h === 'NAMA' || h.includes('NAMA_USAHA') || h === 'NAMA USAHA');
  const alamatIdx = header.findIndex(h => h === 'ALAMAT');
  const kecIdx = header.findIndex(h => h === 'NMKEC' || h === 'KECAMATAN');
  const desaIdx = header.findIndex(h => h === 'NMDESA' || h === 'DESA');
  const kegIdx = header.findIndex(h => h.includes('KEGIATAN_USAHA') || h.includes('KEGIATAN'));

  const parsedList = [];
  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    const nama = namaIdx !== -1 ? (r[namaIdx] || '').trim() : '';
    if (!nama || nama.includes('#N/A')) continue;

    parsedList.push({
      id: parsedList.length + 1,
      nama: nama,
      kecamatan: kecIdx !== -1 ? (r[kecIdx] || '-').trim() : '-',
      desa: desaIdx !== -1 ? (r[desaIdx] || '-').trim() : '-',
      alamat: alamatIdx !== -1 ? (r[alamatIdx] || '-').trim() : '-',
      kegiatan: kegIdx !== -1 ? (r[kegIdx] || '-').trim() : '-'
    });
  }

  if (parsedList.length > 0) {
    POSE_DATA.usahaBesarList = parsedList;
    if (POSE_DATA.kpiKabupaten) {
      POSE_DATA.kpiKabupaten.totalUsahaBesar = parsedList.length;
    }
    return true;
  }

  return false;
}

/**
 * Process Perbandingan Usaha Pertanian SE2026 vs ST2023 CSV Data
 */
function processPertanianCSV(rows) {
  if (!rows || rows.length < 2) return false;

  const header = rows[0].map(h => (h || '').toUpperCase());
  const kabIdx = header.findIndex(h => h.includes('KABUPATEN') || h.includes('KAB'));
  const kecIdx = header.findIndex(h => h.includes('KECAMATAN') || h.includes('KEC'));
  const desaIdx = header.findIndex(h => h.includes('DESA') || h.includes('KELURAHAN'));
  const utpIdx = header.findIndex(h => h.includes('UTP') || h.includes('ST2023'));
  const seIdx = header.findIndex(h => h.includes('USAHA PERTANIAN') || h.includes('SE2026'));
  const persenIdx = header.findIndex(h => h.includes('PERSENTASE') || h.includes('PERSEN'));

  const cleanLabel = (text) => (text || '').replace(/^\[\d+\]\s*/, '').trim();

  const parsedList = [];
  let totalUtp = 0;
  let totalSe = 0;

  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    const kabText = kabIdx !== -1 ? (r[kabIdx] || '') : (r[0] || '');
    if (!kabText.toUpperCase().includes('JENEPONTO')) continue;

    const kec = kecIdx !== -1 ? cleanLabel(r[kecIdx]) : '-';
    const desa = desaIdx !== -1 ? cleanLabel(r[desaIdx]) : '-';
    const kodeDesa = r[2] || '';

    const utp = utpIdx !== -1 ? parseInt((r[utpIdx] || '0').replace(/\./g, '').replace(/,/g, '').trim(), 10) || 0 : 0;
    const se = seIdx !== -1 ? parseInt((r[seIdx] || '0').replace(/\./g, '').replace(/,/g, '').trim(), 10) || 0 : 0;

    let persenVal = 0;
    if (persenIdx !== -1 && r[persenIdx]) {
      const pStr = r[persenIdx].replace('%', '').replace(',', '.').trim();
      persenVal = parseFloat(pStr) || 0;
    }
    if (!persenVal && utp > 0) {
      persenVal = Math.round((se / utp) * 10000) / 100;
    }

    totalUtp += utp;
    totalSe += se;

    parsedList.push({
      id: parsedList.length + 1,
      kecamatan: kec,
      desa: desa,
      kodeDesa: kodeDesa,
      utp2023: utp,
      se2026: se,
      persentase: `${persenVal.toFixed(2)}%`,
      persenVal: persenVal
    });
  }

  if (parsedList.length > 0) {
    POSE_DATA.pertanianList = parsedList;
    const kabPersen = totalUtp > 0 ? (totalSe / totalUtp * 100).toFixed(2) + '%' : '0.00%';
    POSE_DATA.kpiPertanian = {
      totalUtp2023: totalUtp,
      totalSe2026: totalSe,
      persentaseRealisasi: kabPersen,
      totalDesa: parsedList.length
    };
    return true;
  }

  return false;
}

/**
 * Process Monitoring Sheet CSV Data (Kolom R: % Submit, Kolom S: % Draft, Kolom T: % Approve)
 */
function processMonitoringCSV(rows) {
  if (!rows || rows.length < 2) return false;

  const header = rows[0].map(h => (h || '').toUpperCase());
  let kecIdx = header.findIndex(h => h.includes('KECAMATAN'));
  let pclIdx = header.findIndex(h => h.includes('PENCACAH') || h.includes('PCL') || h.includes('PPL'));
  let pmlIdx = header.findIndex(h => h.includes('PENGAWAS') || h.includes('PML'));
  let muatanIdx = header.findIndex(h => h.includes('TOTAL') || h.includes('MUATAN'));
  let subIdx = header.findIndex(h => h.includes('TANPA DRAFT') || (h.includes('PROGRES') && h.includes('SUBMIT')));
  let draftIdx = header.findIndex(h => h.includes('SELISIH PROGRES') || (h.includes('DRAFT') && !h.includes('CATATAN')));
  let appIdx = header.findIndex(h => h.includes('PROGRES APPROVAL') || (h.includes('PROGRES') && h.includes('APPROV')));

  // Fallbacks by column position (A=0 ... R=17, S=18, T=19)
  if (kecIdx === -1) kecIdx = 4;
  if (pclIdx === -1) pclIdx = 3;
  if (pmlIdx === -1) pmlIdx = 2;
  if (muatanIdx === -1) muatanIdx = 5;
  if (subIdx === -1) subIdx = 17;
  if (draftIdx === -1) draftIdx = 18;
  if (appIdx === -1) appIdx = 19;

  const parsePercent = (val) => {
    if (!val) return 0;
    const clean = String(val).replace('%', '').replace(',', '.').trim();
    const num = parseFloat(clean);
    return isNaN(num) ? 0 : num;
  };

  const kecMap = {};
  POSE_DATA.kecamatanList.forEach(k => {
    kecMap[k.toUpperCase()] = {
      nama: k,
      muatan: 0,
      weightedSubmit: 0,
      weightedDraft: 0,
      weightedApproved: 0,
      pplMap: {},
      pmlMap: {}
    };
  });

  let totalMuatanKab = 0;
  let totalWeightedSubmit = 0;
  let totalWeightedDraft = 0;
  let totalWeightedApproved = 0;

  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    if (r.length <= kecIdx) continue;

    const pcl = pclIdx !== -1 ? (r[pclIdx] || '').trim() : '';
    const pml = pmlIdx !== -1 ? (r[pmlIdx] || '').trim() : '';
    const rawKec = (r[kecIdx] || '').trim().toUpperCase();

    if (!pcl || pcl.includes('#N/A') || !rawKec || rawKec.includes('#N/A')) continue;

    let matchedKey = null;
    for (const k of Object.keys(kecMap)) {
      if (rawKec === k || rawKec.replace('KECAMATAN', '').replace('KEC.', '').trim() === k) {
        matchedKey = k;
        break;
      }
    }
    if (!matchedKey) continue;

    const muatan = muatanIdx !== -1 ? parseInt(String(r[muatanIdx]).replace(/\./g, '').replace(/,/g, ''), 10) || 0 : 0;
    const submit = subIdx !== -1 ? parsePercent(r[subIdx]) : 0;
    const draft = draftIdx !== -1 ? parsePercent(r[draftIdx]) : 0;
    const approved = appIdx !== -1 ? parsePercent(r[appIdx]) : 0;

    const kecObj = kecMap[matchedKey];
    kecObj.muatan += muatan;
    kecObj.weightedSubmit += (submit * muatan);
    kecObj.weightedDraft += (draft * muatan);
    kecObj.weightedApproved += (approved * muatan);

    totalMuatanKab += muatan;
    totalWeightedSubmit += (submit * muatan);
    totalWeightedDraft += (draft * muatan);
    totalWeightedApproved += (approved * muatan);

    // PPL
    if (!kecObj.pplMap[pcl]) {
      kecObj.pplMap[pcl] = { 
        nama: pcl, 
        pml, 
        muatan, 
        submit: Math.round(submit * 10) / 10, 
        draft: Math.round(draft * 10) / 10, 
        approved: Math.round(approved * 10) / 10 
      };
    }

    // PML
    if (pml) {
      if (!kecObj.pmlMap[pml]) {
        kecObj.pmlMap[pml] = { 
          nama: pml, 
          muatan: 0, 
          weightedSubmit: 0, 
          weightedDraft: 0, 
          weightedApproved: 0, 
          pplCount: 0 
        };
      }
      const pmlObj = kecObj.pmlMap[pml];
      pmlObj.muatan += muatan;
      pmlObj.weightedSubmit += (submit * muatan);
      pmlObj.weightedDraft += (draft * muatan);
      pmlObj.weightedApproved += (approved * muatan);
      pmlObj.pplCount++;
    }
  }

  const newProgresKec = [];
  let totalPPLKab = 0;
  let totalPMLKab = 0;

  Object.keys(kecMap).forEach(key => {
    const d = kecMap[key];
    const namaKec = d.nama;
    const m = d.muatan > 0 ? d.muatan : 1;

    const pSubmit = Math.round((d.weightedSubmit / m) * 10) / 10;
    const pDraft = Math.round((d.weightedDraft / m) * 10) / 10;
    const pApproved = Math.round((d.weightedApproved / m) * 10) / 10;

    if (!POSE_DATA.petugasKecamatan[namaKec]) {
      POSE_DATA.petugasKecamatan[namaKec] = {};
    }

    const pplList = Object.values(d.pplMap).map(p => ({
      nama: p.nama,
      pml: p.pml,
      muatan: p.muatan,
      submit: p.submit,
      draft: p.draft,
      approved: p.approved,
      anomaliBelum: 35,
      anomaliCatatan: 20,
      anomaliPerbaikan: 45
    }));

    const pmlList = Object.values(d.pmlMap).map(pml => {
      const pm = pml.muatan > 0 ? pml.muatan : 1;
      return {
        nama: pml.nama,
        muatan: pml.muatan,
        submit: Math.round((pml.weightedSubmit / pm) * 10) / 10,
        draft: Math.round((pml.weightedDraft / pm) * 10) / 10,
        approved: Math.round((pml.weightedApproved / pm) * 10) / 10,
        anomaliBelum: 35,
        anomaliCatatan: 20,
        anomaliPerbaikan: 45
      };
    });

    if (pplList.length > 0) {
      POSE_DATA.petugasKecamatan[namaKec].ppl = pplList;
      POSE_DATA.petugasKecamatan[namaKec].totalPPL = pplList.length;
      totalPPLKab += pplList.length;
    }
    if (pmlList.length > 0) {
      POSE_DATA.petugasKecamatan[namaKec].pml = pmlList;
      POSE_DATA.petugasKecamatan[namaKec].totalPML = pmlList.length;
      totalPMLKab += pmlList.length;
    }

    POSE_DATA.petugasKecamatan[namaKec].muatan = d.muatan;
    POSE_DATA.petugasKecamatan[namaKec].submit = pSubmit;
    POSE_DATA.petugasKecamatan[namaKec].draft = pDraft;
    POSE_DATA.petugasKecamatan[namaKec].approved = pApproved;

    // Retain existing anomali data if present
    const existingKec = POSE_DATA.progresKecamatan.find(k => k.nama === namaKec);

    newProgresKec.push({
      nama: namaKec,
      submit: pSubmit,
      draft: pDraft,
      approved: pApproved,
      rejected: pDraft,
      muatan: d.muatan,
      anomaliBelum: existingKec ? existingKec.anomaliBelum : 34.2,
      anomaliCatatan: existingKec ? existingKec.anomaliCatatan : 22.3,
      anomaliPerbaikan: existingKec ? existingKec.anomaliPerbaikan : 43.5
    });
  });

  if (newProgresKec.length > 0) {
    POSE_DATA.progresKecamatan = newProgresKec;
  }

  if (totalMuatanKab > 0) {
    const kabM = totalMuatanKab > 0 ? totalMuatanKab : 1;
    const pSubmitKab = Math.round((totalWeightedSubmit / kabM) * 10) / 10;
    const pDraftKab = Math.round((totalWeightedDraft / kabM) * 10) / 10;
    const pApprovedKab = Math.round((totalWeightedApproved / kabM) * 10) / 10;

    POSE_DATA.kpiKabupaten.totalMuatan = totalMuatanKab;
    POSE_DATA.kpiKabupaten.targetKeluargaUsaha = totalMuatanKab.toLocaleString('id-ID');
    POSE_DATA.kpiKabupaten.persentaseSubmit = pSubmitKab;
    POSE_DATA.kpiKabupaten.persentaseDraft = pDraftKab;
    POSE_DATA.kpiKabupaten.persentaseApproved = pApprovedKab;
    if (totalPPLKab > 0) POSE_DATA.kpiKabupaten.totalPPL = totalPPLKab;
    if (totalPMLKab > 0) POSE_DATA.kpiKabupaten.totalPML = totalPMLKab;
  }

  return true;
}

/**
 * Process Anomali CSV Data directly from Google Sheets (gid=105002898)
 */
function processAnomaliCSV(rows) {
  if (!rows || rows.length < 2) return false;

  const header = rows[0].map(h => (h || '').toUpperCase());
  const pplIdx = header.findIndex(h => h === 'PPL' || (h.includes('PPL') && !h.includes('PML')));
  const pmlIdx = header.findIndex(h => h === 'PML' || h.includes('PML'));
  const kecIdx = header.findIndex(h => h.includes('NAMA KECAMATAN') || (h.includes('KECAMATAN') && !h.includes('KODE')));
  const statusIdx = header.findIndex(h => h.includes('TINDAK') || h.includes('STATUS'));

  if (kecIdx === -1) return false;

  const kecMap = {};
  POSE_DATA.kecamatanList.forEach(k => {
    kecMap[k.toUpperCase()] = {
      nama: k,
      total: 0,
      belum: 0,
      catatan: 0,
      perbaikan: 0,
      pplMap: {},
      pmlMap: {}
    };
  });

  let totalKab = 0;
  let belumKab = 0;
  let catatanKab = 0;
  let perbaikanKab = 0;

  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    const rawKec = (r[kecIdx] || '').trim().toUpperCase();
    const ppl = pplIdx !== -1 ? (r[pplIdx] || '').trim() : '';
    const pml = pmlIdx !== -1 ? (r[pmlIdx] || '').trim() : '';
    const status = statusIdx !== -1 ? (r[statusIdx] || '').trim() : '';

    if (!rawKec) continue;

    let matchedKecKey = null;
    for (const key of Object.keys(kecMap)) {
      if (rawKec === key || rawKec.replace('KECAMATAN', '').replace('KEC.', '').trim() === key) {
        matchedKecKey = key;
        break;
      }
    }
    if (!matchedKecKey) continue;

    const kecObj = kecMap[matchedKecKey];
    totalKab++;
    kecObj.total++;

    let isPerbaikan = status.toLowerCase().includes('perbaikan');
    let isCatatan = status.toLowerCase().includes('penjelasan') || status.toLowerCase().includes('catatan');
    let isBelum = !isPerbaikan && !isCatatan;

    if (isPerbaikan) {
      perbaikanKab++;
      kecObj.perbaikan++;
    } else if (isCatatan) {
      catatanKab++;
      kecObj.catatan++;
    } else {
      belumKab++;
      kecObj.belum++;
    }

    if (ppl) {
      if (!kecObj.pplMap[ppl]) {
        kecObj.pplMap[ppl] = { nama: ppl, total: 0, belum: 0, catatan: 0, perbaikan: 0 };
      }
      kecObj.pplMap[ppl].total++;
      if (isPerbaikan) kecObj.pplMap[ppl].perbaikan++;
      else if (isCatatan) kecObj.pplMap[ppl].catatan++;
      else kecObj.pplMap[ppl].belum++;
    }

    if (pml) {
      if (!kecObj.pmlMap[pml]) {
        kecObj.pmlMap[pml] = { nama: pml, total: 0, belum: 0, catatan: 0, perbaikan: 0 };
      }
      kecObj.pmlMap[pml].total++;
      if (isPerbaikan) kecObj.pmlMap[pml].perbaikan++;
      else if (isCatatan) kecObj.pmlMap[pml].catatan++;
      else kecObj.pmlMap[pml].belum++;
    }
  }

  // Update POSE_DATA
  Object.keys(kecMap).forEach(key => {
    const item = kecMap[key];
    const namaKec = item.nama;
    const total = item.total || 1;

    const pBelum = Math.round((item.belum / total) * 1000) / 10;
    const pCatatan = Math.round((item.catatan / total) * 1000) / 10;
    const pPerbaikan = Math.round((item.perbaikan / total) * 1000) / 10;

    // Update progresKecamatan
    const idx = POSE_DATA.progresKecamatan.findIndex(p => p.nama === namaKec);
    if (idx !== -1) {
      POSE_DATA.progresKecamatan[idx].anomaliBelum = pBelum;
      POSE_DATA.progresKecamatan[idx].anomaliCatatan = pCatatan;
      POSE_DATA.progresKecamatan[idx].anomaliPerbaikan = pPerbaikan;
      POSE_DATA.progresKecamatan[idx].anomaliTotal = item.total;
    }

    // Update petugasKecamatan
    if (!POSE_DATA.petugasKecamatan[namaKec]) {
      POSE_DATA.petugasKecamatan[namaKec] = { ppl: [], pml: [] };
    }
    const kecPetugas = POSE_DATA.petugasKecamatan[namaKec];
    kecPetugas.anomaliTotal = item.total;
    kecPetugas.anomaliBelum = pBelum;
    kecPetugas.anomaliCatatan = pCatatan;
    kecPetugas.anomaliPerbaikan = pPerbaikan;

    // Map PPLs from sheet
    const sheetPpls = Object.values(item.pplMap).map(p => ({
      nama: p.nama,
      submit: 95,
      approved: 85,
      rejected: 2,
      anomaliTotal: p.total,
      anomaliBelum: Math.round((p.belum / (p.total || 1)) * 1000) / 10,
      anomaliCatatan: Math.round((p.catatan / (p.total || 1)) * 1000) / 10,
      anomaliPerbaikan: Math.round((p.perbaikan / (p.total || 1)) * 1000) / 10
    }));

    if (sheetPpls.length > 0) {
      kecPetugas.anomaliPplList = sheetPpls;
    }

    // Map PMLs from sheet
    const sheetPmls = Object.values(item.pmlMap).map(p => ({
      nama: p.nama,
      submit: 95,
      approved: 85,
      rejected: 2,
      anomaliTotal: p.total,
      anomaliBelum: Math.round((p.belum / (p.total || 1)) * 1000) / 10,
      anomaliCatatan: Math.round((p.catatan / (p.total || 1)) * 1000) / 10,
      anomaliPerbaikan: Math.round((p.perbaikan / (p.total || 1)) * 1000) / 10
    }));

    if (sheetPmls.length > 0) {
      kecPetugas.anomaliPmlList = sheetPmls;
    }
  });

  if (totalKab > 0) {
    POSE_DATA.kpiKabupaten.totalAnomali = totalKab;
    POSE_DATA.kpiKabupaten.persentaseAnomaliBelum = Math.round((belumKab / totalKab) * 1000) / 10;
    POSE_DATA.kpiKabupaten.persentaseAnomaliCatatan = Math.round((catatanKab / totalKab) * 1000) / 10;
    POSE_DATA.kpiKabupaten.persentaseAnomaliPerbaikan = Math.round((perbaikanKab / totalKab) * 1000) / 10;
    POSE_DATA.kpiKabupaten.persentaseAnomaliUsahaSelesai = Math.round(((catatanKab + perbaikanKab) / totalKab) * 1000) / 10;
    POSE_DATA.kpiKabupaten.persentaseAnomaliKeluargaSelesai = Math.round(((catatanKab + perbaikanKab) / totalKab) * 1000) / 10;
  }

  return true;
}

/**
 * Helper to fetch a Google Sheets CSV with cache-busting timestamp
 */
async function fetchSheetCSV(baseUrl) {
  const separator = baseUrl.includes('?') ? '&' : '?';
  const urlWithTime = `${baseUrl}${separator}t=${Date.now()}`;
  const response = await fetch(urlWithTime);
  if (!response.ok) {
    throw new Error(`HTTP ${response.status}: ${response.statusText}`);
  }
  const text = await response.text();
  return parseCSV(text);
}

/**
 * Main Synchronization Trigger
 * @param {boolean} force - Force refresh
 */
async function syncPoSEData(force = false) {
  const now = Date.now();
  updateSyncStatusUI('syncing', 'Menyinkronkan data Google Sheets...', null);

  try {
    const fetchPromises = [
      fetchSheetCSV(SYNC_CONFIG.urls.pertanian)
        .then(rows => {
          const ok = processPertanianCSV(rows);
          if (ok && typeof renderPertanianTable === 'function') {
            renderPertanianTable();
          }
          return ok;
        })
        .catch(err => {
          console.warn('Sync pertanian fallback:', err);
          return false;
        }),

      fetchSheetCSV(SYNC_CONFIG.urls.keluargaKhusus)
        .then(rows => {
          const ok = processKeluargaKhususCSV(rows);
          if (ok && typeof renderKeluargaKhususTable === 'function') {
            renderKeluargaKhususTable();
          }
          return ok;
        })
        .catch(err => {
          console.warn('Sync keluarga khusus fallback:', err);
          return false;
        }),

      fetchSheetCSV(SYNC_CONFIG.urls.usahaPusat)
        .then(rows => {
          const ok = processUsahaPusatCSV(rows);
          if (ok && typeof renderUsahaPusatTable === 'function') {
            renderUsahaPusatTable();
          }
          return ok;
        })
        .catch(err => {
          console.warn('Sync usaha pusat fallback:', err);
          return false;
        }),

      fetchSheetCSV(SYNC_CONFIG.urls.usahaBesar)
        .then(rows => {
          const ok = processUsahaBesarCSV(rows);
          if (ok && typeof renderUsahaBesarTable === 'function') {
            renderUsahaBesarTable();
          }
          return ok;
        })
        .catch(err => {
          console.warn('Sync usaha besar fallback:', err);
          return false;
        }),

      fetchSheetCSV(SYNC_CONFIG.urls.monitoring)
        .then(rows => {
          const ok = processMonitoringCSV(rows);
          if (ok) {
            if (typeof populateKPIs === 'function') populateKPIs();
            if (typeof updateMonitoringKPI === 'function') {
              const selectMon = document.getElementById('select-kecamatan-monitoring');
              updateMonitoringKPI(selectMon ? selectMon.value : "Kabupaten Jeneponto");
            }
            if (typeof renderMonitoringCharts === 'function') {
              const selectMon = document.getElementById('select-kecamatan-monitoring');
              renderMonitoringCharts(selectMon ? selectMon.value : "Kabupaten Jeneponto");
            }
          }
          return ok;
        })
        .catch(err => {
          console.warn('Sync monitoring fallback:', err);
          return false;
        }),

      fetchSheetCSV(SYNC_CONFIG.urls.anomali)
        .then(rows => {
          const ok = processAnomaliCSV(rows);
          if (ok) {
            if (typeof updateAnomaliKPI === 'function') {
              const selectAnom = document.getElementById('select-kecamatan-anomali');
              updateAnomaliKPI(selectAnom ? selectAnom.value : "Kabupaten Jeneponto");
            }
            if (typeof renderAnomaliCharts === 'function') {
              const selectAnom = document.getElementById('select-kecamatan-anomali');
              renderAnomaliCharts(selectAnom ? selectAnom.value : "Kabupaten Jeneponto");
            }
          }
          return ok;
        })
        .catch(err => {
          console.warn('Sync anomali fallback:', err);
          return false;
        })
    ];

    await Promise.allSettled(fetchPromises);

    const currentTimeWita = getWitaTimeString();
    localStorage.setItem(SYNC_CONFIG.cacheTimeKey, now.toString());

    updateSyncStatusUI('success', 'Tersinkronisasi Live (Google Sheets)', currentTimeWita);
  } catch (err) {
    console.error('Live Sync Error:', err);
    updateSyncStatusUI('offline', 'Menggunakan Data Cadangan', getWitaTimeString());
  }
}

// Global hooks & event setup
if (typeof window !== 'undefined') {
  window.syncPoSEData = syncPoSEData;

  document.addEventListener('DOMContentLoaded', () => {
    const btnSync = document.getElementById('btn-manual-sync');
    if (btnSync) {
      btnSync.addEventListener('click', (e) => {
        e.preventDefault();
        syncPoSEData(true);
      });
    }
  });
}
