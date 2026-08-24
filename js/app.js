/**
 * PoSE - Portal Sensus Ekonomi 2026 BPS Kabupaten Jeneponto
 * Main Application Logic & UI Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initDropdowns();
  initKBLIDropdown();
  populateKPIs();
  initPoSECharts();
  renderKBLITable();
  renderUsahaPusatTable();
  renderKeluargaKhususTable();
  setupEventListeners();
  setupLinks();

  // Background Live Sync with Google Sheets (Smart Cache Hybrid)
  if (typeof syncPoSEData === 'function') {
    syncPoSEData(false);
  }
});

/**
 * Populate Dropdown Menus for Kecamatan
 */
function initDropdowns() {
  const selectMonitoring = document.getElementById('select-kecamatan-monitoring');
  const selectAnomali = document.getElementById('select-kecamatan-anomali');

  const populateOptions = (selectElem) => {
    if (!selectElem) return;
    selectElem.innerHTML = `<option value="Kabupaten Jeneponto">Kabupaten Jeneponto (Semua)</option>`;
    POSE_DATA.kecamatanList.forEach(kec => {
      const opt = document.createElement('option');
      opt.value = kec;
      opt.textContent = `Kecamatan ${kec}`;
      selectElem.appendChild(opt);
    });
  };

  populateOptions(selectMonitoring);
  populateOptions(selectAnomali);
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
  const elApproved = document.getElementById('kpi-approved-val');
  const barSubmit = document.getElementById('kpi-submit-bar');
  const barApproved = document.getElementById('kpi-approved-bar');

  if (elSubmit) elSubmit.textContent = kpi.persentaseSubmit;
  if (elApproved) elApproved.textContent = kpi.persentaseApproved;
  if (barSubmit) barSubmit.style.width = `${kpi.persentaseSubmit}%`;
  if (barApproved) barApproved.style.width = `${kpi.persentaseApproved}%`;

  // Anomali KPIs
  const elAnomaliUsaha = document.getElementById('kpi-anomali-usaha-val');
  const elAnomaliKeluarga = document.getElementById('kpi-anomali-keluarga-val');
  const barAnomaliUsaha = document.getElementById('kpi-anomali-usaha-bar');
  const barAnomaliKeluarga = document.getElementById('kpi-anomali-keluarga-bar');

  if (elAnomaliUsaha) elAnomaliUsaha.textContent = kpi.persentaseAnomaliUsahaSelesai;
  if (elAnomaliKeluarga) elAnomaliKeluarga.textContent = kpi.persentaseAnomaliKeluargaSelesai;
  if (barAnomaliUsaha) barAnomaliUsaha.style.width = `${kpi.persentaseAnomaliUsahaSelesai}%`;
  if (barAnomaliKeluarga) barAnomaliKeluarga.style.width = `${kpi.persentaseAnomaliKeluargaSelesai}%`;
}

/**
 * Setup External Action Links from POSE_DATA
 */
