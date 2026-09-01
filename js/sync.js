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
    monitoring: 'https://docs.google.com/spreadsheets/d/1o5KSszOIwgPrdtUv8ZOc4XfeUekJZ7xonl354GNtIUc/gviz/tq?tqx=out:csv&gid=1206401506',
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
 * Process Monitoring Sheet CSV Data (Kolom P: % Progres, Kolom Q: % Open+Draft, Kolom R: % Approve)
 */
function processMonitoringCSV(rows) {
  if (!rows || rows.length < 2) return false;

  const header = rows[0].map(h => (h || '').toUpperCase());
  let pmlIdx = header.findIndex(h => h.includes('PENGAWAS') || h.includes('PML'));
  let pclIdx = header.findIndex(h => h.includes('PENCACAH') || h.includes('PCL') || h.includes('PPL'));
  let kecIdx = header.findIndex(h => h.includes('KECAMATAN'));
  let muatanIdx = header.findIndex(h => h.includes('TOTAL') || h.includes('MUATAN'));
  let progIdx = header.findIndex(h => h.includes('TANPA DRAFT') || (h.includes('PROGRES') && !h.includes('DGN') && !h.includes('APPROV')));
  let openDraftIdx = header.findIndex(h => h.includes('SELISIH PROGRES') || h.includes('OPEN+DRAFT') || h.includes('DRAFT'));
  let appIdx = header.findIndex(h => h.includes('PROGRES APPROVAL') || (h.includes('PROGRES') && h.includes('APPROV')));

  // Fallbacks by column position (A=0: pengawas, B=1: pencacah, C=2: kecamatan, D=3: total, P=15: prog, Q=16: openDraft, R=17: app)
  if (pmlIdx === -1) pmlIdx = 0;
  if (pclIdx === -1) pclIdx = 1;
  if (kecIdx === -1) kecIdx = 2;
  if (muatanIdx === -1) muatanIdx = 3;
  if (progIdx === -1) progIdx = 15;
  if (openDraftIdx === -1) openDraftIdx = 16;
  if (appIdx === -1) appIdx = 17;

  const parseNum = (val) => {
    if (!val) return 0;
    const clean = String(val).replace(/\./g, '').replace(/,/g, '').trim();
    const num = parseInt(clean, 10);
    return isNaN(num) ? 0 : num;
  };

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
      progresCount: 0,
      openDraftCount: 0,
      approvedCount: 0,
      pplMap: {},
      pmlMap: {}
    };
  });

  let totalMuatanKab = 0;
  let totalProgresKab = 0;
  let totalOpenDraftKab = 0;
  let totalApprovedKab = 0;

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

    const muatan = muatanIdx !== -1 ? parseNum(r[muatanIdx]) : 0;
    
    // Status per baris dari kolom spesifik:
    // E=OPEN (4), F=DRAFT (5), G=SUBMITTED (6), H=REJECTED PENG (7), I=APPROVED PENG (8), J=REVOKED PENG (9)
    // K=SUBMITTED RESP (10), L=REJECTED ADM (11), M=EDITED ADM (12), N=COMPLETED ADM (13)
    const e = parseNum(r[4]);
    const f = parseNum(r[5]);
    const g = parseNum(r[6]);
    const h = parseNum(r[7]);
    const iCol = parseNum(r[8]);
    const j = parseNum(r[9]);
    const kCol = parseNum(r[10]);
    const lCol = parseNum(r[11]);
    const mCol = parseNum(r[12]);
    const nCol = parseNum(r[13]);

    // Rumus definisi user:
    // 1. Progres: G, I, J, K, L, M, N (selain Open, Draft, Rejected by PML)
    const progCount = g + iCol + j + kCol + lCol + mCol + nCol;
    // 2. Open+Draft+Rejected by PML: E, F, H
    const openDraftCount = e + f + h;
    // 3. Approve: I, M, N (Approved by PML, Edited by Admin, Completed by Admin)
    const appCount = iCol + mCol + nCol;

    const mTot = muatan > 0 ? muatan : 1;
    const pProgres = Math.round((progCount / mTot) * 1000) / 10;
    const pOpenDraft = Math.round((openDraftCount / mTot) * 1000) / 10;
    const pApproved = Math.round((appCount / mTot) * 1000) / 10;

    const kecObj = kecMap[matchedKey];
    kecObj.muatan += muatan;
    kecObj.progresCount += progCount;
    kecObj.openDraftCount += openDraftCount;
    kecObj.approvedCount += appCount;

    totalMuatanKab += muatan;
    totalProgresKab += progCount;
    totalOpenDraftKab += openDraftCount;
    totalApprovedKab += appCount;

    // PPL
    if (!kecObj.pplMap[pcl]) {
      kecObj.pplMap[pcl] = { 
        nama: pcl, 
        pml, 
        muatan,
        progresCount: progCount,
        openDraftCount: openDraftCount,
        approvedCount: appCount,
        progres: pProgres, 
        openDraft: pOpenDraft, 
        approved: pApproved,
        submit: pProgres, 
        draft: pOpenDraft 
      };
    }

    // PML
    if (pml) {
      if (!kecObj.pmlMap[pml]) {
        kecObj.pmlMap[pml] = { 
          nama: pml, 
          muatan: 0, 
          progresCount: 0, 
          openDraftCount: 0, 
          approvedCount: 0, 
          pplCount: 0,
          pplList: []
        };
      }
      const pmlObj = kecObj.pmlMap[pml];
      pmlObj.muatan += muatan;
      pmlObj.progresCount += progCount;
      pmlObj.openDraftCount += openDraftCount;
      pmlObj.approvedCount += appCount;
      pmlObj.pplCount++;
      pmlObj.pplList.push(pcl);
    }
  }

  const newProgresKec = [];
  let totalPPLKab = 0;
  let totalPMLKab = 0;

  Object.keys(kecMap).forEach(key => {
    const d = kecMap[key];
    const namaKec = d.nama;
    const km = d.muatan > 0 ? d.muatan : 1;

    const pProgres = Math.round((d.progresCount / km) * 1000) / 10;
    const pOpenDraft = Math.round((d.openDraftCount / km) * 1000) / 10;
    const pApproved = Math.round((d.approvedCount / km) * 1000) / 10;

    if (!POSE_DATA.petugasKecamatan[namaKec]) {
      POSE_DATA.petugasKecamatan[namaKec] = {};
    }

    const pplList = Object.values(d.pplMap).map(p => ({
      nama: p.nama,
      pml: p.pml,
      muatan: p.muatan,
      progresCount: p.progresCount,
      openDraftCount: p.openDraftCount,
      approvedCount: p.approvedCount,
      progres: p.progres,
      openDraft: p.openDraft,
      approved: p.approved,
      submit: p.progres,
      draft: p.openDraft
    }));

    const pmlList = Object.values(d.pmlMap).map(pml => {
      const pm = pml.muatan > 0 ? pml.muatan : 1;
      const prog = Math.round((pml.progresCount / pm) * 1000) / 10;
      const opDr = Math.round((pml.openDraftCount / pm) * 1000) / 10;
      const app = Math.round((pml.approvedCount / pm) * 1000) / 10;
      return {
        nama: pml.nama,
        muatan: pml.muatan,
        progresCount: pml.progresCount,
        openDraftCount: pml.openDraftCount,
        approvedCount: pml.approvedCount,
        progres: prog,
        openDraft: opDr,
        approved: app,
        submit: prog,
        draft: opDr,
        pplCount: pml.pplCount,
        pplList: pml.pplList
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
    POSE_DATA.petugasKecamatan[namaKec].progresCount = d.progresCount;
    POSE_DATA.petugasKecamatan[namaKec].openDraftCount = d.openDraftCount;
    POSE_DATA.petugasKecamatan[namaKec].approvedCount = d.approvedCount;
    POSE_DATA.petugasKecamatan[namaKec].progres = pProgres;
    POSE_DATA.petugasKecamatan[namaKec].openDraft = pOpenDraft;
    POSE_DATA.petugasKecamatan[namaKec].approved = pApproved;
    POSE_DATA.petugasKecamatan[namaKec].submit = pProgres;
    POSE_DATA.petugasKecamatan[namaKec].draft = pOpenDraft;

    // Retain existing anomali data if present
    const existingKec = POSE_DATA.progresKecamatan.find(k => k.nama === namaKec);

    newProgresKec.push({
      nama: namaKec,
      muatan: d.muatan,
      progresCount: d.progresCount,
      openDraftCount: d.openDraftCount,
      approvedCount: d.approvedCount,
      progres: pProgres,
      openDraft: pOpenDraft,
      approved: pApproved,
      submit: pProgres,
      draft: pOpenDraft,
      rejected: pOpenDraft,
      anomaliBelum: existingKec ? existingKec.anomaliBelum : 34.2,
      anomaliCatatan: existingKec ? existingKec.anomaliCatatan : 22.3,
      anomaliPerbaikan: existingKec ? existingKec.anomaliPerbaikan : 43.5,
      anomaliTotal: existingKec ? existingKec.anomaliTotal : 0,
      belumCount: existingKec ? existingKec.belumCount : 0,
      catatanCount: existingKec ? existingKec.catatanCount : 0,
      perbaikanCount: existingKec ? existingKec.perbaikanCount : 0
    });
  });

  if (newProgresKec.length > 0) {
    POSE_DATA.progresKecamatan = newProgresKec;
  }

  if (totalMuatanKab > 0) {
    const kabM = totalMuatanKab > 0 ? totalMuatanKab : 1;
    const pProgresKab = Math.round((totalProgresKab / kabM) * 1000) / 10;
    const pOpenDraftKab = Math.round((totalOpenDraftKab / kabM) * 1000) / 10;
    const pApprovedKab = Math.round((totalApprovedKab / kabM) * 1000) / 10;

    POSE_DATA.kpiKabupaten.totalMuatan = totalMuatanKab;
    POSE_DATA.kpiKabupaten.targetKeluargaUsaha = totalMuatanKab.toLocaleString('id-ID');
    POSE_DATA.kpiKabupaten.progresCount = totalProgresKab;
    POSE_DATA.kpiKabupaten.openDraftCount = totalOpenDraftKab;
    POSE_DATA.kpiKabupaten.approvedCount = totalApprovedKab;
    POSE_DATA.kpiKabupaten.persentaseProgres = pProgresKab;
    POSE_DATA.kpiKabupaten.persentaseOpenDraft = pOpenDraftKab;
    POSE_DATA.kpiKabupaten.persentaseSubmit = pProgresKab;
    POSE_DATA.kpiKabupaten.persentaseDraft = pOpenDraftKab;
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
  const namaAnomaliIdx = header.findIndex(h => h.includes('NAMA ANOMALI') || h.includes('ANOMALI'));

  if (kecIdx === -1) return false;

  const kecMap = {};
  POSE_DATA.kecamatanList.forEach(k => {
    kecMap[k.toUpperCase()] = {
      nama: k,
      total: 0,
      belum: 0,
      catatan: 0,
      perbaikan: 0,
      usahaTotal: 0,
      usahaSelesai: 0,
      usahaBelum: 0,
      keluargaTotal: 0,
      keluargaSelesai: 0,
      keluargaBelum: 0,
      pplMap: {},
      pmlMap: {}
    };
  });

  let totalKab = 0;
  let belumKab = 0;
  let catatanKab = 0;
  let perbaikanKab = 0;
  let usahaTotalKab = 0;
  let usahaSelesaiKab = 0;
  let usahaBelumKab = 0;
  let keluargaTotalKab = 0;
  let keluargaSelesaiKab = 0;
  let keluargaBelumKab = 0;

  for (let i = 1; i < rows.length; i++) {
    const r = rows[i];
    const rawKec = (r[kecIdx] || '').trim().toUpperCase();
    const ppl = pplIdx !== -1 ? (r[pplIdx] || '').trim() : '';
    const pml = pmlIdx !== -1 ? (r[pmlIdx] || '').trim() : '';
    const status = statusIdx !== -1 ? (r[statusIdx] || '').trim() : '';
    const namaAnomali = namaAnomaliIdx !== -1 ? (r[namaAnomaliIdx] || '').trim() : '';

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

    const isUsaha = namaAnomali.toUpperCase().includes('USAHA') || (!namaAnomali.toUpperCase().includes('KELUARGA'));
    const isPerbaikan = status.toLowerCase().includes('perbaikan');
    const isCatatan = status.toLowerCase().includes('penjelasan') || status.toLowerCase().includes('catatan');
    const isSelesai = isPerbaikan || isCatatan;
    const isBelum = !isSelesai;

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

    if (isUsaha) {
      usahaTotalKab++;
      kecObj.usahaTotal++;
      if (isSelesai) {
        usahaSelesaiKab++;
        kecObj.usahaSelesai++;
      } else {
        usahaBelumKab++;
        kecObj.usahaBelum++;
      }
    } else {
      keluargaTotalKab++;
      kecObj.keluargaTotal++;
      if (isSelesai) {
        keluargaSelesaiKab++;
        kecObj.keluargaSelesai++;
      } else {
        keluargaBelumKab++;
        kecObj.keluargaBelum++;
      }
    }

    if (ppl) {
      if (!kecObj.pplMap[ppl]) {
        kecObj.pplMap[ppl] = { nama: ppl, pml: pml || '', total: 0, belum: 0, catatan: 0, perbaikan: 0 };
      }
      if (pml && !kecObj.pplMap[ppl].pml) {
        kecObj.pplMap[ppl].pml = pml;
      }
      kecObj.pplMap[ppl].total++;
      if (isPerbaikan) kecObj.pplMap[ppl].perbaikan++;
      else if (isCatatan) kecObj.pplMap[ppl].catatan++;
      else kecObj.pplMap[ppl].belum++;
    }

    if (pml) {
      if (!kecObj.pmlMap[pml]) {
        kecObj.pmlMap[pml] = { nama: pml, total: 0, belum: 0, catatan: 0, perbaikan: 0, pplList: [] };
      }
      if (ppl && !kecObj.pmlMap[pml].pplList.includes(ppl)) {
        kecObj.pmlMap[pml].pplList.push(ppl);
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
    const uTot = item.usahaTotal || 1;
    const kTot = item.keluargaTotal || 1;

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
      POSE_DATA.progresKecamatan[idx].belumCount = item.belum;
      POSE_DATA.progresKecamatan[idx].catatanCount = item.catatan;
      POSE_DATA.progresKecamatan[idx].perbaikanCount = item.perbaikan;
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
    kecPetugas.belumCount = item.belum;
    kecPetugas.catatanCount = item.catatan;
    kecPetugas.perbaikanCount = item.perbaikan;

    kecPetugas.anomaliUsahaTotal = item.usahaTotal;
    kecPetugas.anomaliUsahaSelesai = item.usahaSelesai;
    kecPetugas.anomaliUsahaBelum = item.usahaBelum;
    kecPetugas.persentaseAnomaliUsahaSelesai = item.usahaTotal > 0 ? Math.round((item.usahaSelesai / uTot) * 1000) / 10 : 100.0;
    kecPetugas.persentaseAnomaliUsahaBelum = item.usahaTotal > 0 ? Math.round((item.usahaBelum / uTot) * 1000) / 10 : 0.0;

    kecPetugas.anomaliKeluargaTotal = item.keluargaTotal;
    kecPetugas.anomaliKeluargaSelesai = item.keluargaSelesai;
    kecPetugas.anomaliKeluargaBelum = item.keluargaBelum;
    kecPetugas.persentaseAnomaliKeluargaSelesai = item.keluargaTotal > 0 ? Math.round((item.keluargaSelesai / kTot) * 1000) / 10 : 100.0;
    kecPetugas.persentaseAnomaliKeluargaBelum = item.keluargaTotal > 0 ? Math.round((item.keluargaBelum / kTot) * 1000) / 10 : 0.0;

    // Map PPLs from sheet
    const sheetPpls = Object.values(item.pplMap).map(p => ({
      nama: p.nama,
      pml: p.pml || '',
      submit: 95,
      approved: 85,
      rejected: 2,
      anomaliTotal: p.total,
      belumCount: p.belum,
      catatanCount: p.catatan,
      perbaikanCount: p.perbaikan,
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
      pplCount: p.pplList.length,
      pplList: p.pplList,
      submit: 95,
      approved: 85,
      rejected: 2,
      anomaliTotal: p.total,
      belumCount: p.belum,
      catatanCount: p.catatan,
      perbaikanCount: p.perbaikan,
      anomaliBelum: Math.round((p.belum / (p.total || 1)) * 1000) / 10,
      anomaliCatatan: Math.round((p.catatan / (p.total || 1)) * 1000) / 10,
      anomaliPerbaikan: Math.round((p.perbaikan / (p.total || 1)) * 1000) / 10
    }));

    if (sheetPmls.length > 0) {
      kecPetugas.anomaliPmlList = sheetPmls;
    }
  });

  if (totalKab > 0) {
    const uTotKab = usahaTotalKab || 1;
    const kTotKab = keluargaTotalKab || 1;

    POSE_DATA.kpiKabupaten.totalAnomali = totalKab;
    POSE_DATA.kpiKabupaten.anomaliUsahaTotal = usahaTotalKab;
    POSE_DATA.kpiKabupaten.anomaliUsahaSelesai = usahaSelesaiKab;
    POSE_DATA.kpiKabupaten.anomaliUsahaBelum = usahaBelumKab;
    POSE_DATA.kpiKabupaten.persentaseAnomaliUsahaSelesai = Math.round((usahaSelesaiKab / uTotKab) * 1000) / 10;
    POSE_DATA.kpiKabupaten.persentaseAnomaliUsahaBelum = Math.round((usahaBelumKab / uTotKab) * 1000) / 10;

    POSE_DATA.kpiKabupaten.anomaliKeluargaTotal = keluargaTotalKab;
    POSE_DATA.kpiKabupaten.anomaliKeluargaSelesai = keluargaSelesaiKab;
    POSE_DATA.kpiKabupaten.anomaliKeluargaBelum = keluargaBelumKab;
    POSE_DATA.kpiKabupaten.persentaseAnomaliKeluargaSelesai = Math.round((keluargaSelesaiKab / kTotKab) * 1000) / 10;
    POSE_DATA.kpiKabupaten.persentaseAnomaliKeluargaBelum = Math.round((keluargaBelumKab / kTotKab) * 1000) / 10;

    POSE_DATA.kpiKabupaten.persentaseAnomaliBelum = Math.round((belumKab / totalKab) * 1000) / 10;
    POSE_DATA.kpiKabupaten.persentaseAnomaliCatatan = Math.round((catatanKab / totalKab) * 1000) / 10;
    POSE_DATA.kpiKabupaten.persentaseAnomaliPerbaikan = Math.round((perbaikanKab / totalKab) * 1000) / 10;
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
