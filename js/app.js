/**
 * PoSE - Portal Sensus Ekonomi 2026 BPS Kabupaten Jeneponto
 * Main Application Logic & UI Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initDropdowns();
  initKBLIDropdown();
  populateKPIs();
  initPoSECharts();
  renderPertanianTable();
  renderUsahaBesarTable();
  renderKBLITable();
  renderUsahaPusatTable();
  renderKeluargaKhususTable();
  setupEventListeners();
  setupLinks();

  // Background Live Sync with Google Sheets (Smart Cache Hybrid)
  if (typeof syncPoSEData === 'function') {
    syncPoSEData(false);

    // Auto-sync setiap 5 menit untuk selalu update data terbaru
    const SYNC_INTERVAL_MS = 5 * 60 * 1000; // 5 menit
    setInterval(() => {
      if (typeof syncPoSEData === 'function') {
        syncPoSEData(false);
      }
    }, SYNC_INTERVAL_MS);
  }
});

/**
 * Populate Dropdown Menus for Kecamatan
 */
function initDropdowns() {
  const selectMonitoring = document.getElementById('select-kecamatan-monitoring');
  const selectAnomali = document.getElementById('select-kecamatan-anomali');
  const selectPertanian = document.getElementById('select-kecamatan-pertanian');

  const populateOptions = (selectElem, isPertanian = false) => {
    if (!selectElem) return;
    selectElem.innerHTML = isPertanian 
      ? `<option value="Semua">Semua Kecamatan (11 Kecamatan)</option>`
      : `<option value="Kabupaten Jeneponto">Kabupaten Jeneponto (Semua)</option>`;
    POSE_DATA.kecamatanList.forEach(kec => {
      const opt = document.createElement('option');
      opt.value = kec;
      opt.textContent = `Kecamatan ${kec}`;
      selectElem.appendChild(opt);
    });
  };

  populateOptions(selectMonitoring);
  populateOptions(selectAnomali);
  populateOptions(selectPertanian, true);
}

/**
 * Populate KBLI Category Dropdown (Sheet A - V)
 */
function initKBLIDropdown() {
  const selectKbliKategori = document.getElementById('select-kbli-kategori');
  if (!selectKbliKategori || !POSE_DATA.kbliCategories) return;

  selectKbliKategori.innerHTML = '<option value="Semua">Semua Kategori (Sheet A - V)</option>';

  Object.entries(POSE_DATA.kbliCategories).forEach(([key, info]) => {
    const opt = document.createElement('option');
    opt.value = key;
    const count = POSE_DATA.kbliJeneponto ? POSE_DATA.kbliJeneponto.filter(x => x.kategori === key).length : 0;
    opt.textContent = `${info.name} (${count} KBLI)`;
    selectKbliKategori.appendChild(opt);
  });
}

/**
 * Populate Summary KPI Values in Header & Dashboard
 */
function populateKPIs() {
  const kpi = POSE_DATA.kpiKabupaten;
  
  // Monitoring KPIs
  const elSubmit = document.getElementById('kpi-submit-val');
  const elDraft = document.getElementById('kpi-draft-val');
  const elApproved = document.getElementById('kpi-approved-val');
  const barSubmit = document.getElementById('kpi-submit-bar');
  const barDraft = document.getElementById('kpi-draft-bar');
  const barApproved = document.getElementById('kpi-approved-bar');

  if (elSubmit) elSubmit.textContent = kpi.persentaseSubmit;
  if (elDraft) elDraft.textContent = kpi.persentaseDraft;
  if (elApproved) elApproved.textContent = kpi.persentaseApproved;
  if (barSubmit) barSubmit.style.width = `${kpi.persentaseSubmit}%`;
  if (barDraft) barDraft.style.width = `${kpi.persentaseDraft}%`;
  if (barApproved) barApproved.style.width = `${kpi.persentaseApproved}%`;

  // Anomali KPIs (5 Kartu Dinamis)
  updateAnomaliKPI("Kabupaten Jeneponto");
}

/**
 * Setup External Action Links from POSE_DATA
 */
function setupLinks() {
  const linkElements = {
    'btn-link-pertanian': POSE_DATA.links.pertanian,
    'btn-link-pertanian-2': POSE_DATA.links.pertanian,
    'btn-link-monitoring': POSE_DATA.links.monitoringPetugas,
    'btn-link-monitoring-2': POSE_DATA.links.monitoringPetugas,
    'btn-link-anomali': POSE_DATA.links.anomaliData,
    'btn-link-pusat': POSE_DATA.links.dataPusat,
    'btn-link-usaha-besar': POSE_DATA.links.usahaBesar,
    'btn-link-usaha-besar-2': POSE_DATA.links.usahaBesar,
    'btn-link-kbli': POSE_DATA.links.kbli2025,
    'btn-link-keluarga': POSE_DATA.links.keluargaKhusus,
    'btn-link-keluarga-2': POSE_DATA.links.keluargaKhusus,
    'btn-link-materi-1': POSE_DATA.links.materiKuesioner,
    'btn-link-materi-2': POSE_DATA.links.materiPedoman,
    'btn-link-materi-3': POSE_DATA.links.materiBahanTayang,
    'btn-link-materi-all': POSE_DATA.links.materiBahanTayang,
    'btn-link-briefing': POSE_DATA.links.weeklyBriefing,
    'btn-link-briefing-2': POSE_DATA.links.weeklyBriefing
  };

  Object.entries(linkElements).forEach(([id, url]) => {
    const el = document.getElementById(id);
    if (el) {
      el.setAttribute('href', url);
      el.setAttribute('target', '_blank');
      el.setAttribute('rel', 'noopener noreferrer');
    }
  });
}

/**
 * Render KBLI 2025 Table with Live Filtering (Sheet A-V & Frekuensi)
 */
let currentKbliCategory = 'Semua';
let currentKbliFrekuensi = 'Semua';
let kbliSearchQuery = '';
let isKbliExpanded = false;

