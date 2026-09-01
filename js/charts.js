/**
 * PoSE - Portal Sensus Ekonomi 2026 BPS Kabupaten Jeneponto
 * Chart.js Visualization Logic
 */

let chartMonitoringPendataan = null;
let chartMonitoringPemeriksaan = null;
let chartAnomaliPendataan = null;
let chartAnomaliPemeriksaan = null;

// Palette Colors for Charts (Orange, Blue, Green Derivatives)
const CHART_COLORS = {
  submitBlue: 'rgba(37, 99, 235, 0.85)',          // % Submit (Vibrant Primary Blue)
  submitBlueBorder: '#1D4ED8',
  submitOrange: 'rgba(255, 107, 0, 0.85)',       // Legacy / Accent
  submitOrangeBorder: '#E05300',
  approvedGreen: 'rgba(16, 185, 129, 0.85)',     // % Approved (Emerald Green)
  approvedGreenBorder: '#059669',
  rejectedCoral: 'rgba(224, 83, 60, 0.85)',      // % Rejected (Soft Crimson / Coral)
  rejectedCoralBorder: '#C2410C',
  
  // Anomali 3-Status Colors
  anomaliBelum: 'rgba(239, 68, 68, 0.85)',       // Belum Ditindaklanjuti
  anomaliBelumBorder: '#B91C1C',
  anomaliCatatan: 'rgba(245, 158, 11, 0.85)',    // Ditindaklanjuti dg Catatan (Amber)
  anomaliCatatanBorder: '#D97706',
  anomaliPerbaikan: 'rgba(16, 185, 129, 0.85)',  // Ditindaklanjuti dg Perbaikan
  anomaliPerbaikanBorder: '#047857'
};

var isMonitoringExpanded = false;
var currentMonitoringSelection = "Kabupaten Jeneponto";
var monitoringSearchQuery = "";

var isAnomaliExpanded = false;
var currentAnomaliSelection = "Kabupaten Jeneponto";
var anomaliSearchQuery = "";

/**
 * Helper to build responsive Chart.js options optimized for Mobile, Tablet & Desktop
 * isMonitoring=true: tampilkan sumbu X dengan label %, grouped bars
 */
function buildResponsiveChartOptions(labels, isStacked = false, isMonitoring = false) {
  const width = window.innerWidth;
  const isMobile = width <= 640;
  const isSmallMobile = width <= 480;

  return {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index',
      axis: 'y',
      intersect: false
    },
    layout: {
      padding: {
        left: 4,
        right: isSmallMobile ? 8 : 16,
        top: 6,
        bottom: 6
      }
    },
    scales: {
      x: {
        stacked: isStacked,
        beginAtZero: true,
        max: 100,
        ticks: {
          display: true,
          color: '#64748B',
          font: { size: isSmallMobile ? 10 : 11, weight: '600' },
          callback: function(value) {
            return value + '%';
          },
          maxTicksLimit: isSmallMobile ? 5 : 6
        },
        grid: {
          display: true,
          color: 'rgba(100,116,139,0.12)',
          drawBorder: false
        },
        border: {
          display: false
        }
      },
      y: {
        stacked: isStacked,
        ticks: {
          font: { 
            size: isSmallMobile ? 9.5 : (isMobile ? 10.5 : 11.5),
            weight: '700'
          },
          color: '#1E293B',
          autoSkip: false,
          padding: isSmallMobile ? 6 : 10,
          callback: function(value) {
            const rawLabel = this.getLabelForValue(value);
            if (!rawLabel) return '';
            const maxLen = isSmallMobile ? 24 : (isMobile ? 32 : 48);
            return rawLabel.length > maxLen ? rawLabel.substring(0, maxLen - 1) + '…' : rawLabel;
          }
        },
        grid: {
          display: false
        },
        border: {
          color: 'rgba(0,0,0,0.06)'
        }
      }
    },
    plugins: {
      legend: {
        position: 'top',
        align: isMobile ? 'start' : 'center',
        labels: {
          boxWidth: isSmallMobile ? 10 : 12,
          boxHeight: isSmallMobile ? 10 : 12,
          padding: isSmallMobile ? 8 : (isMobile ? 10 : 14),
          font: { 
            size: isSmallMobile ? 10 : (isMobile ? 11 : 11.5), 
            weight: '700' 
          },
          color: '#334155'
        }
      },
      tooltip: {
        enabled: true,
        backgroundColor: 'rgba(15, 23, 42, 0.94)',
        titleFont: { size: isMobile ? 11.5 : 12.5, weight: '700' },
        bodyFont: { size: isMobile ? 11 : 12 },
        padding: isMobile ? 8 : 12,
        cornerRadius: 8,
        callbacks: {
          title: function(items) {
            if (!items.length) return '';
            const idx = items[0].dataIndex;
            return labels[idx] || items[0].label;
          },
          label: function(context) {
            const dsLabel = context.dataset.label || '';
            const val = context.raw;
            const counts = context.dataset.counts;
            const count = (counts && counts[context.dataIndex] !== undefined) ? counts[context.dataIndex] : null;
            if (count !== null && count !== undefined) {
              return ` ${dsLabel}: ${val}% (${count})`;
            }
            return ` ${dsLabel}: ${val}%`;
          }
        }
      }
    }
  };
}

/**
 * Initialize all charts on page load
 */
function initPoSECharts() {
  renderMonitoringCharts("Kabupaten Jeneponto");
  renderAnomaliCharts("Kabupaten Jeneponto");
}

/**
 * Toggle between showing top 5 vs all records for monitoring charts
 */
function toggleMonitoringExpanded() {
  isMonitoringExpanded = !isMonitoringExpanded;
  const icon = document.getElementById('icon-toggle-monitoring');
  const text = document.getElementById('text-toggle-monitoring');
  
  if (icon && text) {
    if (isMonitoringExpanded) {
      icon.className = 'fa-solid fa-chevron-up';
      text.textContent = 'Tampilkan Lebih Sedikit (3 Teratas)';
    } else {
      icon.className = 'fa-solid fa-chevron-down';
      text.textContent = 'Lihat Selengkapnya (Semua Data)';
    }
  }

  renderMonitoringCharts(currentMonitoringSelection);
}

/**
 * Render or Update Monitoring Charts (Grafik 1: PPL, Grafik 2: PML)
 * Kolom P: Persentase Progres (Biru)
 * Kolom Q: Persentase Open+Draft (Kuning)
 * Kolom R: Persentase Approve (Hijau)
 * Tampil berdampingan (grouped horizontal bars) agar ketiga nilai terlihat jelas 0-100%
 * @param {string} selectedOption - "Kabupaten Jeneponto" or specific Kecamatan
 */
