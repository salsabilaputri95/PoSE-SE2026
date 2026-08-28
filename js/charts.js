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
        left: 0,
        right: isSmallMobile ? 4 : 8,
        top: 2,
        bottom: 2
      }
    },
    scales: {
      x: {
        stacked: isStacked,
        beginAtZero: true,
        max: 100,
        ticks: isMonitoring ? {
          display: true,
          color: '#64748B',
          font: { size: isSmallMobile ? 9 : 10 },
          callback: function(value) {
            return value + '%';
          },
          maxTicksLimit: 5
        } : {
          display: false
        },
        grid: isMonitoring ? {
          display: true,
          color: 'rgba(100,116,139,0.12)',
          drawBorder: false
        } : {
          display: false,
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
            size: labels.length > 20 ? (isSmallMobile ? 9 : 10) : (isSmallMobile ? 9.5 : (isMobile ? 10.5 : 11)),
            weight: '600'
          },
          color: '#334155',
          autoSkip: false,
          callback: function(value) {
            const rawLabel = this.getLabelForValue(value);
            if (!rawLabel) return '';
            const maxLen = isSmallMobile ? 14 : (isMobile ? 18 : 32);
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
          padding: isSmallMobile ? 6 : (isMobile ? 8 : 12),
          font: { 
            size: isSmallMobile ? 9.5 : (isMobile ? 10.5 : 11), 
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
          label: context => ` ${context.dataset.label}: ${context.raw}%`
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
    // Buat daftar unik PML dan rata-rata data PPL-nya
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

  // Update UI Card Titles & Subtitles
  const elTitle1 = document.getElementById('title-chart-monitoring-1');
  const elTitle2 = document.getElementById('title-chart-monitoring-2');
  const elSub1 = document.getElementById('sub-chart-monitoring-1');
  const elSub2 = document.getElementById('sub-chart-monitoring-2');

  if (elTitle1) elTitle1.textContent = titleGrafik1;
  if (elTitle2) elTitle2.textContent = titleGrafik2;

  if (elSub1) elSub1.textContent = `Menampilkan ${isMonitoringExpanded ? allLabels1.length : Math.min(3, allLabels1.length)} dari ${allLabels1.length} data (${isKabupaten ? 'Kecamatan' : 'PPL'})`;
  if (elSub2) elSub2.textContent = `Menampilkan ${isMonitoringExpanded ? allLabels2.length : Math.min(3, allLabels2.length)} dari ${allLabels2.length} data (${isKabupaten ? 'Kecamatan' : 'PML'})`;

  // Tampilkan 3 data by default, semua jika expanded
  const defaultCount = 3;
  const labels1 = isMonitoringExpanded ? allLabels1 : allLabels1.slice(0, defaultCount);
  const rawList1 = isMonitoringExpanded ? allDataGrafik1 : allDataGrafik1.slice(0, defaultCount);
  const seg1App   = rawList1.map(d => d.approved);
  const seg1Draft = rawList1.map(d => d.openDraft);
  const seg1Prog  = rawList1.map(d => d.progres);

  const labels2 = isMonitoringExpanded ? allLabels2 : allLabels2.slice(0, defaultCount);
  const rawList2 = isMonitoringExpanded ? allDataGrafik2 : allDataGrafik2.slice(0, defaultCount);
  const seg2App   = rawList2.map(d => d.approved);
  const seg2Draft = rawList2.map(d => d.openDraft);
  const seg2Prog  = rawList2.map(d => d.progres);

  // Sesuaikan tinggi kontainer - kompak karena sumbu X sudah tidak ada persen
  const container1 = document.getElementById('container-chart-monitoring-1');
  const container2 = document.getElementById('container-chart-monitoring-2');

  const width = window.innerWidth;
  const isMobile = width <= 640;
  const isSmallMobile = width <= 480;

  // Chart grouped 3 dataset: tiap label group = 3 bar
  // Expanded: ~100px per item agar nama PPL/PML terbaca jelas
  const numDatasets = 3;
  const barPx = isMobile ? (isSmallMobile ? 22 : 26) : 26;
  const groupGap = isMobile ? 24 : 22;
  const itemHeightExpanded = numDatasets * barPx + groupGap; // ~100px per label
  const collapsedHeight = isMobile ? (isSmallMobile ? 280 : 320) : 300;

  const calcHeight1 = isMonitoringExpanded
    ? Math.max(collapsedHeight, labels1.length * itemHeightExpanded + 100)
    : collapsedHeight;
  const calcHeight2 = isMonitoringExpanded
    ? Math.max(collapsedHeight, labels2.length * itemHeightExpanded + 100)
    : collapsedHeight;

  if (container1) container1.style.height = `${calcHeight1}px`;
  if (container2) container2.style.height = `${calcHeight2}px`;

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

  // Grafik 1: Progres Pendataan (100% Stacked: Hijau Approve + Biru Progres + Kuning Open/Draft)
  const ctx1 = document.getElementById('chart-monitoring-1').getContext('2d');
  if (chartMonitoringPendataan) {
    chartMonitoringPendataan.destroy();
  }
  // Grafik 1: Grouped - Urutan: 🔵 Progres → 🟡 Open+Draft → 🟢 Approve
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
          borderWidth: 1,
          borderRadius: 3,
          barPercentage: 0.65,
          categoryPercentage: 0.75
        },
        {
          label: '% Open+Draft (Kolom Q)',
          data: seg1Draft,
          backgroundColor: 'rgba(245, 158, 11, 0.85)',
          borderColor: '#D97706',
          borderWidth: 1,
          borderRadius: 3,
          barPercentage: 0.65,
          categoryPercentage: 0.75
        },
        {
          label: '% Approve (Kolom R)',
          data: seg1App,
          backgroundColor: CHART_COLORS.approvedGreen,
          borderColor: CHART_COLORS.approvedGreenBorder,
          borderWidth: 1,
          borderRadius: 3,
          barPercentage: 0.65,
          categoryPercentage: 0.75
        }
      ]
    },
    options: opts1
  });

  // Grafik 2: Progres Pemeriksaan (100% Stacked: Hijau Approve + Biru Progres + Kuning Open/Draft)
  const ctx2 = document.getElementById('chart-monitoring-2').getContext('2d');
  if (chartMonitoringPemeriksaan) {
    chartMonitoringPemeriksaan.destroy();
  }

  // Grafik 2: Grouped - Urutan: 🔵 Progres → 🟡 Open+Draft → 🟢 Approve
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
          borderWidth: 1,
          borderRadius: 3,
          barPercentage: 0.65,
          categoryPercentage: 0.75
        },
        {
          label: '% Open+Draft (Kolom Q)',
          data: seg2Draft,
          backgroundColor: 'rgba(245, 158, 11, 0.85)',
          borderColor: '#D97706',
          borderWidth: 1,
          borderRadius: 3,
          barPercentage: 0.65,
          categoryPercentage: 0.75
        },
        {
          label: '% Approve (Kolom R)',
          data: seg2App,
          backgroundColor: CHART_COLORS.approvedGreen,
          borderColor: CHART_COLORS.approvedGreenBorder,
          borderWidth: 1,
          borderRadius: 3,
          barPercentage: 0.65,
          categoryPercentage: 0.75
        }
      ]
    },
    options: opts2
  });
}