function renderKBLITable() {
  const tableBody = document.getElementById('kbli-table-body');
  const countText = document.getElementById('kbli-count-text');
  const toggleWrap = document.getElementById('kbli-toggle-wrap');
  const toggleIcon = document.getElementById('icon-toggle-kbli');
  const toggleBtnText = document.getElementById('text-toggle-kbli');
  if (!tableBody) return;

  if (!POSE_DATA.kbliJeneponto) {
    tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 24px;">Memuat data KBLI...</td></tr>`;
    return;
  }

  const query = kbliSearchQuery.toLowerCase();

  const filtered = POSE_DATA.kbliJeneponto.filter(item => {
    // Match Category Sheet
    const matchCategory = currentKbliCategory === 'Semua' || item.kategori === currentKbliCategory;
    
    // Match Frekuensi
    const matchFrekuensi = currentKbliFrekuensi === 'Semua' || item.frekuensi === currentKbliFrekuensi;
    
    // Match Search Query
    const matchSearch = !query || 
      item.kode.toLowerCase().includes(query) ||
      item.judul.toLowerCase().includes(query) ||
      item.deskripsi.toLowerCase().includes(query) ||
      item.kategoriNama.toLowerCase().includes(query) ||
      item.kategori.toLowerCase() === query;

    return matchCategory && matchFrekuensi && matchSearch;
  });

  const totalFiltered = filtered.length;
  const displayItems = isKbliExpanded ? filtered : filtered.slice(0, 5);

  if (countText) {
    if (totalFiltered <= 5 || isKbliExpanded) {
      countText.textContent = `Menampilkan ${displayItems.length} dari ${POSE_DATA.kbliJeneponto.length} KBLI`;
    } else {
      countText.textContent = `Menampilkan 5 dari ${totalFiltered} KBLI (Total ${POSE_DATA.kbliJeneponto.length})`;
    }
  }

  // Update Toggle Button Visibility & Label
  if (toggleWrap) {
    const toggleBtn = document.getElementById('btn-toggle-kbli');
    const scrollTopBtn = document.getElementById('btn-scroll-top-kbli');

    if (totalFiltered <= 5) {
      toggleWrap.style.display = 'none';
    } else {
      toggleWrap.style.display = 'flex';
      if (toggleBtnText && toggleIcon && toggleBtn) {
        if (isKbliExpanded) {
          toggleBtn.classList.add('btn-icon-only');
          toggleBtn.title = 'Perkecil / Tampilkan 5 Teratas';
          toggleIcon.className = 'fa-solid fa-compress';
          toggleBtnText.style.display = 'none';
          toggleBtnText.textContent = '';
          if (scrollTopBtn) scrollTopBtn.style.display = 'inline-flex';
        } else {
          toggleBtn.classList.remove('btn-icon-only');
          toggleBtn.title = 'Tampilkan Semua Data KBLI';
          toggleIcon.className = 'fa-solid fa-chevron-down';
          toggleBtnText.style.display = 'inline';
          toggleBtnText.textContent = `Tampilkan Semua (${totalFiltered} KBLI)`;
          if (scrollTopBtn) scrollTopBtn.style.display = 'none';
        }
      }
    }
  }

  if (displayItems.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; padding: 28px 16px; color: var(--text-muted);">
          <i class="fa-solid fa-folder-open" style="font-size: 28px; color: #CBD5E1; margin-bottom: 8px; display: block;"></i>
          Tidak ditemukan KBLI yang sesuai dengan filter atau kata kunci "<strong>${escapeHtml(kbliSearchQuery)}</strong>".
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = displayItems.map(item => {
    const isSering = item.frekuensi === 'Sering Dijumpai';
    const freqBadge = isSering 
      ? `<span class="role-tag role-pml" style="font-size: 11px; white-space: nowrap;"><i class="fa-solid fa-circle-check"></i> Sering Dijumpai</span>`
      : `<span class="role-tag role-jarang" style="font-size: 11px; white-space: nowrap;"><i class="fa-solid fa-triangle-exclamation"></i> Jarang Dijumpai</span>`;
    
    return `
      <tr>
        <td><span class="kbli-badge-code">${escapeHtml(item.kode)}</span></td>
        <td><strong>${escapeHtml(item.judul)}</strong></td>
        <td>
          <span class="section-tag" style="font-size: 10.5px; padding: 3px 8px; text-transform: none; font-weight: 700; line-height: 1.3;" title="${escapeHtml(item.kategoriNama)}">
            ${escapeHtml(item.kategoriShort)}
          </span>
        </td>
        <td>${freqBadge}</td>
        <td style="font-size: 12.5px; line-height: 1.5; color: #334155;">${escapeHtml(item.deskripsi)}</td>
      </tr>
    `;
  }).join('');
}

window.toggleKbliList = function() {
  const wasExpanded = isKbliExpanded;
  isKbliExpanded = !isKbliExpanded;
  renderKBLITable();
  if (wasExpanded) {
    scrollToSection('kbli');
  }
  setTimeout(updateFloatingDockVisibility, 50);
};

/**
 * Render Usaha Bersumber dari Pusat (Kode 7) with 5 Default Items + Toggle
 */
let isUsahaPusatExpanded = false;

function renderUsahaPusatTable() {
  const tableBody = document.getElementById('usaha-pusat-table-body');
  const toggleWrap = document.getElementById('usaha-pusat-toggle-wrap');
  const toggleBtn = document.getElementById('btn-toggle-usaha-pusat');
  const toggleIcon = document.getElementById('icon-toggle-usaha-pusat');
  const toggleBtnText = document.getElementById('text-toggle-usaha-pusat');
  const scrollTopBtn = document.getElementById('btn-scroll-top-usaha-pusat');
  if (!tableBody || !POSE_DATA.usahaPusatSample) return;

  const list = POSE_DATA.usahaPusatSample;
  const displayItems = isUsahaPusatExpanded ? list : list.slice(0, 5);

  // Update Toggle Button Visibility & Label
  if (toggleWrap) {
    if (list.length <= 5) {
      toggleWrap.style.display = 'none';
    } else {
      toggleWrap.style.display = 'flex';
      if (toggleBtnText && toggleIcon && toggleBtn) {
        if (isUsahaPusatExpanded) {
          toggleBtn.classList.add('btn-icon-only');
          toggleBtn.title = 'Perkecil / Tampilkan 5 Teratas';
          toggleIcon.className = 'fa-solid fa-compress';
          toggleBtnText.style.display = 'none';
          toggleBtnText.textContent = '';
          if (scrollTopBtn) scrollTopBtn.style.display = 'inline-flex';
        } else {
          toggleBtn.classList.remove('btn-icon-only');
          toggleBtn.title = 'Tampilkan Semua Usaha Pusat';
          toggleIcon.className = 'fa-solid fa-chevron-down';
          toggleBtnText.style.display = 'inline';
          toggleBtnText.textContent = `Tampilkan Semua (${list.length} Usaha Pusat)`;
          if (scrollTopBtn) scrollTopBtn.style.display = 'none';
        }
      }
    }
  }

  tableBody.innerHTML = displayItems.map((item, idx) => {
    let companyName = item.namaUsaha || item.nama || item.perusahaan || '-';
    let brandName = item.namaKomersil || item.komersil || '-';

    if (brandName && brandName !== '-' && companyName.includes(` (${brandName})`)) {
      companyName = companyName.replace(` (${brandName})`, '');
    }

    return `
      <tr>
        <td style="width: 45px; text-align: center; color: var(--text-muted); font-weight: 700;">${idx + 1}</td>
        <td><strong>${escapeHtml(companyName)}</strong></td>
        <td>
          <span class="section-tag" style="font-size: 11.5px; font-weight: 700; color: var(--dark-slate); background: rgba(255, 107, 0, 0.1); border: 1px solid var(--border-orange); text-transform: none; padding: 4px 10px;">
            <i class="fa-solid fa-store" style="color: var(--deep-orange);"></i> ${escapeHtml(brandName)}
          </span>
        </td>
        <td style="font-size: 12.5px; color: #334155;">${escapeHtml(item.alamat || '-')}</td>
      </tr>
    `;
  }).join('');
}

window.toggleUsahaPusatList = function() {
  const wasExpanded = isUsahaPusatExpanded;
  isUsahaPusatExpanded = !isUsahaPusatExpanded;
  renderUsahaPusatTable();
  if (wasExpanded) {
    scrollToSection('pusat');
  }
  setTimeout(updateFloatingDockVisibility, 50);
};

/**
 * Render Perbandingan Hasil Usaha Pertanian SE2026 vs ST2023 with Live Filter & Search
 */
let isPertanianExpanded = false;
let pertanianSearchQuery = '';
let currentPertanianKecamatan = 'Semua';

function renderPertanianTable() {
  const tableBody = document.getElementById('pertanian-table-body');
  const toggleWrap = document.getElementById('pertanian-toggle-wrap');
  const toggleBtn = document.getElementById('btn-toggle-pertanian');
  const toggleIcon = document.getElementById('icon-toggle-pertanian');
  const toggleBtnText = document.getElementById('text-toggle-pertanian');
  const scrollTopBtn = document.getElementById('btn-scroll-top-pertanian');
  const badgeCount = document.getElementById('badge-count-pertanian');

  // KPI Elements in Pertanian Section
  const elUtpKab = document.getElementById('kpi-pertanian-utp-val');
  const elSeKab = document.getElementById('kpi-pertanian-se-val');
  const elPersenKab = document.getElementById('kpi-pertanian-persen-val');
  const barPersenKab = document.getElementById('kpi-pertanian-persen-bar');

  if (POSE_DATA.kpiPertanian) {
    if (elUtpKab) elUtpKab.textContent = (POSE_DATA.kpiPertanian.totalUtp2023 || 0).toLocaleString('id-ID');
    if (elSeKab) elSeKab.textContent = (POSE_DATA.kpiPertanian.totalSe2026 || 0).toLocaleString('id-ID');
    if (elPersenKab) elPersenKab.textContent = POSE_DATA.kpiPertanian.persentaseRealisasi || '0.00%';
    if (barPersenKab) {
      const pNum = parseFloat(POSE_DATA.kpiPertanian.persentaseRealisasi) || 0;
      barPersenKab.style.width = `${Math.min(pNum, 100)}%`;
    }
  }

  if (!tableBody || !POSE_DATA.pertanianList) return;

  let list = POSE_DATA.pertanianList;

  // Filter Kecamatan
  if (currentPertanianKecamatan && currentPertanianKecamatan !== 'Semua') {
    list = list.filter(item => item.kecamatan && item.kecamatan.toUpperCase() === currentPertanianKecamatan.toUpperCase());
  }

  // Filter Search Query
  if (pertanianSearchQuery) {
    const q = pertanianSearchQuery.toLowerCase();
    list = list.filter(item =>
      (item.desa && item.desa.toLowerCase().includes(q)) ||
      (item.kecamatan && item.kecamatan.toLowerCase().includes(q)) ||
      (item.kodeDesa && item.kodeDesa.toLowerCase().includes(q))
    );
  }

  const displayItems = isPertanianExpanded || pertanianSearchQuery || (currentPertanianKecamatan && currentPertanianKecamatan !== 'Semua') ? list : list.slice(0, 10);

  if (badgeCount) {
    badgeCount.textContent = `Menampilkan ${displayItems.length} dari ${list.length} Desa / Kelurahan`;
  }

  // Update Toggle Button Visibility & Label
  if (toggleWrap) {
    if (list.length <= 10 || pertanianSearchQuery || (currentPertanianKecamatan && currentPertanianKecamatan !== 'Semua')) {
      toggleWrap.style.display = 'none';
    } else {
      toggleWrap.style.display = 'flex';
      if (toggleBtnText && toggleIcon && toggleBtn) {
        if (isPertanianExpanded) {
          toggleBtn.classList.add('btn-icon-only');
          toggleBtn.title = 'Perkecil / Tampilkan 10 Teratas';
          toggleIcon.className = 'fa-solid fa-compress';
          toggleBtnText.style.display = 'none';
          toggleBtnText.textContent = '';
          if (scrollTopBtn) scrollTopBtn.style.display = 'inline-flex';
        } else {
          toggleBtn.classList.remove('btn-icon-only');
          toggleBtn.title = 'Tampilkan Semua Desa/Kelurahan';
          toggleIcon.className = 'fa-solid fa-chevron-down';
          toggleBtnText.style.display = 'inline';
          toggleBtnText.textContent = `Tampilkan Semua (${list.length} Desa / Kelurahan)`;
          if (scrollTopBtn) scrollTopBtn.style.display = 'none';
        }
      }
    }
  }

  if (displayItems.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 32px 16px; color: var(--text-muted);">
          <i class="fa-solid fa-seedling" style="font-size: 28px; color: #CBD5E1; margin-bottom: 8px; display: block;"></i>
          <strong>Tidak ditemukan data Desa/Kelurahan yang cocok</strong><br>
          <span style="font-size: 12px;">Coba gunakan kata kunci pencarian atau pilih kecamatan lain.</span>
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = displayItems.map((item, idx) => {
    const utpFormatted = (item.utp2023 || 0).toLocaleString('id-ID');
    const seFormatted = (item.se2026 || 0).toLocaleString('id-ID');
    const persenNum = item.persenVal || parseFloat(item.persentase) || 0;

    // Color theme for percentage
    let badgeColor = '#059669';
    let badgeBg = 'rgba(16, 185, 129, 0.1)';
    let badgeBorder = 'rgba(16, 185, 129, 0.25)';
    if (persenNum < 50) {
      badgeColor = '#DC2626';
      badgeBg = 'rgba(239, 68, 68, 0.1)';
      badgeBorder = 'rgba(239, 68, 68, 0.25)';
    } else if (persenNum < 70) {
      badgeColor = '#D97706';
      badgeBg = 'rgba(245, 158, 11, 0.1)';
      badgeBorder = 'rgba(245, 158, 11, 0.25)';
    }

    return `
      <tr>
        <td style="width: 50px; text-align: center; color: var(--text-muted); font-weight: 700; vertical-align: middle;">${idx + 1}</td>
        <td style="vertical-align: middle; font-weight: 700; color: #0F172A; font-size: 13.5px; line-height: 1.35;">
          ${escapeHtml(item.desa)}
        </td>
        <td style="width: 150px; text-align: center; vertical-align: middle;">
          <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
            <span class="section-tag" style="font-size: 11px; padding: 4px 10px; text-transform: uppercase; font-weight: 700; border-radius: 9999px; letter-spacing: 0.3px; white-space: nowrap; display: inline-flex; align-items: center; gap: 4px; margin: 0;">
              <i class="fa-solid fa-location-dot" style="font-size: 10px;"></i> ${escapeHtml(item.kecamatan || '-')}
            </span>
          </div>
        </td>
        <td style="width: 140px; text-align: center; vertical-align: middle;">
          <span style="display: inline-block; font-weight: 700; color: #334155; font-size: 13.5px; background: #F1F5F9; padding: 4px 12px; border-radius: 8px;">
            ${utpFormatted}
          </span>
        </td>
        <td style="width: 160px; text-align: center; vertical-align: middle;">
          <span style="display: inline-block; font-weight: 800; color: var(--deep-orange); font-size: 13.5px; background: #FFF7ED; padding: 4px 12px; border-radius: 8px; border: 1px solid rgba(255, 107, 0, 0.25);">
            ${seFormatted}
          </span>
        </td>
        <td style="vertical-align: middle; width: 220px;">
          <div style="display: flex; align-items: center; justify-content: space-between; gap: 8px; margin-bottom: 4px;">
            <span style="display: inline-flex; align-items: center; gap: 4px; font-size: 11.5px; font-weight: 800; padding: 2px 8px; border-radius: 6px; background: ${badgeBg}; color: ${badgeColor}; border: 1px solid ${badgeBorder};">
              <i class="fa-solid fa-chart-line" style="font-size: 10px;"></i> ${item.persentase || '0.00%'}
            </span>
            <span style="font-size: 11px; color: #64748B; font-weight: 600;">Realisasi</span>
          </div>
          <div style="height: 6px; background: #E2E8F0; border-radius: 9999px; overflow: hidden;">
            <div style="height: 100%; width: ${Math.min(persenNum, 100)}%; background: ${badgeColor}; border-radius: 9999px; transition: width 0.3s ease;"></div>
          </div>
        </td>
      </tr>
    `;
  }).join('');
}

window.handlePertanianSearch = function(val) {
  pertanianSearchQuery = (val || '').trim();
  renderPertanianTable();
  setTimeout(updateFloatingDockVisibility, 50);
};

window.handlePertanianKecamatanChange = function(kec) {
  currentPertanianKecamatan = kec || 'Semua';
  renderPertanianTable();
  setTimeout(updateFloatingDockVisibility, 50);
};

window.togglePertanianList = function() {
  const wasExpanded = isPertanianExpanded;
  isPertanianExpanded = !isPertanianExpanded;
  renderPertanianTable();
  if (wasExpanded) {
    scrollToSection('pertanian');
  }
  setTimeout(updateFloatingDockVisibility, 50);
};

/**
 * Render Daftar Usaha Besar (UB) with Live Search & Toggle Expansion
 */
let isUsahaBesarExpanded = false;
let usahaBesarSearchQuery = '';

function cleanAlamatUB(alamat, desa) {
  if (!alamat || alamat === '-') return desa && desa !== '-' ? `Ds. ${desa}` : '-';
  let clean = alamat.trim();
  if (desa && desa !== '-' && !clean.toUpperCase().includes(desa.toUpperCase())) {
    clean += `, Ds. ${desa}`;
  }
  return clean;
}

function renderUsahaBesarTable() {
  const tableBody = document.getElementById('usaha-besar-table-body');
  const toggleWrap = document.getElementById('usaha-besar-toggle-wrap');
  const toggleBtn = document.getElementById('btn-toggle-usaha-besar');
  const toggleIcon = document.getElementById('icon-toggle-usaha-besar');
  const toggleBtnText = document.getElementById('text-toggle-usaha-besar');
  const scrollTopBtn = document.getElementById('btn-scroll-top-usaha-besar');
  const badgeCount = document.getElementById('badge-count-usaha-besar');

  if (!tableBody || !POSE_DATA.usahaBesarList) return;

  let list = POSE_DATA.usahaBesarList;

  // Filter with search query
  if (usahaBesarSearchQuery) {
    const q = usahaBesarSearchQuery.toLowerCase();
    list = list.filter(item => 
      (item.nama && item.nama.toLowerCase().includes(q)) ||
      (item.kecamatan && item.kecamatan.toLowerCase().includes(q)) ||
      (item.desa && item.desa.toLowerCase().includes(q)) ||
      (item.alamat && item.alamat.toLowerCase().includes(q))
    );
  }

  const displayItems = isUsahaBesarExpanded || usahaBesarSearchQuery ? list : list.slice(0, 10);

  if (badgeCount) {
    badgeCount.textContent = `Menampilkan ${displayItems.length} dari ${list.length} Usaha Besar`;
  }

  // Update Toggle Button Visibility & Label
  if (toggleWrap) {
    if (list.length <= 10 || usahaBesarSearchQuery) {
      toggleWrap.style.display = 'none';
    } else {
      toggleWrap.style.display = 'flex';
      if (toggleBtnText && toggleIcon && toggleBtn) {
        if (isUsahaBesarExpanded) {
          toggleBtn.classList.add('btn-icon-only');
          toggleBtn.title = 'Perkecil / Tampilkan 10 Teratas';
          toggleIcon.className = 'fa-solid fa-compress';
          toggleBtnText.style.display = 'none';
          toggleBtnText.textContent = '';
          if (scrollTopBtn) scrollTopBtn.style.display = 'inline-flex';
        } else {
          toggleBtn.classList.remove('btn-icon-only');
          toggleBtn.title = 'Tampilkan Semua Usaha Besar';
          toggleIcon.className = 'fa-solid fa-chevron-down';
          toggleBtnText.style.display = 'inline';
          toggleBtnText.textContent = `Tampilkan Semua (${list.length} Usaha Besar)`;
          if (scrollTopBtn) scrollTopBtn.style.display = 'none';
        }
      }
    }
  }

  if (displayItems.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="4" style="text-align: center; padding: 32px 16px; color: var(--text-muted);">
          <i class="fa-solid fa-industry" style="font-size: 28px; color: #CBD5E1; margin-bottom: 8px; display: block;"></i>
          <strong>Tidak ditemukan Usaha Besar yang cocok</strong><br>
          <span style="font-size: 12px;">Coba gunakan kata kunci pencarian nama perusahaan atau kecamatan lain.</span>
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = displayItems.map((item, idx) => `
    <tr>
      <td style="width: 50px; text-align: center; color: var(--text-muted); font-weight: 700; vertical-align: middle;">${idx + 1}</td>
      <td style="vertical-align: middle; font-weight: 700; color: #0F172A; font-size: 13.5px; line-height: 1.45;">
        ${escapeHtml(item.nama)}
      </td>
      <td style="width: 160px; text-align: center; vertical-align: middle;">
        <div style="display: flex; justify-content: center; align-items: center; width: 100%;">
          <span class="section-tag" style="font-size: 11px; padding: 4px 12px; text-transform: uppercase; font-weight: 700; border-radius: 9999px; letter-spacing: 0.3px; white-space: nowrap; display: inline-flex; align-items: center; gap: 5px; margin: 0;">
            <i class="fa-solid fa-location-dot" style="font-size: 10px;"></i> ${escapeHtml(item.kecamatan || '-')}
          </span>
        </div>
      </td>
      <td style="font-size: 12.5px; color: #334155; line-height: 1.5; vertical-align: middle;">
        ${escapeHtml(cleanAlamatUB(item.alamat, item.desa))}
      </td>
    </tr>
  `).join('');
}

window.handleUsahaBesarSearch = function(val) {
  usahaBesarSearchQuery = (val || '').trim();
  renderUsahaBesarTable();
  setTimeout(updateFloatingDockVisibility, 50);
};

window.toggleUsahaBesarList = function() {
  const wasExpanded = isUsahaBesarExpanded;
  isUsahaBesarExpanded = !isUsahaBesarExpanded;
  renderUsahaBesarTable();
  if (wasExpanded) {
    scrollToSection('usaha-besar');
  }
  setTimeout(updateFloatingDockVisibility, 50);
};

/**
 * Render Daftar Keluarga Khusus with 10 Default Items + Toggle
 */
let isKeluargaKhususExpanded = false;

function renderKeluargaKhususTable() {
  const tableBody = document.getElementById('keluarga-khusus-table-body');
  const toggleWrap = document.getElementById('keluarga-khusus-toggle-wrap');
  const toggleBtn = document.getElementById('btn-toggle-keluarga-khusus');
  const toggleIcon = document.getElementById('icon-toggle-keluarga-khusus');
  const toggleBtnText = document.getElementById('text-toggle-keluarga-khusus');
  const scrollTopBtn = document.getElementById('btn-scroll-top-keluarga-khusus');
  if (!tableBody || !POSE_DATA.keluargaKhususList) return;

  const list = POSE_DATA.keluargaKhususList;
  const displayItems = isKeluargaKhususExpanded ? list : list.slice(0, 10);

  // Update Toggle Button Visibility & Label
  if (toggleWrap) {
    if (list.length <= 10) {
      toggleWrap.style.display = 'none';
    } else {
      toggleWrap.style.display = 'flex';
      if (toggleBtnText && toggleIcon && toggleBtn) {
        if (isKeluargaKhususExpanded) {
          toggleBtn.classList.add('btn-icon-only');
          toggleBtn.title = 'Perkecil / Tampilkan 10 Teratas';
          toggleIcon.className = 'fa-solid fa-compress';
          toggleBtnText.style.display = 'none';
          toggleBtnText.textContent = '';
          if (scrollTopBtn) scrollTopBtn.style.display = 'inline-flex';
        } else {
          toggleBtn.classList.remove('btn-icon-only');
          toggleBtn.title = 'Tampilkan Semua Keluarga Khusus';
          toggleIcon.className = 'fa-solid fa-chevron-down';
          toggleBtnText.style.display = 'inline';
          toggleBtnText.textContent = `Tampilkan Semua (${list.length} Keluarga Khusus)`;
          if (scrollTopBtn) scrollTopBtn.style.display = 'none';
        }
      }
    }
  }

  tableBody.innerHTML = displayItems.map((item, idx) => {
    const isSubmit = (item.status || '').toUpperCase() === 'SUBMIT';
    const statusBadge = isSubmit
      ? `<span class="badge-live-status" style="background: rgba(16, 185, 129, 0.12); color: #059669; border-color: rgba(16, 185, 129, 0.3); font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; white-space: nowrap;"><i class="fa-solid fa-circle-check"></i> SUBMIT</span>`
      : `<span class="badge-live-status" style="background: rgba(245, 158, 11, 0.12); color: #B45309; border-color: rgba(245, 158, 11, 0.3); font-size: 11px; font-weight: 700; padding: 4px 10px; border-radius: 9999px; white-space: nowrap;"><i class="fa-solid fa-clock"></i> OPEN</span>`;

    const noHp = item.noHpPic || item.kontak || '-';
    const hpDisplay = noHp && noHp !== '-'
      ? `<a href="tel:${escapeHtml(noHp)}" style="color: var(--deep-orange); font-weight: 600; text-decoration: none; font-size: 12px; white-space: nowrap;"><i class="fa-solid fa-phone" style="font-size: 10.5px;"></i> ${escapeHtml(noHp)}</a>`
      : `<span style="color: var(--text-muted); font-size: 12px;">-</span>`;

    const pjBadge = item.pj && item.pj !== '-'
      ? `<span class="role-tag role-pml" style="font-size: 10.5px; padding: 3px 8px; font-weight: 700; white-space: nowrap;">${escapeHtml(item.pj)}</span>`
      : `<span style="color: var(--text-muted); font-size: 12px;">-</span>`;

    return `
      <tr>
        <td style="width: 45px; text-align: center; color: var(--text-muted); font-weight: 700;">${idx + 1}</td>
        <td><strong>${escapeHtml(item.nama)}</strong></td>
        <td style="font-size: 12.5px; color: #334155;">${escapeHtml(item.alamat || '-')}</td>
        <td style="font-size: 12.5px; color: #334155; font-weight: 600;">${escapeHtml(item.desa || '-')}</td>
        <td><span class="section-tag" style="font-size: 11px; padding: 3px 8px; text-transform: none; font-weight: 700;">${escapeHtml(item.kec || '-')}</span></td>
        <td style="font-size: 12px; line-height: 1.4; font-weight: 600; color: #1E293B;">${escapeHtml(item.pic || '-')}</td>
        <td>${hpDisplay}</td>
        <td>
          <span class="badge-live-status" style="background: rgba(255, 107, 0, 0.08); color: var(--dark-slate); border-color: rgba(255, 107, 0, 0.25); font-size: 11px; font-weight: 700; white-space: nowrap;">
            <i class="fa-solid fa-users-viewfinder" style="color: var(--deep-orange);"></i> ${escapeHtml(item.jenis || '-')}
          </span>
        </td>
        <td>${pjBadge}</td>
        <td style="text-align: center;">${statusBadge}</td>
      </tr>
    `;
  }).join('');
}

window.toggleKeluargaKhususList = function() {
  const wasExpanded = isKeluargaKhususExpanded;
  isKeluargaKhususExpanded = !isKeluargaKhususExpanded;
  renderKeluargaKhususTable();
  if (wasExpanded) {
    scrollToSection('keluarga');
  }
  setTimeout(updateFloatingDockVisibility, 50);
};

/**
 * Smooth Scroll to a section
 */
window.scrollToSection = function(sectionId) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

/**
 * Floating Action Dock Management for Expanded Tables (Pertanian, Usaha Besar, KBLI, Usaha Pusat, Keluarga Khusus)
 */
let activeExpandedSection = null;

function updateFloatingDockVisibility() {
  const dock = document.getElementById('floating-table-actions');
  if (!dock) return;

  const sections = [
    { id: 'pertanian', isExpanded: isPertanianExpanded, collapseFn: togglePertanianList },
    { id: 'usaha-besar', isExpanded: isUsahaBesarExpanded, collapseFn: toggleUsahaBesarList },
    { id: 'kbli', isExpanded: isKbliExpanded, collapseFn: toggleKbliList },
    { id: 'pusat', isExpanded: isUsahaPusatExpanded, collapseFn: toggleUsahaPusatList },
    { id: 'keluarga', isExpanded: isKeluargaKhususExpanded, collapseFn: toggleKeluargaKhususList }
  ];

  let visibleActive = null;
  const viewportHeight = window.innerHeight;

  for (const sec of sections) {
    if (!sec.isExpanded) continue;
    const el = document.getElementById(sec.id);
    if (!el) continue;
    const rect = el.getBoundingClientRect();
    // Check if section is currently in the visible viewport
    if (rect.top <= viewportHeight - 60 && rect.bottom >= 100) {
      visibleActive = sec;
      break;
    }
  }

  if (visibleActive) {
    activeExpandedSection = visibleActive;
    dock.style.display = 'flex';
  } else {
    activeExpandedSection = null;
    dock.style.display = 'none';
  }
}

window.triggerActiveTableCollapse = function() {
  if (activeExpandedSection && typeof activeExpandedSection.collapseFn === 'function') {
    activeExpandedSection.collapseFn();
  } else {
    if (isPertanianExpanded) togglePertanianList();
    else if (isUsahaBesarExpanded) toggleUsahaBesarList();
    else if (isKbliExpanded) toggleKbliList();
    else if (isUsahaPusatExpanded) toggleUsahaPusatList();
    else if (isKeluargaKhususExpanded) toggleKeluargaKhususList();
  }
  setTimeout(updateFloatingDockVisibility, 50);
};

window.triggerActiveTableScrollTop = function() {
  if (activeExpandedSection) {
    scrollToSection(activeExpandedSection.id);
  } else {
    if (isPertanianExpanded) scrollToSection('pertanian');
    else if (isUsahaBesarExpanded) scrollToSection('usaha-besar');
    else if (isKbliExpanded) scrollToSection('kbli');
    else if (isUsahaPusatExpanded) scrollToSection('pusat');
    else if (isKeluargaKhususExpanded) scrollToSection('keluarga');
  }
};

window.addEventListener('scroll', updateFloatingDockVisibility, { passive: true });
window.addEventListener('resize', updateFloatingDockVisibility, { passive: true });

/**
 * Update Monitoring KPI Cards Dynamically Based on Selected Wilayah
 */
function updateMonitoringKPI(selectedOption) {
  const elSubmit = document.getElementById('kpi-submit-val');
  const elDraft = document.getElementById('kpi-draft-val');
  const elApproved = document.getElementById('kpi-approved-val');
  const barSubmit = document.getElementById('kpi-submit-bar');
  const barDraft = document.getElementById('kpi-draft-bar');
  const barApproved = document.getElementById('kpi-approved-bar');
  const descSubmit = document.getElementById('kpi-submit-desc');
  const descDraft = document.getElementById('kpi-draft-desc');
  const descApproved = document.getElementById('kpi-approved-desc');

  const elWilTitle = document.getElementById('kpi-wilayah-title');
  const elWilVal = document.getElementById('kpi-wilayah-val');
  const elWilUnit = document.getElementById('kpi-wilayah-unit');
  const elWilDesc = document.getElementById('kpi-wilayah-desc');

  if (selectedOption === "Kabupaten Jeneponto") {
    const kpi = POSE_DATA.kpiKabupaten;
    if (elSubmit) elSubmit.textContent = kpi.persentaseProgres || kpi.persentaseSubmit;
    if (elDraft) elDraft.textContent = kpi.persentaseOpenDraft || kpi.persentaseDraft;
    if (elApproved) elApproved.textContent = kpi.persentaseApproved;
    if (barSubmit) barSubmit.style.width = `${kpi.persentaseProgres || kpi.persentaseSubmit}%`;
    if (barDraft) barDraft.style.width = `${kpi.persentaseOpenDraft || kpi.persentaseDraft}%`;
    if (barApproved) barApproved.style.width = `${kpi.persentaseApproved}%`;
    if (descSubmit) descSubmit.textContent = "Kolom P: Progres se-Kabupaten";
    if (descDraft) descDraft.textContent = "Kolom Q: Open+Draft se-Kabupaten";
    if (descApproved) descApproved.textContent = "Kolom R: Approved se-Kabupaten";

    if (elWilTitle) elWilTitle.textContent = "Wilayah Cakupan";
    if (elWilVal) elWilVal.textContent = "11";
    if (elWilUnit) elWilUnit.textContent = "Kecamatan";
    if (elWilDesc) elWilDesc.textContent = `Total ${kpi.totalPPL || 327} PPL & ${kpi.totalPML || 47} PML`;
  } else {
    const dataKec = POSE_DATA.petugasKecamatan[selectedOption] || POSE_DATA.petugasKecamatan["Binamu"] || {};
    const valProg = dataKec.progres !== undefined ? dataKec.progres : (dataKec.submit || 0);
    const valOpDr = dataKec.openDraft !== undefined ? dataKec.openDraft : (dataKec.draft || 0);
    const valApp = dataKec.approved !== undefined ? dataKec.approved : 0;

    if (elSubmit) elSubmit.textContent = valProg;
    if (elDraft) elDraft.textContent = valOpDr;
    if (elApproved) elApproved.textContent = valApp;
    if (barSubmit) barSubmit.style.width = `${valProg}%`;
    if (barDraft) barDraft.style.width = `${valOpDr}%`;
    if (barApproved) barApproved.style.width = `${valApp}%`;
    if (descSubmit) descSubmit.textContent = `Kolom P: Progres Kec. ${selectedOption}`;
    if (descDraft) descDraft.textContent = `Kolom Q: Open+Draft Kec. ${selectedOption}`;
    if (descApproved) descApproved.textContent = `Kolom R: Approved Kec. ${selectedOption}`;

    if (elWilTitle) elWilTitle.textContent = `Kec. ${selectedOption}`;
    if (elWilVal) elWilVal.textContent = dataKec.totalPPL || (dataKec.ppl ? dataKec.ppl.length : 0);
    if (elWilUnit) elWilUnit.textContent = "PPL";
    if (elWilDesc) elWilDesc.textContent = `${dataKec.totalPML || (dataKec.pml ? dataKec.pml.length : 0)} Petugas Pemeriksa (PML)`;
  }
}

/**
 * Update Anomali KPI Cards Dynamically Based on Selected Wilayah
 */
function updateAnomaliKPI(selectedOption) {
  // Elements for 4 Percentage Cards
  const elUsahaSelesai = document.getElementById('kpi-anomali-usaha-selesai-val');
  const barUsahaSelesai = document.getElementById('kpi-anomali-usaha-selesai-bar');
  const descUsahaSelesai = document.getElementById('kpi-anomali-usaha-selesai-desc');

  const elUsahaBelum = document.getElementById('kpi-anomali-usaha-belum-val');
  const barUsahaBelum = document.getElementById('kpi-anomali-usaha-belum-bar');
  const descUsahaBelum = document.getElementById('kpi-anomali-usaha-belum-desc');

  const elKeluargaSelesai = document.getElementById('kpi-anomali-keluarga-selesai-val');
  const barKeluargaSelesai = document.getElementById('kpi-anomali-keluarga-selesai-bar');
  const descKeluargaSelesai = document.getElementById('kpi-anomali-keluarga-selesai-desc');

  const elKeluargaBelum = document.getElementById('kpi-anomali-keluarga-belum-val');
  const barKeluargaBelum = document.getElementById('kpi-anomali-keluarga-belum-bar');
  const descKeluargaBelum = document.getElementById('kpi-anomali-keluarga-belum-desc');

  // Element for Wilayah Card
  const elWilTitle = document.getElementById('kpi-anomali-wilayah-title');
  const elWilVal = document.getElementById('kpi-anomali-wilayah-val');
  const elWilUnit = document.getElementById('kpi-anomali-wilayah-unit');
  const elWilDesc = document.getElementById('kpi-anomali-wilayah-desc');

  if (selectedOption === "Kabupaten Jeneponto") {
    const kpi = POSE_DATA.kpiKabupaten;
    const uSelesai = kpi.persentaseAnomaliUsahaSelesai !== undefined ? kpi.persentaseAnomaliUsahaSelesai : 86.6;
    const uBelum = kpi.persentaseAnomaliUsahaBelum !== undefined ? kpi.persentaseAnomaliUsahaBelum : 13.4;
    const kSelesai = kpi.persentaseAnomaliKeluargaSelesai !== undefined ? kpi.persentaseAnomaliKeluargaSelesai : 97.1;
    const kBelum = kpi.persentaseAnomaliKeluargaBelum !== undefined ? kpi.persentaseAnomaliKeluargaBelum : 2.9;

    const uTot = kpi.anomaliUsahaTotal || 1518;
    const uSel = kpi.anomaliUsahaSelesai || 1314;
    const uBel = kpi.anomaliUsahaBelum || 204;

    const kTot = kpi.anomaliKeluargaTotal || 487;
    const kSel = kpi.anomaliKeluargaSelesai || 473;
    const kBel = kpi.anomaliKeluargaBelum || 14;

    if (elUsahaSelesai) elUsahaSelesai.textContent = uSelesai;
    if (barUsahaSelesai) barUsahaSelesai.style.width = `${uSelesai}%`;
    if (descUsahaSelesai) descUsahaSelesai.textContent = `${uSel.toLocaleString('id-ID')} dari ${uTot.toLocaleString('id-ID')} kasus usaha selesai`;

    if (elUsahaBelum) elUsahaBelum.textContent = uBelum;
    if (barUsahaBelum) barUsahaBelum.style.width = `${uBelum}%`;
    if (descUsahaBelum) descUsahaBelum.textContent = `${uBel.toLocaleString('id-ID')} kasus usaha belum ditindaklanjuti`;

    if (elKeluargaSelesai) elKeluargaSelesai.textContent = kSelesai;
    if (barKeluargaSelesai) barKeluargaSelesai.style.width = `${kSelesai}%`;
    if (descKeluargaSelesai) descKeluargaSelesai.textContent = `${kSel.toLocaleString('id-ID')} dari ${kTot.toLocaleString('id-ID')} kasus keluarga selesai`;

    if (elKeluargaBelum) elKeluargaBelum.textContent = kBelum;
    if (barKeluargaBelum) barKeluargaBelum.style.width = `${kBelum}%`;
    if (descKeluargaBelum) descKeluargaBelum.textContent = `${kBel.toLocaleString('id-ID')} kasus keluarga belum ditindaklanjuti`;
  } else {
    const dataKec = POSE_DATA.petugasKecamatan[selectedOption] || POSE_DATA.petugasKecamatan["Binamu"] || {};

    const uTot = dataKec.anomaliUsahaTotal !== undefined ? dataKec.anomaliUsahaTotal : 100;
    const uSel = dataKec.anomaliUsahaSelesai !== undefined ? dataKec.anomaliUsahaSelesai : (uTot - (dataKec.anomaliUsahaBelum || 0));
    const uBel = dataKec.anomaliUsahaBelum !== undefined ? dataKec.anomaliUsahaBelum : 0;
    const uSelesai = dataKec.persentaseAnomaliUsahaSelesai !== undefined ? dataKec.persentaseAnomaliUsahaSelesai : (uTot > 0 ? Math.round((uSel / uTot) * 1000) / 10 : 100.0);
    const uBelum = dataKec.persentaseAnomaliUsahaBelum !== undefined ? dataKec.persentaseAnomaliUsahaBelum : (uTot > 0 ? Math.round((uBel / uTot) * 1000) / 10 : 0.0);

    const kTot = dataKec.anomaliKeluargaTotal !== undefined ? dataKec.anomaliKeluargaTotal : 50;
    const kSel = dataKec.anomaliKeluargaSelesai !== undefined ? dataKec.anomaliKeluargaSelesai : (kTot - (dataKec.anomaliKeluargaBelum || 0));
    const kBel = dataKec.anomaliKeluargaBelum !== undefined ? dataKec.anomaliKeluargaBelum : 0;
    const kSelesai = dataKec.persentaseAnomaliKeluargaSelesai !== undefined ? dataKec.persentaseAnomaliKeluargaSelesai : (kTot > 0 ? Math.round((kSel / kTot) * 1000) / 10 : 100.0);
    const kBelum = dataKec.persentaseAnomaliKeluargaBelum !== undefined ? dataKec.persentaseAnomaliKeluargaBelum : (kTot > 0 ? Math.round((kBel / kTot) * 1000) / 10 : 0.0);

    if (elUsahaSelesai) elUsahaSelesai.textContent = uSelesai;
    if (barUsahaSelesai) barUsahaSelesai.style.width = `${uSelesai}%`;
    if (descUsahaSelesai) descUsahaSelesai.textContent = `${uSel.toLocaleString('id-ID')} dari ${uTot.toLocaleString('id-ID')} kasus usaha selesai`;

    if (elUsahaBelum) elUsahaBelum.textContent = uBelum;
    if (barUsahaBelum) barUsahaBelum.style.width = `${uBelum}%`;
    if (descUsahaBelum) descUsahaBelum.textContent = `${uBel.toLocaleString('id-ID')} kasus usaha belum ditindaklanjuti`;

    if (elKeluargaSelesai) elKeluargaSelesai.textContent = kSelesai;
    if (barKeluargaSelesai) barKeluargaSelesai.style.width = `${kSelesai}%`;
    if (descKeluargaSelesai) descKeluargaSelesai.textContent = `${kSel.toLocaleString('id-ID')} dari ${kTot.toLocaleString('id-ID')} kasus keluarga selesai`;

    if (elKeluargaBelum) elKeluargaBelum.textContent = kBelum;
    if (barKeluargaBelum) barKeluargaBelum.style.width = `${kBelum}%`;
    if (descKeluargaBelum) descKeluargaBelum.textContent = `${kBel.toLocaleString('id-ID')} kasus keluarga belum ditindaklanjuti`;
  }
}

/**
 * Switch Anomali SOP Tab
 */
function switchAnomaliTab(targetTabId) {
  const tabButtons = document.querySelectorAll('.anomali-tab-btn');
  const tabPanels = document.querySelectorAll('.anomali-tab-panel');

  tabButtons.forEach(btn => {
    if (btn.getAttribute('data-tab') === targetTabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  tabPanels.forEach(panel => {
    if (panel.id === targetTabId) {
      panel.classList.add('active');
    } else {
      panel.classList.remove('active');
    }
  });
}

if (typeof window !== 'undefined') {
  window.switchAnomaliTab = switchAnomaliTab;
}

/**
 * Event Listeners Setup
 */
function setupEventListeners() {
  // Dropdown Filter Monitoring
  const selectMonitoring = document.getElementById('select-kecamatan-monitoring');
  if (selectMonitoring) {
    selectMonitoring.addEventListener('change', (e) => {
      // Reset expanded state saat filter berubah (kembali tampilkan 3 teratas)
      if (typeof isMonitoringExpanded !== 'undefined') {
        isMonitoringExpanded = false;
        const icon = document.getElementById('icon-toggle-monitoring');
        const text = document.getElementById('text-toggle-monitoring');
        if (icon) icon.className = 'fa-solid fa-chevron-down';
        if (text) text.textContent = 'Lihat Selengkapnya (Semua Data)';
      }
      updateMonitoringKPI(e.target.value);
      renderMonitoringCharts(e.target.value);
    });
  }

  // Manual Live Sync Button
  const btnManualSync = document.getElementById('btn-manual-sync');
  if (btnManualSync) {
    btnManualSync.addEventListener('click', () => {
      if (typeof syncPoSEData === 'function') {
        syncPoSEData(true);
      }
    });
  }

  // Input Pencarian Nama PPL & PML (Live Search)
  const inputSearchMonitoring = document.getElementById('monitoring-search-input');
  const btnClearSearchMonitoring = document.getElementById('btn-clear-monitoring-search');

  if (inputSearchMonitoring) {
    inputSearchMonitoring.addEventListener('input', (e) => {
      const val = e.target.value;
      if (typeof monitoringSearchQuery !== 'undefined') {
        monitoringSearchQuery = val;
      }
      if (btnClearSearchMonitoring) {
        btnClearSearchMonitoring.style.display = val.trim().length > 0 ? 'block' : 'none';
      }
      const selectMon = document.getElementById('select-kecamatan-monitoring');
      renderMonitoringCharts(selectMon ? selectMon.value : "Kabupaten Jeneponto");
    });
  }

  if (btnClearSearchMonitoring) {
    btnClearSearchMonitoring.addEventListener('click', () => {
      if (inputSearchMonitoring) {
        inputSearchMonitoring.value = '';
        inputSearchMonitoring.focus();
      }
      if (typeof monitoringSearchQuery !== 'undefined') {
        monitoringSearchQuery = '';
      }
      btnClearSearchMonitoring.style.display = 'none';
      const selectMon = document.getElementById('select-kecamatan-monitoring');
      renderMonitoringCharts(selectMon ? selectMon.value : "Kabupaten Jeneponto");
    });
  }

  // Toggle View Selengkapnya untuk Grafik Monitoring
  const btnToggleMonitoring = document.getElementById('btn-toggle-monitoring-view');
  if (btnToggleMonitoring) {
    btnToggleMonitoring.addEventListener('click', toggleMonitoringExpanded);
  }

  // Dropdown Filter Anomali
  const selectAnomali = document.getElementById('select-kecamatan-anomali');
  if (selectAnomali) {
    selectAnomali.addEventListener('change', (e) => {
      if (typeof isAnomaliExpanded !== 'undefined') {
        isAnomaliExpanded = false;
        const icon = document.getElementById('icon-toggle-anomali');
        const text = document.getElementById('text-toggle-anomali');
        if (icon) icon.className = 'fa-solid fa-chevron-down';
        if (text) text.textContent = 'Lihat Selengkapnya (Semua Data)';
      }
      updateAnomaliKPI(e.target.value);
      renderAnomaliCharts(e.target.value);
    });
  }

  // Input Pencarian Petugas Anomali (Live Search)
  const inputSearchAnomali = document.getElementById('anomali-search-input');
  const btnClearSearchAnomali = document.getElementById('btn-clear-anomali-search');

  if (inputSearchAnomali) {
    inputSearchAnomali.addEventListener('input', (e) => {
      const val = e.target.value;
      if (typeof anomaliSearchQuery !== 'undefined') {
        anomaliSearchQuery = val;
      }
      if (btnClearSearchAnomali) {
        btnClearSearchAnomali.style.display = val.trim().length > 0 ? 'block' : 'none';
      }
      const selectAnom = document.getElementById('select-kecamatan-anomali');
      renderAnomaliCharts(selectAnom ? selectAnom.value : "Kabupaten Jeneponto");
    });
  }

  if (btnClearSearchAnomali) {
    btnClearSearchAnomali.addEventListener('click', () => {
      if (inputSearchAnomali) {
        inputSearchAnomali.value = '';
        inputSearchAnomali.focus();
      }
      if (typeof anomaliSearchQuery !== 'undefined') {
        anomaliSearchQuery = '';
      }
      btnClearSearchAnomali.style.display = 'none';
      const selectAnom = document.getElementById('select-kecamatan-anomali');
      renderAnomaliCharts(selectAnom ? selectAnom.value : "Kabupaten Jeneponto");
    });
  }

  // Toggle View Selengkapnya untuk Grafik Anomali
  const btnToggleAnomali = document.getElementById('btn-toggle-anomali-view');
  if (btnToggleAnomali) {
    btnToggleAnomali.addEventListener('click', toggleAnomaliExpanded);
  }

  // Anomali SOP Tabbed Content Switching
  const anomaliTabButtons = document.querySelectorAll('.anomali-tab-btn');
  anomaliTabButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const buttonElem = e.currentTarget || btn;
      const targetTabId = buttonElem.getAttribute('data-tab');
      if (targetTabId) {
        switchAnomaliTab(targetTabId);
      }
    });
  });

  // KBLI Search Input
  const kbliInput = document.getElementById('kbli-search-input');
  if (kbliInput) {
    kbliInput.addEventListener('input', (e) => {
      kbliSearchQuery = e.target.value.trim();
      renderKBLITable();
    });
  }

  // KBLI Category Dropdown Filter (Sheet A-V)
  const selectKbliKategori = document.getElementById('select-kbli-kategori');
  if (selectKbliKategori) {
    selectKbliKategori.addEventListener('change', (e) => {
      currentKbliCategory = e.target.value;
      renderKBLITable();
    });
  }

  // KBLI Frekuensi Dropdown Filter (Sering / Jarang)
  const selectKbliFrekuensi = document.getElementById('select-kbli-frekuensi');
  if (selectKbliFrekuensi) {
    selectKbliFrekuensi.addEventListener('change', (e) => {
      currentKbliFrekuensi = e.target.value;
      renderKBLITable();
    });
  }

  // Mobile Hamburger Toggle
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'flex';
      navMenu.style.display = isVisible ? 'none' : 'flex';
      if (!isVisible) {
        navMenu.style.flexDirection = 'column';
        navMenu.style.position = 'absolute';
        navMenu.style.top = '76px';
        navMenu.style.left = '0';
        navMenu.style.right = '0';
        navMenu.style.background = '#FFFFFF';
        navMenu.style.padding = '16px';
        navMenu.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
        navMenu.style.borderBottom = '2px solid var(--primary-orange)';
      }
    });
  }

  // Smooth scroll active highlight on scroll
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      if (window.pageYOffset >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href && href === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>"']/g, function(m) {
    return {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    }[m];
  });
}