function renderMonitoringCharts(selectedOption) {
  if (selectedOption) {
    currentMonitoringSelection = selectedOption;
  } else {
    selectedOption = currentMonitoringSelection;
  }

  const isKabupaten = selectedOption === "Kabupaten Jeneponto";
  let allLabels1 = [];
  let allDataGrafik1 = [];  // array of {progres, openDraft, approved, ...}
  let allLabels2 = [];
  let allDataGrafik2 = [];  // array of {progres, openDraft, approved, ...}
  let titleGrafik1 = "";
  let titleGrafik2 = "";

  const query = (monitoringSearchQuery || "").trim().toLowerCase();
  const isSearching = query.length > 0;

  if (isSearching) {
    if (isKabupaten) {
      // Cari PPL se-Kabupaten (semua 11 kecamatan)
      const matchedPPLs = [];
      Object.keys(POSE_DATA.petugasKecamatan).forEach(kec => {
        const kecData = POSE_DATA.petugasKecamatan[kec];
        if (kecData && kecData.ppl) {
          kecData.ppl.forEach(p => {
            if (
              p.nama.toLowerCase().includes(query) ||
              (p.pml && p.pml.toLowerCase().includes(query)) ||
              kec.toLowerCase().includes(query)
            ) {
              matchedPPLs.push(Object.assign({}, p, { kecamatan: kec }));
            }
          });
        }
      });

      if (matchedPPLs.length > 0) {
        allLabels1 = matchedPPLs.map(p => `${p.nama} [${p.pml || '-'} - Kec. ${p.kecamatan}]`);
        allDataGrafik1 = matchedPPLs.map(p => ({
          nama: p.nama,
          pml: p.pml,
          kecamatan: p.kecamatan,
          progres: +(p.progres || p.submit || 0).toFixed(1),
          openDraft: +(p.openDraft || p.draft || 0).toFixed(1),
          approved: +(p.approved || 0).toFixed(1)
        }));
      } else {
        allLabels1 = ['Tidak ada PPL cocok'];
        allDataGrafik1 = [{ progres: 0, openDraft: 0, approved: 0 }];
      }

      // Cari PML se-Kabupaten
      const pmlMap = {};
      Object.keys(POSE_DATA.petugasKecamatan).forEach(kec => {
        const kecData = POSE_DATA.petugasKecamatan[kec];
        if (kecData && kecData.ppl) {
          kecData.ppl.forEach(p => {
            const pmlName = p.pml || 'Tidak Diketahui';
            const key = pmlName + ' - ' + kec;
            if (!pmlMap[key]) {
              pmlMap[key] = { nama: pmlName, kecamatan: kec, pplList: [], progresSum: 0, openDraftSum: 0, approvedSum: 0, count: 0 };
            }
            pmlMap[key].pplList.push(p.nama);
            pmlMap[key].progresSum += +(p.progres || p.submit || 0);
            pmlMap[key].openDraftSum += +(p.openDraft || p.draft || 0);
            pmlMap[key].approvedSum += +(p.approved || 0);
            pmlMap[key].count++;
          });
        }
      });

      const allPMLList = Object.values(pmlMap);
      const matchedPMLs = allPMLList.filter(m => 
        m.nama.toLowerCase().includes(query) || 
        m.kecamatan.toLowerCase().includes(query) || 
        m.pplList.some(n => n.toLowerCase().includes(query))
      );

      if (matchedPMLs.length > 0) {
        allLabels2 = matchedPMLs.map(m => `${m.nama} (${m.count} PPL - Kec. ${m.kecamatan})`);
        allDataGrafik2 = matchedPMLs.map(m => ({
          nama: m.nama,
          jumlahPPL: m.count,
          pplNames: m.pplList,
          progres: m.count > 0 ? +(m.progresSum / m.count).toFixed(1) : 0,
          openDraft: m.count > 0 ? +(m.openDraftSum / m.count).toFixed(1) : 0,
          approved: m.count > 0 ? +(m.approvedSum / m.count).toFixed(1) : 0
        }));
      } else {
        allLabels2 = ['Tidak ada PML cocok'];
        allDataGrafik2 = [{ progres: 0, openDraft: 0, approved: 0 }];
      }

      titleGrafik1 = `Hasil Pencarian PPL: "${monitoringSearchQuery}" (se-Kabupaten)`;
      titleGrafik2 = `Hasil Pencarian PML: "${monitoringSearchQuery}" (se-Kabupaten)`;
    } else {
      // Cari PPL & PML dalam kecamatan yang dipilih
      const dataKec = POSE_DATA.petugasKecamatan[selectedOption] || { ppl: [] };
      const pplList = dataKec.ppl || [];
      const matchedPPLs = pplList.filter(p => 
        p.nama.toLowerCase().includes(query) || 
        (p.pml && p.pml.toLowerCase().includes(query))
      );

      if (matchedPPLs.length > 0) {
        allLabels1 = matchedPPLs.map(p => `${p.nama} [${p.pml || '-'}]`);
        allDataGrafik1 = matchedPPLs.map(p => ({
          nama: p.nama,
          pml: p.pml,
          progres: +(p.progres || p.submit || 0).toFixed(1),
          openDraft: +(p.openDraft || p.draft || 0).toFixed(1),
          approved: +(p.approved || 0).toFixed(1)
        }));
      } else {
        allLabels1 = ['Tidak ada PPL cocok'];
        allDataGrafik1 = [{ progres: 0, openDraft: 0, approved: 0 }];
      }

      // PML dalam kecamatan
      const pmlMap = {};
      pplList.forEach(p => {
        const pmlName = p.pml || 'Tidak Diketahui';
        if (!pmlMap[pmlName]) {
          pmlMap[pmlName] = { nama: pmlName, pplList: [], progresSum: 0, openDraftSum: 0, approvedSum: 0, count: 0 };
        }
        pmlMap[pmlName].pplList.push(p.nama);
        pmlMap[pmlName].progresSum += +(p.progres || p.submit || 0);
        pmlMap[pmlName].openDraftSum += +(p.openDraft || p.draft || 0);
        pmlMap[pmlName].approvedSum += +(p.approved || 0);
        pmlMap[pmlName].count++;
      });
      const pmlList = Object.values(pmlMap);
      const matchedPMLs = pmlList.filter(m => 
        m.nama.toLowerCase().includes(query) || 
        m.pplList.some(n => n.toLowerCase().includes(query))
      );

      if (matchedPMLs.length > 0) {
        allLabels2 = matchedPMLs.map(m => `${m.nama} (${m.count} PPL)`);
        allDataGrafik2 = matchedPMLs.map(m => ({
          nama: m.nama,
          jumlahPPL: m.count,
          pplNames: m.pplList,
          progres: m.count > 0 ? +(m.progresSum / m.count).toFixed(1) : 0,
          openDraft: m.count > 0 ? +(m.openDraftSum / m.count).toFixed(1) : 0,
          approved: m.count > 0 ? +(m.approvedSum / m.count).toFixed(1) : 0
        }));
      } else {
        allLabels2 = ['Tidak ada PML cocok'];
        allDataGrafik2 = [{ progres: 0, openDraft: 0, approved: 0 }];
      }

      titleGrafik1 = `Hasil Pencarian PPL: "${monitoringSearchQuery}" (Kec. ${selectedOption})`;
      titleGrafik2 = `Hasil Pencarian PML: "${monitoringSearchQuery}" (Kec. ${selectedOption})`;
    }
  } else {
    if (isKabupaten) {
      allLabels1 = POSE_DATA.progresKecamatan.map(k => k.nama);
      allDataGrafik1 = POSE_DATA.progresKecamatan.map(k => ({
        progres: +(k.progres || k.submit || 0).toFixed(1),
        openDraft: +(k.openDraft || k.draft || 0).toFixed(1),
        approved: +(k.approved || 0).toFixed(1)
      }));

      allLabels2 = POSE_DATA.progresKecamatan.map(k => k.nama);
      allDataGrafik2 = allDataGrafik1.map(d => ({...d}));

      titleGrafik1 = "Progres Pendataan SE2026 Kabupaten Jeneponto (per Kecamatan)";
      titleGrafik2 = "Progres Pemeriksaan SE2026 Kabupaten Jeneponto (per Kecamatan)";
    } else {
      const dataKec = POSE_DATA.petugasKecamatan[selectedOption] || POSE_DATA.petugasKecamatan["Binamu"] || { ppl: [], pml: [] };
      
      // Grafik 1: Per PPL (nama PPL + info PML pengawasnya)
      const pplList = dataKec.ppl || [];
      allLabels1 = pplList.map(p => p.nama + (p.pml ? ` [${p.pml}]` : ''));
      allDataGrafik1 = pplList.map(p => ({
        nama: p.nama,
        pml: p.pml || '-',
        progres: +(p.progres || p.submit || 0).toFixed(1),
        openDraft: +(p.openDraft || p.draft || 0).toFixed(1),
        approved: +(p.approved || 0).toFixed(1)
      }));
      
      // Grafik 2: Per PML - kelompokkan PPL di bawah PML masing-masing
      const pmlMap = {};
      pplList.forEach(p => {
        const pmlName = p.pml || 'Tidak Diketahui';
        if (!pmlMap[pmlName]) {
          pmlMap[pmlName] = { nama: pmlName, pplList: [], progresSum: 0, openDraftSum: 0, approvedSum: 0, count: 0 };
        }
        pmlMap[pmlName].pplList.push(p.nama);
        pmlMap[pmlName].progresSum += +(p.progres || p.submit || 0);
        pmlMap[pmlName].openDraftSum += +(p.openDraft || p.draft || 0);
        pmlMap[pmlName].approvedSum += +(p.approved || 0);
        pmlMap[pmlName].count++;
      });
      const pmlList = Object.values(pmlMap);
      allLabels2 = pmlList.map(m => `${m.nama} (${m.count} PPL)`);
      allDataGrafik2 = pmlList.map(m => ({
        nama: m.nama,
        jumlahPPL: m.count,
        pplNames: m.pplList,
        progres: m.count > 0 ? +(m.progresSum / m.count).toFixed(1) : 0,
        openDraft: m.count > 0 ? +(m.openDraftSum / m.count).toFixed(1) : 0,
        approved: m.count > 0 ? +(m.approvedSum / m.count).toFixed(1) : 0
      }));

      titleGrafik1 = `Progres Pendataan SE2026 Kec. ${selectedOption} (per PPL)`;
      titleGrafik2 = `Progres Pemeriksaan SE2026 Kec. ${selectedOption} (per PML)`;
    }
  }

  // Update UI Card Titles & Subtitles
  const elTitle1 = document.getElementById('title-chart-monitoring-1');
  const elTitle2 = document.getElementById('title-chart-monitoring-2');
  const elSub1 = document.getElementById('sub-chart-monitoring-1');
  const elSub2 = document.getElementById('sub-chart-monitoring-2');

  if (elTitle1) elTitle1.textContent = titleGrafik1;
  if (elTitle2) elTitle2.textContent = titleGrafik2;

  if (isSearching) {
    const validCount1 = allDataGrafik1.filter(d => d.nama).length;
    const validCount2 = allDataGrafik2.filter(d => d.nama).length;
    if (elSub1) elSub1.textContent = `Ditemukan ${validCount1} petugas PPL yang cocok dengan kata kunci "${monitoringSearchQuery}"`;
    if (elSub2) elSub2.textContent = `Ditemukan ${validCount2} pengawas PML yang cocok dengan kata kunci "${monitoringSearchQuery}"`;
  } else {
    if (elSub1) elSub1.textContent = `Menampilkan ${isMonitoringExpanded ? allLabels1.length : Math.min(3, allLabels1.length)} dari ${allLabels1.length} data (${isKabupaten ? 'Kecamatan' : 'PPL'})`;
    if (elSub2) elSub2.textContent = `Menampilkan ${isMonitoringExpanded ? allLabels2.length : Math.min(3, allLabels2.length)} dari ${allLabels2.length} data (${isKabupaten ? 'Kecamatan' : 'PML'})`;
  }

  // Tampilkan 3 data by default (saat tidak search), semua jika expanded atau sedang mencari
  const defaultCount = 3;
  const labels1 = (isSearching || isMonitoringExpanded) ? allLabels1 : allLabels1.slice(0, defaultCount);
  const rawList1 = (isSearching || isMonitoringExpanded) ? allDataGrafik1 : allDataGrafik1.slice(0, defaultCount);
  const seg1App   = rawList1.map(d => d.approved);
  const seg1Draft = rawList1.map(d => d.openDraft);
  const seg1Prog  = rawList1.map(d => d.progres);

  const labels2 = (isSearching || isMonitoringExpanded) ? allLabels2 : allLabels2.slice(0, defaultCount);
  const rawList2 = (isSearching || isMonitoringExpanded) ? allDataGrafik2 : allDataGrafik2.slice(0, defaultCount);
  const seg2App   = rawList2.map(d => d.approved);
  const seg2Draft = rawList2.map(d => d.openDraft);
  const seg2Prog  = rawList2.map(d => d.progres);

  // Sembunyikan atau tampilkan tombol toggle selengkapnya saat pencarian aktif
  const toggleWrapper = document.getElementById('btn-toggle-monitoring-view')?.parentElement;
  if (toggleWrapper) {
    toggleWrapper.style.display = isSearching ? 'none' : 'flex';
  }

  // Sesuaikan tinggi kontainer - kompak saat 3 data, memanjang ke bawah saat semua data
  const container1 = document.getElementById('container-chart-monitoring-1');
  const container2 = document.getElementById('container-chart-monitoring-2');

  const width = window.innerWidth;
  const isMobile = width <= 640;
  const isSmallMobile = width <= 480;

  // Chart grouped 3 dataset: tiap kelompok PPL / PML terdiri dari 3 bar horizontal
  // Saat Expanded: beri ruang 72-80px per item agar ketiga bar & nama terbaca sangat lega
  const itemHeightExpanded = isSmallMobile ? 68 : (isMobile ? 74 : 80);
  const collapsedHeight = isMobile ? (isSmallMobile ? 270 : 290) : 310;

  const calcHeight1 = isMonitoringExpanded
    ? Math.max(collapsedHeight, labels1.length * itemHeightExpanded + 90)
    : collapsedHeight;
  const calcHeight2 = isMonitoringExpanded
    ? Math.max(collapsedHeight, labels2.length * itemHeightExpanded + 90)
    : collapsedHeight;

  if (container1) {
    container1.style.height = `${calcHeight1}px`;
    container1.style.minHeight = `${calcHeight1}px`;
  }
  if (container2) {
    container2.style.height = `${calcHeight2}px`;
    container2.style.minHeight = `${calcHeight2}px`;
  }

  // Options grouped (bukan stacked), sumbu X tampil 0-100%, tooltip nilai asli
  const opts1 = buildResponsiveChartOptions(labels1, false, true);
  opts1.plugins.tooltip.callbacks.label = function(context) {
    const d = rawList1[context.dataIndex];
    if (!d) return ` ${context.dataset.label}: ${context.raw}%`;
    if (context.datasetIndex === 0) return ` % Progres (Kolom P): ${d.progres}%`;
    if (context.datasetIndex === 1) return ` % Open+Draft (Kolom Q): ${d.openDraft}%`;
    if (context.datasetIndex === 2) return ` % Approve (Kolom R): ${d.approved}%`;
    return ` ${context.dataset.label}: ${context.raw}%`;
  };

  const opts2 = buildResponsiveChartOptions(labels2, false, true);
  opts2.plugins.tooltip.callbacks.label = function(context) {
    const d = rawList2[context.dataIndex];
    if (!d) return ` ${context.dataset.label}: ${context.raw}%`;
    if (context.datasetIndex === 0) return ` % Progres (Kolom P): ${d.progres}%`;
    if (context.datasetIndex === 1) return ` % Open+Draft (Kolom Q): ${d.openDraft}%`;
    if (context.datasetIndex === 2) return ` % Approve (Kolom R): ${d.approved}%`;
    // Untuk PML: tampilkan nama PPL di bawahnya
    if (d.pplNames && d.pplNames.length > 0) return ` PPL: ${d.pplNames.join(', ')}`;
    return ` ${context.dataset.label}: ${context.raw}%`;
  };

  // Grafik 1: Progres Pendataan (PPL) - Grouped
  const ctx1 = document.getElementById('chart-monitoring-1').getContext('2d');
  if (chartMonitoringPendataan) {
    chartMonitoringPendataan.destroy();
  }
  chartMonitoringPendataan = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: labels1,
      datasets: [
        {
          label: '% Progres (Kolom P)',
          data: seg1Prog,
          backgroundColor: CHART_COLORS.submitBlue,
          borderColor: CHART_COLORS.submitBlueBorder,
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.82,
          categoryPercentage: 0.85
        },
        {
          label: '% Open+Draft (Kolom Q)',
          data: seg1Draft,
          backgroundColor: 'rgba(245, 158, 11, 0.88)',
          borderColor: '#D97706',
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.82,
          categoryPercentage: 0.85
        },
        {
          label: '% Approve (Kolom R)',
          data: seg1App,
          backgroundColor: CHART_COLORS.approvedGreen,
          borderColor: CHART_COLORS.approvedGreenBorder,
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.82,
          categoryPercentage: 0.85
        }
      ]
    },
    options: opts1
  });

  // Grafik 2: Progres Pemeriksaan (PML) - Grouped
  const ctx2 = document.getElementById('chart-monitoring-2').getContext('2d');
  if (chartMonitoringPemeriksaan) {
    chartMonitoringPemeriksaan.destroy();
  }

  chartMonitoringPemeriksaan = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: labels2,
      datasets: [
        {
          label: '% Progres (Kolom P)',
          data: seg2Prog,
          backgroundColor: CHART_COLORS.submitBlue,
          borderColor: CHART_COLORS.submitBlueBorder,
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.82,
          categoryPercentage: 0.85
        },
        {
          label: '% Open+Draft (Kolom Q)',
          data: seg2Draft,
          backgroundColor: 'rgba(245, 158, 11, 0.88)',
          borderColor: '#D97706',
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.82,
          categoryPercentage: 0.85
        },
        {
          label: '% Approve (Kolom R)',
          data: seg2App,
          backgroundColor: CHART_COLORS.approvedGreen,
          borderColor: CHART_COLORS.approvedGreenBorder,
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.82,
          categoryPercentage: 0.85
        }
      ]
    },
    options: opts2
  });
}