let isAnomaliExpanded = false;
let currentAnomaliSelection = "Kabupaten Jeneponto";

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
  let allDataGrafik1 = { belum: [], catatan: [], perbaikan: [] };
  let allLabels2 = [];
  let allDataGrafik2 = { belum: [], catatan: [], perbaikan: [] };
  let titleGrafik1 = "";
  let titleGrafik2 = "";

  if (isKabupaten) {
    allLabels1 = POSE_DATA.progresKecamatan.map(k => k.nama);
    allDataGrafik1.belum = POSE_DATA.progresKecamatan.map(k => k.anomaliBelum);
    allDataGrafik1.catatan = POSE_DATA.progresKecamatan.map(k => k.anomaliCatatan);
    allDataGrafik1.perbaikan = POSE_DATA.progresKecamatan.map(k => k.anomaliPerbaikan);
    
    // Untuk pemeriksaan se-Kabupaten
    allLabels2 = POSE_DATA.progresKecamatan.map(k => k.nama);
    allDataGrafik2.belum = POSE_DATA.progresKecamatan.map(k => k.anomaliBelum);
    allDataGrafik2.catatan = POSE_DATA.progresKecamatan.map(k => k.anomaliCatatan);
    allDataGrafik2.perbaikan = POSE_DATA.progresKecamatan.map(k => k.anomaliPerbaikan);

    titleGrafik1 = "Progres Penyelesaian Anomali SE2026 Kabupaten Jeneponto (per Kecamatan)";
    titleGrafik2 = "Progres Pemeriksaan Penyelesaian Anomali SE2026 Kab. Jeneponto (per Kecamatan)";
  } else {
    const dataKec = POSE_DATA.petugasKecamatan[selectedOption] || POSE_DATA.petugasKecamatan["Binamu"];
    
    // Grafik 1: PPL
    const pplList = dataKec.anomaliPplList || dataKec.ppl || [];
    allLabels1 = pplList.map(p => p.nama);
    allDataGrafik1.belum = pplList.map(p => p.anomaliBelum);
    allDataGrafik1.catatan = pplList.map(p => p.anomaliCatatan);
    allDataGrafik1.perbaikan = pplList.map(p => p.anomaliPerbaikan);

    // Grafik 2: PML
    const pmlList = dataKec.anomaliPmlList || dataKec.pml || [];
    allLabels2 = pmlList.map(p => p.nama);
    allDataGrafik2.belum = pmlList.map(p => p.anomaliBelum);
    allDataGrafik2.catatan = pmlList.map(p => p.anomaliCatatan);
    allDataGrafik2.perbaikan = pmlList.map(p => p.anomaliPerbaikan);

    titleGrafik1 = `Progres Penyelesaian Anomali SE2026 Kec. ${selectedOption} (per PPL)`;
    titleGrafik2 = `Progres Pemeriksaan Anomali SE2026 Kec. ${selectedOption} (per PML)`;
  }

  // Update UI Titles & Subtitles
  const elTitle1 = document.getElementById('title-chart-anomali-1');
  const elTitle2 = document.getElementById('title-chart-anomali-2');
  const elSub1 = document.getElementById('sub-chart-anomali-1');
  const elSub2 = document.getElementById('sub-chart-anomali-2');

  if (elTitle1) elTitle1.textContent = titleGrafik1;
  if (elTitle2) elTitle2.textContent = titleGrafik2;

  const countDisplay1 = isAnomaliExpanded ? allLabels1.length : Math.min(5, allLabels1.length);
  const countDisplay2 = isAnomaliExpanded ? allLabels2.length : Math.min(5, allLabels2.length);

  if (elSub1) elSub1.textContent = `Menampilkan ${countDisplay1} dari ${allLabels1.length} data (${isKabupaten ? 'Kecamatan' : 'PPL'})`;
  if (elSub2) elSub2.textContent = `Menampilkan ${countDisplay2} dari ${allLabels2.length} data (${isKabupaten ? 'Kecamatan' : 'PML'})`;

  // Apply Slicing if not expanded
  const labels1 = isAnomaliExpanded ? allLabels1 : allLabels1.slice(0, 5);
  const data1Belum = isAnomaliExpanded ? allDataGrafik1.belum : allDataGrafik1.belum.slice(0, 5);
  const data1Catatan = isAnomaliExpanded ? allDataGrafik1.catatan : allDataGrafik1.catatan.slice(0, 5);
  const data1Perbaikan = isAnomaliExpanded ? allDataGrafik1.perbaikan : allDataGrafik1.perbaikan.slice(0, 5);

  const labels2 = isAnomaliExpanded ? allLabels2 : allLabels2.slice(0, 5);
  const data2Belum = isAnomaliExpanded ? allDataGrafik2.belum : allDataGrafik2.belum.slice(0, 5);
  const data2Catatan = isAnomaliExpanded ? allDataGrafik2.catatan : allDataGrafik2.catatan.slice(0, 5);
  const data2Perbaikan = isAnomaliExpanded ? allDataGrafik2.perbaikan : allDataGrafik2.perbaikan.slice(0, 5);

  // Dynamically adjust container heights
  const container1 = document.getElementById('container-chart-anomali-1');
  const container2 = document.getElementById('container-chart-anomali-2');

  const width = window.innerWidth;
  const isMobile = width <= 640;
  const isSmallMobile = width <= 480;

  const itemHeight1 = isMobile ? (isSmallMobile ? 32 : 36) : 30;
  const itemHeight2 = isMobile ? (isSmallMobile ? 32 : 36) : 34;

  const calcHeight1 = isAnomaliExpanded ? Math.max(280, labels1.length * itemHeight1) : (isMobile ? 240 : 280);
  const calcHeight2 = isAnomaliExpanded ? Math.max(280, labels2.length * itemHeight2) : (isMobile ? 240 : 280);

  if (container1) container1.style.height = `${calcHeight1}px`;
  if (container2) container2.style.height = `${calcHeight2}px`;

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