function setupLinks() {
  const linkElements = {
    'btn-link-monitoring': POSE_DATA.links.monitoringPetugas,
    'btn-link-monitoring-2': POSE_DATA.links.monitoringPetugas,
    'btn-link-anomali': POSE_DATA.links.anomaliData,
    'btn-link-pusat': POSE_DATA.links.dataPusat,
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

  tableBody.innerHTML = displayItems.map((item, idx) => `
    <tr>
      <td style="width: 45px; text-align: center; color: var(--text-muted); font-weight: 700;">${idx + 1}</td>
      <td><strong>${escapeHtml(item.nama)}</strong></td>
      <td style="font-size: 12.5px; color: #334155;">${escapeHtml(item.alamat)}${item.desa && item.desa !== '-' ? `, Ds. ${escapeHtml(item.desa)}` : ''}</td>
      <td><span class="section-tag" style="font-size: 11px; padding: 3px 8px; text-transform: none; font-weight: 700;">${escapeHtml(item.kec)}</span></td>
      <td>
        <span class="badge-live-status" style="background: rgba(245, 158, 11, 0.1); color: #B45309; border-color: rgba(245, 158, 11, 0.3); font-size: 11px; font-weight: 700; white-space: nowrap;">
          <i class="fa-solid fa-users-viewfinder"></i> ${escapeHtml(item.jenis)}
        </span>
      </td>
      <td style="font-size: 12px; line-height: 1.4;">
        <strong>${escapeHtml(item.pic)}</strong>
        ${item.kontak && item.kontak !== item.pic && item.kontak !== '-' ? `<br><span style="color: var(--text-muted); font-size: 11px;"><i class="fa-solid fa-phone" style="font-size: 10px;"></i> ${escapeHtml(item.kontak)}</span>` : ''}
      </td>
    </tr>
  `).join('');
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
 * Floating Action Dock Management for Expanded Tables (KBLI, Usaha Pusat, Keluarga Khusus)
 */
let activeExpandedSection = null;

function updateFloatingDockVisibility() {
  const dock = document.getElementById('floating-table-actions');
  if (!dock) return;

  const sections = [
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
    if (isKbliExpanded) toggleKbliList();
    else if (isUsahaPusatExpanded) toggleUsahaPusatList();
    else if (isKeluargaKhususExpanded) toggleKeluargaKhususList();
  }
  setTimeout(updateFloatingDockVisibility, 50);
};

window.triggerActiveTableScrollTop = function() {
  if (activeExpandedSection) {
    scrollToSection(activeExpandedSection.id);
  } else {
    if (isKbliExpanded) scrollToSection('kbli');
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
  const elApproved = document.getElementById('kpi-approved-val');
  const barSubmit = document.getElementById('kpi-submit-bar');
  const barApproved = document.getElementById('kpi-approved-bar');
  const descSubmit = document.getElementById('kpi-submit-desc');
  const descApproved = document.getElementById('kpi-approved-desc');

  const elWilTitle = document.getElementById('kpi-wilayah-title');
  const elWilVal = document.getElementById('kpi-wilayah-val');
  const elWilUnit = document.getElementById('kpi-wilayah-unit');
  const elWilDesc = document.getElementById('kpi-wilayah-desc');

  if (selectedOption === "Kabupaten Jeneponto") {
    const kpi = POSE_DATA.kpiKabupaten;
    if (elSubmit) elSubmit.textContent = kpi.persentaseSubmit;
    if (elApproved) elApproved.textContent = kpi.persentaseApproved;
    if (barSubmit) barSubmit.style.width = `${kpi.persentaseSubmit}%`;
    if (barApproved) barApproved.style.width = `${kpi.persentaseApproved}%`;
    if (descSubmit) descSubmit.textContent = "Capaian submit petugas se-Kabupaten";
    if (descApproved) descApproved.textContent = "Data telah disetujui pemeriksa se-Kabupaten";

    if (elWilTitle) elWilTitle.textContent = "Wilayah Cakupan";
    if (elWilVal) elWilVal.textContent = "11";
    if (elWilUnit) elWilUnit.textContent = "Kecamatan";
    if (elWilDesc) elWilDesc.textContent = `Total ${kpi.totalPPL} PPL & ${kpi.totalPML} PML se-Kabupaten`;
  } else {
    const dataKec = POSE_DATA.petugasKecamatan[selectedOption] || POSE_DATA.petugasKecamatan["Binamu"];
    if (elSubmit) elSubmit.textContent = dataKec.submit;
    if (elApproved) elApproved.textContent = dataKec.approved;
    if (barSubmit) barSubmit.style.width = `${dataKec.submit}%`;
    if (barApproved) barApproved.style.width = `${dataKec.approved}%`;
    if (descSubmit) descSubmit.textContent = `Capaian submit petugas Kec. ${selectedOption}`;
    if (descApproved) descApproved.textContent = `Pemeriksaan disetujui Kec. ${selectedOption}`;

    if (elWilTitle) elWilTitle.textContent = `Kec. ${selectedOption}`;
    if (elWilVal) elWilVal.textContent = dataKec.totalPPL;
    if (elWilUnit) elWilUnit.textContent = "PPL";
    if (elWilDesc) elWilDesc.textContent = `${dataKec.totalPML} Petugas Pemeriksa (PML)`;
  }
}

/**
 * Update Anomali KPI Cards Dynamically Based on Selected Wilayah
 */
function updateAnomaliKPI(selectedOption) {
  const elUsaha = document.getElementById('kpi-anomali-usaha-val');
  const elKeluarga = document.getElementById('kpi-anomali-keluarga-val');
  const barUsaha = document.getElementById('kpi-anomali-usaha-bar');
  const barKeluarga = document.getElementById('kpi-anomali-keluarga-bar');
  const descUsaha = document.getElementById('kpi-anomali-usaha-desc');
  const descKeluarga = document.getElementById('kpi-anomali-keluarga-desc');

  const elWilTitle = document.getElementById('kpi-anomali-wilayah-title');
  const elWilVal = document.getElementById('kpi-anomali-wilayah-val');
  const elWilUnit = document.getElementById('kpi-anomali-wilayah-unit');
  const elWilDesc = document.getElementById('kpi-anomali-wilayah-desc');

  if (selectedOption === "Kabupaten Jeneponto") {
    const kpi = POSE_DATA.kpiKabupaten;
    const selesaiVal = kpi.persentaseAnomaliUsahaSelesai !== undefined ? kpi.persentaseAnomaliUsahaSelesai : 65.8;
    const belumVal = kpi.persentaseAnomaliBelum !== undefined ? kpi.persentaseAnomaliBelum : 34.2;

    if (elUsaha) elUsaha.textContent = selesaiVal;
    if (elKeluarga) elKeluarga.textContent = belumVal;
    if (barUsaha) barUsaha.style.width = `${selesaiVal}%`;
    if (barKeluarga) barKeluarga.style.width = `${belumVal}%`;
    if (descUsaha) descUsaha.textContent = `${kpi.totalAnomali ? kpi.totalAnomali + ' Total Kasus Anomali' : 'Persentase anomali telah ditindaklanjuti'}`;
    if (descKeluarga) descKeluarga.textContent = "Persentase kasus anomali berstatus Belum Ditindaklanjuti";

    if (elWilTitle) elWilTitle.textContent = "Wilayah Cakupan";
    if (elWilVal) elWilVal.textContent = "11";
    if (elWilUnit) elWilUnit.textContent = "Kecamatan";
    if (elWilDesc) elWilDesc.textContent = `${kpi.totalAnomali || 1731} Total Kasus Anomali se-Kabupaten`;
  } else {
    const dataKec = POSE_DATA.petugasKecamatan[selectedOption] || POSE_DATA.petugasKecamatan["Binamu"];
    const selesaiVal = Math.round(((dataKec.anomaliCatatan || 0) + (dataKec.anomaliPerbaikan || 0)) * 10) / 10;
    const belumVal = dataKec.anomaliBelum || 0;

    if (elUsaha) elUsaha.textContent = selesaiVal;
    if (elKeluarga) elKeluarga.textContent = belumVal;
    if (barUsaha) barUsaha.style.width = `${selesaiVal}%`;
    if (barKeluarga) barKeluarga.style.width = `${belumVal}%`;
    if (descUsaha) descUsaha.textContent = `${dataKec.anomaliTotal || 0} Kasus Anomali Kec. ${selectedOption}`;
    if (descKeluarga) descKeluarga.textContent = `% Belum Ditindaklanjuti di Kec. ${selectedOption}`;

    if (elWilTitle) elWilTitle.textContent = `Kec. ${selectedOption}`;
    const pplCount = dataKec.anomaliPplList ? dataKec.anomaliPplList.length : dataKec.totalPPL;
    const pmlCount = dataKec.anomaliPmlList ? dataKec.anomaliPmlList.length : dataKec.totalPML;
    if (elWilVal) elWilVal.textContent = pplCount;
    if (elWilUnit) elWilUnit.textContent = "PPL";
    if (elWilDesc) elWilDesc.textContent = `${pmlCount} PML | ${dataKec.anomaliTotal || 0} Kasus Anomali`;
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

  // Toggle View Selengkapnya untuk Grafik Monitoring
  const btnToggleMonitoring = document.getElementById('btn-toggle-monitoring-view');
  if (btnToggleMonitoring) {
    btnToggleMonitoring.addEventListener('click', toggleMonitoringExpanded);
  }

  // Dropdown Filter Anomali
  const selectAnomali = document.getElementById('select-kecamatan-anomali');
  if (selectAnomali) {
    selectAnomali.addEventListener('change', (e) => {
      updateAnomaliKPI(e.target.value);
      renderAnomaliCharts(e.target.value);
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