/**
 * Toggle between showing top 5 vs all records for anomali charts
 */
function toggleAnomaliExpanded() {
  isAnomaliExpanded = !isAnomaliExpanded;
  const icon = document.getElementById('icon-toggle-anomali');
  const text = document.getElementById('text-toggle-anomali');
  
  if (icon && text) {
    if (isAnomaliExpanded) {
      icon.className = 'fa-solid fa-chevron-up';
      text.textContent = 'Tampilkan Lebih Sedikit (5 Teratas)';
    } else {
      icon.className = 'fa-solid fa-chevron-down';
      text.textContent = 'Lihat Selengkapnya (Semua Data)';
    }
  }

  renderAnomaliCharts(currentAnomaliSelection);
}

/**
 * Helper to find supervisor PML for a PPL across dataset
 */
function getPmlForPpl(pplName, kecName) {
  if (!pplName) return '';
  const cleanPpl = pplName.trim().toLowerCase();

  // 1. Cek di kecamatan yang diberikan
  if (kecName && POSE_DATA.petugasKecamatan[kecName]) {
    const kObj = POSE_DATA.petugasKecamatan[kecName];
    if (kObj.ppl) {
      const found = kObj.ppl.find(p => p.nama && p.nama.trim().toLowerCase() === cleanPpl);
      if (found && found.pml) return found.pml;
    }
    if (kObj.anomaliPplList) {
      const found = kObj.anomaliPplList.find(p => p.nama && p.nama.trim().toLowerCase() === cleanPpl);
      if (found && found.pml) return found.pml;
    }
  }

  // 2. Cek di seluruh kecamatan
  for (const k of Object.keys(POSE_DATA.petugasKecamatan)) {
    const kObj = POSE_DATA.petugasKecamatan[k];
    if (kObj.ppl) {
      const found = kObj.ppl.find(p => p.nama && p.nama.trim().toLowerCase() === cleanPpl);
      if (found && found.pml) return found.pml;
    }
    if (kObj.anomaliPplList) {
      const found = kObj.anomaliPplList.find(p => p.nama && p.nama.trim().toLowerCase() === cleanPpl);
      if (found && found.pml) return found.pml;
    }
  }

  return '';
}