/**
 * Toggle between showing 3 items vs all items for SOP Anomali List
 */
let isSopUsahaExpanded = false;
let isSopKeluargaExpanded = false;

window.toggleSopList = function(tabType) {
  if (tabType === 'usaha') {
    isSopUsahaExpanded = !isSopUsahaExpanded;
    const hiddenItems = document.querySelectorAll('#tab-usaha .sop-hidden-item');
    const icon = document.getElementById('icon-toggle-sop-usaha');
    const text = document.getElementById('text-toggle-sop-usaha');
    
    hiddenItems.forEach(el => {
      if (isSopUsahaExpanded) {
        el.style.setProperty('display', 'block', 'important');
        el.classList.add('fade-in-sop');
      } else {
        el.style.removeProperty('display');
        el.classList.remove('fade-in-sop');
      }
    });

    if (text && icon) {
      if (isSopUsahaExpanded) {
        icon.className = 'fa-solid fa-chevron-up';
        text.textContent = 'Tampilkan Lebih Sedikit (3 Teratas)';
      } else {
        icon.className = 'fa-solid fa-chevron-down';
        text.textContent = 'Tampilkan Semua (8 Anomali Usaha)';
      }
    }
  } else if (tabType === 'keluarga') {
    isSopKeluargaExpanded = !isSopKeluargaExpanded;
    const hiddenItems = document.querySelectorAll('#tab-keluarga .sop-hidden-item');
    const icon = document.getElementById('icon-toggle-sop-keluarga');
    const text = document.getElementById('text-toggle-sop-keluarga');
    
    hiddenItems.forEach(el => {
      if (isSopKeluargaExpanded) {
        el.style.setProperty('display', 'block', 'important');
        el.classList.add('fade-in-sop');
      } else {
        el.style.removeProperty('display');
        el.classList.remove('fade-in-sop');
      }
    });

    if (text && icon) {
      if (isSopKeluargaExpanded) {
        icon.className = 'fa-solid fa-chevron-up';
        text.textContent = 'Tampilkan Lebih Sedikit (3 Teratas)';
      } else {
        icon.className = 'fa-solid fa-chevron-down';
        text.textContent = 'Tampilkan Semua (7 Anomali Keluarga)';
      }
    }
  }
};