/**
 * Render or Update Anomali Charts (Grafik 1: Pendataan Anomali, Grafik 2: Pemeriksaan Anomali)
 * @param {string} selectedOption - "Kabupaten Jeneponto" or specific Kecamatan
 */
function renderAnomaliCharts(selectedOption) {
  if (selectedOption) {
    currentAnomaliSelection = selectedOption;
  } else {
    selectedOption = currentAnomaliSelection;
  }

  const isKabupaten = selectedOption === "Kabupaten Jeneponto";
  let allLabels1 = [];
  let allDataGrafik1 = { belum: [], catatan: [], perbaikan: [], belumCount: [], catatanCount: [], perbaikanCount: [], raw: [] };
  let allLabels2 = [];
  let allDataGrafik2 = { belum: [], catatan: [], perbaikan: [], belumCount: [], catatanCount: [], perbaikanCount: [], raw: [] };
  let titleGrafik1 = "";
  let titleGrafik2 = "";

  const query = (anomaliSearchQuery || "").trim().toLowerCase();
  const isSearching = query.length > 0;

  if (isSearching) {
    if (isKabupaten) {
      // Cari Petugas PPL Anomali se-Kabupaten
      const matchedPPLs = [];
      Object.keys(POSE_DATA.petugasKecamatan).forEach(kec => {
        const dataKec = POSE_DATA.petugasKecamatan[kec];
        const pplList = dataKec.anomaliPplList || dataKec.ppl || [];
        pplList.forEach(p => {
          const pmlName = p.pml || getPmlForPpl(p.nama, kec);
          if (
            p.nama.toLowerCase().includes(query) ||
            pmlName.toLowerCase().includes(query) ||
            kec.toLowerCase().includes(query)
          ) {
            matchedPPLs.push(Object.assign({}, p, { kecamatan: kec, pml: pmlName }));
          }
        });
      });

      if (matchedPPLs.length > 0) {
        allLabels1 = matchedPPLs.map(p => `${p.nama} [${p.pml ? p.pml + ' - ' : ''}Kec. ${p.kecamatan}]`);
        allDataGrafik1.belum = matchedPPLs.map(p => +(p.anomaliBelum || 0).toFixed(1));
        allDataGrafik1.catatan = matchedPPLs.map(p => +(p.anomaliCatatan || 0).toFixed(1));
        allDataGrafik1.perbaikan = matchedPPLs.map(p => +(p.anomaliPerbaikan || 0).toFixed(1));
        allDataGrafik1.belumCount = matchedPPLs.map(p => p.belumCount !== undefined ? p.belumCount : Math.round((p.anomaliTotal || 0) * (p.anomaliBelum || 0) / 100));
        allDataGrafik1.catatanCount = matchedPPLs.map(p => p.catatanCount !== undefined ? p.catatanCount : Math.round((p.anomaliTotal || 0) * (p.anomaliCatatan || 0) / 100));
        allDataGrafik1.perbaikanCount = matchedPPLs.map(p => p.perbaikanCount !== undefined ? p.perbaikanCount : Math.round((p.anomaliTotal || 0) * (p.anomaliPerbaikan || 0) / 100));
        allDataGrafik1.raw = matchedPPLs;
      } else {
        allLabels1 = ['Tidak ada PPL cocok'];
        allDataGrafik1.belum = [0];
        allDataGrafik1.catatan = [0];
        allDataGrafik1.perbaikan = [0];
        allDataGrafik1.belumCount = [0];
        allDataGrafik1.catatanCount = [0];
        allDataGrafik1.perbaikanCount = [0];
      }

      // Cari Petugas PML Anomali se-Kabupaten
      const matchedPMLs = [];
      Object.keys(POSE_DATA.petugasKecamatan).forEach(kec => {
        const dataKec = POSE_DATA.petugasKecamatan[kec];
        const pmlList = dataKec.anomaliPmlList || dataKec.pml || [];
        pmlList.forEach(m => {
          const hasMatchingPpl = m.pplList && m.pplList.some(pplName => pplName.toLowerCase().includes(query));
          if (
            m.nama.toLowerCase().includes(query) ||
            hasMatchingPpl ||
            kec.toLowerCase().includes(query)
          ) {
            matchedPMLs.push(Object.assign({}, m, { kecamatan: kec }));
          }
        });
      });

      if (matchedPMLs.length > 0) {
        allLabels2 = matchedPMLs.map(m => `${m.nama} [Kec. ${m.kecamatan}]`);
        allDataGrafik2.belum = matchedPMLs.map(m => +(m.anomaliBelum || 0).toFixed(1));
        allDataGrafik2.catatan = matchedPMLs.map(m => +(m.anomaliCatatan || 0).toFixed(1));
        allDataGrafik2.perbaikan = matchedPMLs.map(m => +(m.anomaliPerbaikan || 0).toFixed(1));
        allDataGrafik2.belumCount = matchedPMLs.map(m => m.belumCount !== undefined ? m.belumCount : Math.round((m.anomaliTotal || 0) * (m.anomaliBelum || 0) / 100));
        allDataGrafik2.catatanCount = matchedPMLs.map(m => m.catatanCount !== undefined ? m.catatanCount : Math.round((m.anomaliTotal || 0) * (m.anomaliCatatan || 0) / 100));
        allDataGrafik2.perbaikanCount = matchedPMLs.map(m => m.perbaikanCount !== undefined ? m.perbaikanCount : Math.round((m.anomaliTotal || 0) * (m.anomaliPerbaikan || 0) / 100));
        allDataGrafik2.raw = matchedPMLs;
      } else {
        allLabels2 = ['Tidak ada PML cocok'];
        allDataGrafik2.belum = [0];
        allDataGrafik2.catatan = [0];
        allDataGrafik2.perbaikan = [0];
        allDataGrafik2.belumCount = [0];
        allDataGrafik2.catatanCount = [0];
        allDataGrafik2.perbaikanCount = [0];
      }

      titleGrafik1 = `Hasil Pencarian Anomali PPL: "${anomaliSearchQuery}" (se-Kabupaten)`;
      titleGrafik2 = `Hasil Pencarian Anomali PML: "${anomaliSearchQuery}" (se-Kabupaten)`;
    } else {
      // Cari Petugas PPL & PML Anomali di Kecamatan terpilih
      const dataKec = POSE_DATA.petugasKecamatan[selectedOption] || POSE_DATA.petugasKecamatan["Binamu"] || {};
      const pplList = (dataKec.anomaliPplList || dataKec.ppl || []).map(p => {
        const pmlName = p.pml || getPmlForPpl(p.nama, selectedOption);
        return Object.assign({}, p, { pml: pmlName });
      });

      const matchedPPLs = pplList.filter(p => 
        p.nama.toLowerCase().includes(query) ||
        (p.pml && p.pml.toLowerCase().includes(query))
      );

      if (matchedPPLs.length > 0) {
        allLabels1 = matchedPPLs.map(p => `${p.nama}${p.pml ? ` [${p.pml}]` : ''}`);
        allDataGrafik1.belum = matchedPPLs.map(p => +(p.anomaliBelum || 0).toFixed(1));
        allDataGrafik1.catatan = matchedPPLs.map(p => +(p.anomaliCatatan || 0).toFixed(1));
        allDataGrafik1.perbaikan = matchedPPLs.map(p => +(p.anomaliPerbaikan || 0).toFixed(1));
        allDataGrafik1.belumCount = matchedPPLs.map(p => p.belumCount !== undefined ? p.belumCount : Math.round((p.anomaliTotal || 0) * (p.anomaliBelum || 0) / 100));
        allDataGrafik1.catatanCount = matchedPPLs.map(p => p.catatanCount !== undefined ? p.catatanCount : Math.round((p.anomaliTotal || 0) * (p.anomaliCatatan || 0) / 100));
        allDataGrafik1.perbaikanCount = matchedPPLs.map(p => p.perbaikanCount !== undefined ? p.perbaikanCount : Math.round((p.anomaliTotal || 0) * (p.anomaliPerbaikan || 0) / 100));
        allDataGrafik1.raw = matchedPPLs;
      } else {
        allLabels1 = ['Tidak ada PPL cocok'];
        allDataGrafik1.belum = [0];
        allDataGrafik1.catatan = [0];
        allDataGrafik1.perbaikan = [0];
        allDataGrafik1.belumCount = [0];
        allDataGrafik1.catatanCount = [0];
        allDataGrafik1.perbaikanCount = [0];
      }

      const pmlList = dataKec.anomaliPmlList || dataKec.pml || [];
      const matchedPMLs = pmlList.filter(m => 
        m.nama.toLowerCase().includes(query) ||
        (m.pplList && m.pplList.some(pplName => pplName.toLowerCase().includes(query)))
      );

      if (matchedPMLs.length > 0) {
        allLabels2 = matchedPMLs.map(m => `${m.nama}${m.pplCount ? ` (${m.pplCount} PPL)` : ''}`);
        allDataGrafik2.belum = matchedPMLs.map(m => +(m.anomaliBelum || 0).toFixed(1));
        allDataGrafik2.catatan = matchedPMLs.map(m => +(m.anomaliCatatan || 0).toFixed(1));
        allDataGrafik2.perbaikan = matchedPMLs.map(m => +(m.anomaliPerbaikan || 0).toFixed(1));
        allDataGrafik2.belumCount = matchedPMLs.map(m => m.belumCount !== undefined ? m.belumCount : Math.round((m.anomaliTotal || 0) * (m.anomaliBelum || 0) / 100));
        allDataGrafik2.catatanCount = matchedPMLs.map(m => m.catatanCount !== undefined ? m.catatanCount : Math.round((m.anomaliTotal || 0) * (m.anomaliCatatan || 0) / 100));
        allDataGrafik2.perbaikanCount = matchedPMLs.map(m => m.perbaikanCount !== undefined ? m.perbaikanCount : Math.round((m.anomaliTotal || 0) * (m.anomaliPerbaikan || 0) / 100));
        allDataGrafik2.raw = matchedPMLs;
      } else {
        allLabels2 = ['Tidak ada PML cocok'];
        allDataGrafik2.belum = [0];
        allDataGrafik2.catatan = [0];
        allDataGrafik2.perbaikan = [0];
        allDataGrafik2.belumCount = [0];
        allDataGrafik2.catatanCount = [0];
        allDataGrafik2.perbaikanCount = [0];
      }

      titleGrafik1 = `Hasil Pencarian Anomali PPL: "${anomaliSearchQuery}" (Kec. ${selectedOption})`;
      titleGrafik2 = `Hasil Pencarian Anomali PML: "${anomaliSearchQuery}" (Kec. ${selectedOption})`;
    }
  } else {
    if (isKabupaten) {
      allLabels1 = POSE_DATA.progresKecamatan.map(k => k.nama);
      allDataGrafik1.belum = POSE_DATA.progresKecamatan.map(k => +(k.anomaliBelum || 0).toFixed(1));
      allDataGrafik1.catatan = POSE_DATA.progresKecamatan.map(k => +(k.anomaliCatatan || 0).toFixed(1));
      allDataGrafik1.perbaikan = POSE_DATA.progresKecamatan.map(k => +(k.anomaliPerbaikan || 0).toFixed(1));
      allDataGrafik1.belumCount = POSE_DATA.progresKecamatan.map(k => {
        const kObj = POSE_DATA.petugasKecamatan[k.nama] || {};
        return k.belumCount !== undefined ? k.belumCount : (kObj.belumCount !== undefined ? kObj.belumCount : 0);
      });
      allDataGrafik1.catatanCount = POSE_DATA.progresKecamatan.map(k => {
        const kObj = POSE_DATA.petugasKecamatan[k.nama] || {};
        return k.catatanCount !== undefined ? k.catatanCount : (kObj.catatanCount !== undefined ? kObj.catatanCount : 0);
      });
      allDataGrafik1.perbaikanCount = POSE_DATA.progresKecamatan.map(k => {
        const kObj = POSE_DATA.petugasKecamatan[k.nama] || {};
        return k.perbaikanCount !== undefined ? k.perbaikanCount : (kObj.perbaikanCount !== undefined ? kObj.perbaikanCount : 0);
      });

      allLabels2 = POSE_DATA.progresKecamatan.map(k => k.nama);
      allDataGrafik2 = {
        belum: [...allDataGrafik1.belum],
        catatan: [...allDataGrafik1.catatan],
        perbaikan: [...allDataGrafik1.perbaikan],
        belumCount: [...allDataGrafik1.belumCount],
        catatanCount: [...allDataGrafik1.catatanCount],
        perbaikanCount: [...allDataGrafik1.perbaikanCount]
      };

      titleGrafik1 = "Progres Penyelesaian Anomali SE2026 Kabupaten Jeneponto (per Kecamatan)";
      titleGrafik2 = "Progres Pemeriksaan Penyelesaian Anomali SE2026 Kab. Jeneponto (per Kecamatan)";
    } else {
      const dataKec = POSE_DATA.petugasKecamatan[selectedOption] || POSE_DATA.petugasKecamatan["Binamu"] || {};

      const pplList = (dataKec.anomaliPplList || dataKec.ppl || []).map(p => {
        const pmlName = p.pml || getPmlForPpl(p.nama, selectedOption);
        return Object.assign({}, p, { pml: pmlName });
      });

      allLabels1 = pplList.map(p => `${p.nama}${p.pml ? ` [${p.pml}]` : ''}`);
      allDataGrafik1.belum = pplList.map(p => +(p.anomaliBelum || 0).toFixed(1));
      allDataGrafik1.catatan = pplList.map(p => +(p.anomaliCatatan || 0).toFixed(1));
      allDataGrafik1.perbaikan = pplList.map(p => +(p.anomaliPerbaikan || 0).toFixed(1));
      allDataGrafik1.belumCount = pplList.map(p => p.belumCount !== undefined ? p.belumCount : Math.round((p.anomaliTotal || 0) * (p.anomaliBelum || 0) / 100));
      allDataGrafik1.catatanCount = pplList.map(p => p.catatanCount !== undefined ? p.catatanCount : Math.round((p.anomaliTotal || 0) * (p.anomaliCatatan || 0) / 100));
      allDataGrafik1.perbaikanCount = pplList.map(p => p.perbaikanCount !== undefined ? p.perbaikanCount : Math.round((p.anomaliTotal || 0) * (p.anomaliPerbaikan || 0) / 100));

      const pmlList = dataKec.anomaliPmlList || dataKec.pml || [];
      allLabels2 = pmlList.map(m => `${m.nama}${m.pplCount ? ` (${m.pplCount} PPL)` : ''}`);
      allDataGrafik2.belum = pmlList.map(m => +(m.anomaliBelum || 0).toFixed(1));
      allDataGrafik2.catatan = pmlList.map(m => +(m.anomaliCatatan || 0).toFixed(1));
      allDataGrafik2.perbaikan = pmlList.map(m => +(m.anomaliPerbaikan || 0).toFixed(1));
      allDataGrafik2.belumCount = pmlList.map(m => m.belumCount !== undefined ? m.belumCount : Math.round((m.anomaliTotal || 0) * (m.anomaliBelum || 0) / 100));
      allDataGrafik2.catatanCount = pmlList.map(m => m.catatanCount !== undefined ? m.catatanCount : Math.round((m.anomaliTotal || 0) * (m.anomaliCatatan || 0) / 100));
      allDataGrafik2.perbaikanCount = pmlList.map(m => m.perbaikanCount !== undefined ? m.perbaikanCount : Math.round((m.anomaliTotal || 0) * (m.anomaliPerbaikan || 0) / 100));

      titleGrafik1 = `Progres Penyelesaian Anomali SE2026 Kec. ${selectedOption} (per PPL)`;
      titleGrafik2 = `Progres Pemeriksaan Anomali SE2026 Kec. ${selectedOption} (per PML)`;
    }
  }

  // Update UI Titles & Subtitles
  const elTitle1 = document.getElementById('title-chart-anomali-1');
  const elTitle2 = document.getElementById('title-chart-anomali-2');
  const elSub1 = document.getElementById('sub-chart-anomali-1');
  const elSub2 = document.getElementById('sub-chart-anomali-2');

  if (elTitle1) elTitle1.textContent = titleGrafik1;
  if (elTitle2) elTitle2.textContent = titleGrafik2;

  if (isSearching) {
    const validCount1 = (allDataGrafik1.raw || []).length;
    const validCount2 = (allDataGrafik2.raw || []).length;
    if (elSub1) elSub1.textContent = `Ditemukan ${validCount1} petugas PPL yang cocok dengan kata kunci "${anomaliSearchQuery}"`;
    if (elSub2) elSub2.textContent = `Ditemukan ${validCount2} pengawas PML yang cocok dengan kata kunci "${anomaliSearchQuery}"`;
  } else {
    const countDisplay1 = isAnomaliExpanded ? allLabels1.length : Math.min(5, allLabels1.length);
    const countDisplay2 = isAnomaliExpanded ? allLabels2.length : Math.min(5, allLabels2.length);
    if (elSub1) elSub1.textContent = `Menampilkan ${countDisplay1} dari ${allLabels1.length} data (${isKabupaten ? 'Kecamatan' : 'PPL'})`;
    if (elSub2) elSub2.textContent = `Menampilkan ${countDisplay2} dari ${allLabels2.length} data (${isKabupaten ? 'Kecamatan' : 'PML'})`;
  }

  // Sembunyikan atau tampilkan tombol toggle selengkapnya saat pencarian aktif
  const toggleAnomaliWrapper = document.getElementById('btn-toggle-anomali-view')?.parentElement;
  if (toggleAnomaliWrapper) {
    toggleAnomaliWrapper.style.display = isSearching ? 'none' : 'flex';
  }

  // Apply Slicing if not expanded and not searching
  const defaultAnomaliCount = 5;
  const labels1 = (isSearching || isAnomaliExpanded) ? allLabels1 : allLabels1.slice(0, defaultAnomaliCount);
  const data1Belum = (isSearching || isAnomaliExpanded) ? allDataGrafik1.belum : allDataGrafik1.belum.slice(0, defaultAnomaliCount);
  const data1Catatan = (isSearching || isAnomaliExpanded) ? allDataGrafik1.catatan : allDataGrafik1.catatan.slice(0, defaultAnomaliCount);
  const data1Perbaikan = (isSearching || isAnomaliExpanded) ? allDataGrafik1.perbaikan : allDataGrafik1.perbaikan.slice(0, defaultAnomaliCount);

  const counts1Belum = (isSearching || isAnomaliExpanded) ? allDataGrafik1.belumCount : allDataGrafik1.belumCount.slice(0, defaultAnomaliCount);
  const counts1Catatan = (isSearching || isAnomaliExpanded) ? allDataGrafik1.catatanCount : allDataGrafik1.catatanCount.slice(0, defaultAnomaliCount);
  const counts1Perbaikan = (isSearching || isAnomaliExpanded) ? allDataGrafik1.perbaikanCount : allDataGrafik1.perbaikanCount.slice(0, defaultAnomaliCount);

  const labels2 = (isSearching || isAnomaliExpanded) ? allLabels2 : allLabels2.slice(0, defaultAnomaliCount);
  const data2Belum = (isSearching || isAnomaliExpanded) ? allDataGrafik2.belum : allDataGrafik2.belum.slice(0, defaultAnomaliCount);
  const data2Catatan = (isSearching || isAnomaliExpanded) ? allDataGrafik2.catatan : allDataGrafik2.catatan.slice(0, defaultAnomaliCount);
  const data2Perbaikan = (isSearching || isAnomaliExpanded) ? allDataGrafik2.perbaikan : allDataGrafik2.perbaikan.slice(0, defaultAnomaliCount);

  const counts2Belum = (isSearching || isAnomaliExpanded) ? allDataGrafik2.belumCount : allDataGrafik2.belumCount.slice(0, defaultAnomaliCount);
  const counts2Catatan = (isSearching || isAnomaliExpanded) ? allDataGrafik2.catatanCount : allDataGrafik2.catatanCount.slice(0, defaultAnomaliCount);
  const counts2Perbaikan = (isSearching || isAnomaliExpanded) ? allDataGrafik2.perbaikanCount : allDataGrafik2.perbaikanCount.slice(0, defaultAnomaliCount);

  // Dynamically adjust container heights
  const container1 = document.getElementById('container-chart-anomali-1');
  const container2 = document.getElementById('container-chart-anomali-2');

  const width = window.innerWidth;
  const isMobile = width <= 640;
  const isSmallMobile = width <= 480;

  // Tiap baris data anomali (1 stacked bar per petugas/wilayah)
  // Saat diperluas / dicari: beri ruang ~48px per baris agar nama dan persentase sangat jelas
  const itemHeight1 = isSmallMobile ? 42 : (isMobile ? 46 : 50);
  const itemHeight2 = isSmallMobile ? 42 : (isMobile ? 46 : 50);

  const collapsedAnomaliHeight = isMobile ? (isSmallMobile ? 270 : 290) : 310;
  const calcHeight1 = (isSearching || isAnomaliExpanded)
    ? Math.max(collapsedAnomaliHeight, labels1.length * itemHeight1 + 80)
    : collapsedAnomaliHeight;
  const calcHeight2 = (isSearching || isAnomaliExpanded)
    ? Math.max(collapsedAnomaliHeight, labels2.length * itemHeight2 + 80)
    : collapsedAnomaliHeight;

  if (container1) {
    container1.style.height = `${calcHeight1}px`;
    container1.style.minHeight = `${calcHeight1}px`;
  }
  if (container2) {
    container2.style.height = `${calcHeight2}px`;
    container2.style.minHeight = `${calcHeight2}px`;
  }

  // Chart 1: Anomali Pendataan (Stacked Horizontal Bar)
  const ctx1 = document.getElementById('chart-anomali-1').getContext('2d');
  if (chartAnomaliPendataan) {
    chartAnomaliPendataan.destroy();
  }
  chartAnomaliPendataan = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: labels1,
      datasets: [
        {
          label: '% Belum Ditindaklanjuti',
          data: data1Belum,
          counts: counts1Belum,
          backgroundColor: CHART_COLORS.anomaliBelum,
          borderColor: CHART_COLORS.anomaliBelumBorder,
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.8,
          categoryPercentage: 0.85
        },
        {
          label: '% Ditindaklanjuti dg Catatan',
          data: data1Catatan,
          counts: counts1Catatan,
          backgroundColor: CHART_COLORS.anomaliCatatan,
          borderColor: CHART_COLORS.anomaliCatatanBorder,
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.8,
          categoryPercentage: 0.85
        },
        {
          label: '% Ditindaklanjuti dg Perbaikan',
          data: data1Perbaikan,
          counts: counts1Perbaikan,
          backgroundColor: CHART_COLORS.anomaliPerbaikan,
          borderColor: CHART_COLORS.anomaliPerbaikanBorder,
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.8,
          categoryPercentage: 0.85
        }
      ]
    },
    options: buildResponsiveChartOptions(labels1, true)
  });

  // Chart 2: Pemeriksaan Anomali (Stacked Horizontal Bar)
  const ctx2 = document.getElementById('chart-anomali-2').getContext('2d');
  if (chartAnomaliPemeriksaan) {
    chartAnomaliPemeriksaan.destroy();
  }

  chartAnomaliPemeriksaan = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: labels2,
      datasets: [
        {
          label: '% Belum Ditindaklanjuti',
          data: data2Belum,
          counts: counts2Belum,
          backgroundColor: CHART_COLORS.anomaliBelum,
          borderColor: CHART_COLORS.anomaliBelumBorder,
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.8,
          categoryPercentage: 0.85
        },
        {
          label: '% Ditindaklanjuti dg Catatan',
          data: data2Catatan,
          counts: counts2Catatan,
          backgroundColor: CHART_COLORS.anomaliCatatan,
          borderColor: CHART_COLORS.anomaliCatatanBorder,
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.8,
          categoryPercentage: 0.85
        },
        {
          label: '% Ditindaklanjuti dg Perbaikan',
          data: data2Perbaikan,
          counts: counts2Perbaikan,
          backgroundColor: CHART_COLORS.anomaliPerbaikan,
          borderColor: CHART_COLORS.anomaliPerbaikanBorder,
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.8,
          categoryPercentage: 0.85
        }
      ]
    },
    options: buildResponsiveChartOptions(labels2, true)
  });
}

// Debounced window resize handler for dynamic chart recalculation across devices
let resizeTimer = null;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (typeof renderMonitoringCharts === 'function') {
      renderMonitoringCharts(currentMonitoringSelection);
    }
    if (typeof renderAnomaliCharts === 'function') {
      renderAnomaliCharts(currentAnomaliSelection);
    }
  }, 200);
});
