/**
 * PoSE - Portal Sensus Ekonomi 2026 BPS Kabupaten Jeneponto
 * Chart.js Visualization Logic
 */

let chartMonitoringPendataan = null;
let chartMonitoringPemeriksaan = null;
let chartAnomaliPendataan = null;
let chartAnomaliPemeriksaan = null;

// Palette Colors for Charts (Orange Derivatives)
const CHART_COLORS = {
  submitOrange: 'rgba(255, 107, 0, 0.85)',       // % Submit
  submitOrangeBorder: '#E05300',
  approvedGreen: 'rgba(16, 185, 129, 0.85)',     // % Approved
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

let isMonitoringExpanded = false;
let currentMonitoringSelection = "Kabupaten Jeneponto";

/**
 * Helper to build responsive Chart.js options optimized for Mobile, Tablet & Desktop
 */
function buildResponsiveChartOptions(labels) {
  const width = window.innerWidth;
  const isMobile = width <= 640;
  const isSmallMobile = width <= 480;

  return {
    indexAxis: 'y',
    responsive: true,
    maintainAspectRatio: false,
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
        stacked: true,
        beginAtZero: true,
        max: 100,
        ticks: {
          callback: value => value + '%',
          font: { 
            size: isSmallMobile ? 9.5 : (isMobile ? 10.5 : 11),
            weight: '600'
          },
          color: '#64748B',
          maxTicksLimit: isSmallMobile ? 6 : 11
        },
        grid: {
          color: 'rgba(0,0,0,0.05)'
        }
      },
      y: {
        stacked: true,
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
      text.textContent = 'Tampilkan Lebih Sedikit (5 Teratas)';
    } else {
      icon.className = 'fa-solid fa-chevron-down';
      text.textContent = 'Lihat Selengkapnya (Semua Data)';
    }
  }

  renderMonitoringCharts(currentMonitoringSelection);
}

/**
 * Render or Update Monitoring Charts (Grafik 1: Pendataan, Grafik 2: Pemeriksaan)
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
  let allDataGrafik1 = { belum: [], submitOnly: [], approved: [] };
  let allLabels2 = [];
  let allDataGrafik2 = { rejected: [], belumPeriksa: [], approved: [] };
  let titleGrafik1 = "";
  let titleGrafik2 = "";

  if (isKabupaten) {
    allLabels1 = POSE_DATA.progresKecamatan.map(k => k.nama);
    allDataGrafik1.belum = POSE_DATA.progresKecamatan.map(k => +(Math.max(0, 100 - k.submit).toFixed(1)));
    allDataGrafik1.submitOnly = POSE_DATA.progresKecamatan.map(k => +(Math.max(0, k.submit - k.approved).toFixed(1)));
    allDataGrafik1.approved = POSE_DATA.progresKecamatan.map(k => +(k.approved).toFixed(1));

    allLabels2 = POSE_DATA.progresKecamatan.map(k => k.nama);
    allDataGrafik2.rejected = POSE_DATA.progresKecamatan.map(k => +(k.rejected).toFixed(1));
    allDataGrafik2.belumPeriksa = POSE_DATA.progresKecamatan.map(k => +(Math.max(0, 100 - k.approved - k.rejected).toFixed(1)));
    allDataGrafik2.approved = POSE_DATA.progresKecamatan.map(k => +(k.approved).toFixed(1));

    titleGrafik1 = "Progres Pendataan SE2026 Kabupaten Jeneponto (per Kecamatan)";
    titleGrafik2 = "Progres Pemeriksaan SE2026 Kabupaten Jeneponto (per Kecamatan)";
  } else {
    const dataKec = POSE_DATA.petugasKecamatan[selectedOption] || POSE_DATA.petugasKecamatan["Binamu"];
    
    // Grafik 1: PPL
    allLabels1 = dataKec.ppl.map(p => p.nama);
    allDataGrafik1.belum = dataKec.ppl.map(p => +(Math.max(0, 100 - p.submit).toFixed(1)));
    allDataGrafik1.submitOnly = dataKec.ppl.map(p => +(Math.max(0, p.submit - p.approved).toFixed(1)));
    allDataGrafik1.approved = dataKec.ppl.map(p => +(p.approved).toFixed(1));
    
    // Grafik 2: PML
    allLabels2 = dataKec.pml.map(p => p.nama);
    allDataGrafik2.rejected = dataKec.pml.map(p => +(p.rejected).toFixed(1));
    allDataGrafik2.belumPeriksa = dataKec.pml.map(p => +(Math.max(0, 100 - p.approved - p.rejected).toFixed(1)));
    allDataGrafik2.approved = dataKec.pml.map(p => +(p.approved).toFixed(1));

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

  const countDisplay1 = isMonitoringExpanded ? allLabels1.length : Math.min(5, allLabels1.length);
  const countDisplay2 = isMonitoringExpanded ? allLabels2.length : Math.min(5, allLabels2.length);

  if (elSub1) elSub1.textContent = `Menampilkan ${countDisplay1} dari ${allLabels1.length} data (${isKabupaten ? 'Kecamatan' : 'PPL'})`;
  if (elSub2) elSub2.textContent = `Menampilkan ${countDisplay2} dari ${allLabels2.length} data (${isKabupaten ? 'Kecamatan' : 'PML'})`;

  // Apply Slicing if not expanded
  const labels1 = isMonitoringExpanded ? allLabels1 : allLabels1.slice(0, 5);
  const data1Belum = isMonitoringExpanded ? allDataGrafik1.belum : allDataGrafik1.belum.slice(0, 5);
  const data1SubmitOnly = isMonitoringExpanded ? allDataGrafik1.submitOnly : allDataGrafik1.submitOnly.slice(0, 5);
  const data1Approved = isMonitoringExpanded ? allDataGrafik1.approved : allDataGrafik1.approved.slice(0, 5);

  const labels2 = isMonitoringExpanded ? allLabels2 : allLabels2.slice(0, 5);
  const data2Rejected = isMonitoringExpanded ? allDataGrafik2.rejected : allDataGrafik2.rejected.slice(0, 5);
  const data2BelumPeriksa = isMonitoringExpanded ? allDataGrafik2.belumPeriksa : allDataGrafik2.belumPeriksa.slice(0, 5);
  const data2Approved = isMonitoringExpanded ? allDataGrafik2.approved : allDataGrafik2.approved.slice(0, 5);

  // Dynamically adjust container heights
  const container1 = document.getElementById('container-chart-monitoring-1');
  const container2 = document.getElementById('container-chart-monitoring-2');

  const width = window.innerWidth;
  const isMobile = width <= 640;
  const isSmallMobile = width <= 480;

  const itemHeight1 = isMobile ? (isSmallMobile ? 32 : 36) : 30;
  const itemHeight2 = isMobile ? (isSmallMobile ? 32 : 36) : 34;

  const calcHeight1 = isMonitoringExpanded ? Math.max(280, labels1.length * itemHeight1) : (isMobile ? 240 : 280);
  const calcHeight2 = isMonitoringExpanded ? Math.max(280, labels2.length * itemHeight2) : (isMobile ? 240 : 280);

  if (container1) container1.style.height = `${calcHeight1}px`;
  if (container2) container2.style.height = `${calcHeight2}px`;

  // Chart 1: Progres Pendataan (Stacked Horizontal Bar - Identik dengan Anomali)
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
          label: '% Rejected by Pengawas',
          data: data1Belum,
          backgroundColor: CHART_COLORS.anomaliBelum,
          borderColor: CHART_COLORS.anomaliBelumBorder,
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.8,
          categoryPercentage: 0.85
        },
        {
          label: '% Submit (Menunggu Approval)',
          data: data1SubmitOnly,
          backgroundColor: CHART_COLORS.submitOrange,
          borderColor: CHART_COLORS.submitOrangeBorder,
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.8,
          categoryPercentage: 0.85
        },
        {
          label: '% Approved (PML)',
          data: data1Approved,
          backgroundColor: CHART_COLORS.approvedGreen,
          borderColor: CHART_COLORS.approvedGreenBorder,
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.8,
          categoryPercentage: 0.85
        }
      ]
    },
    options: buildResponsiveChartOptions(labels1)
  });

  // Chart 2: Progres Pemeriksaan (Stacked Horizontal Bar - Identik dengan Anomali)
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
          label: '% Rejected',
          data: data2Rejected,
          backgroundColor: CHART_COLORS.rejectedCoral,
          borderColor: CHART_COLORS.rejectedCoralBorder,
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.8,
          categoryPercentage: 0.85
        },
        {
          label: '% Belum Diperiksa',
          data: data2BelumPeriksa,
          backgroundColor: CHART_COLORS.anomaliCatatan,
          borderColor: CHART_COLORS.anomaliCatatanBorder,
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.8,
          categoryPercentage: 0.85
        },
        {
          label: '% Approved',
          data: data2Approved,
          backgroundColor: CHART_COLORS.approvedGreen,
          borderColor: CHART_COLORS.approvedGreenBorder,
          borderWidth: 1.5,
          borderRadius: 4,
          barPercentage: 0.8,
          categoryPercentage: 0.85
        }
      ]
    },
    options: buildResponsiveChartOptions(labels2)
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
    allDataGrafik2.belum = POSE_DATA.progresKecamatan.map(k => Math.max(0, k.anomaliBelum - 2));
    allDataGrafik2.catatan = POSE_DATA.progresKecamatan.map(k => k.anomaliCatatan);
    allDataGrafik2.perbaikan = POSE_DATA.progresKecamatan.map(k => Math.min(100, k.anomaliPerbaikan + 2));

    titleGrafik1 = "Progres Penyelesaian Anomali SE2026 Kabupaten Jeneponto (per Kecamatan)";
    titleGrafik2 = "Progres Pemeriksaan Penyelesaian Anomali SE2026 Kab. Jeneponto";
  } else {
    const dataKec = POSE_DATA.petugasKecamatan[selectedOption] || POSE_DATA.petugasKecamatan["Binamu"];
    
    // Grafik 1: PPL
    allLabels1 = dataKec.ppl.map(p => p.nama);
    allDataGrafik1.belum = dataKec.ppl.map(p => p.anomaliBelum);
    allDataGrafik1.catatan = dataKec.ppl.map(p => p.anomaliCatatan);
    allDataGrafik1.perbaikan = dataKec.ppl.map(p => p.anomaliPerbaikan);

    // Grafik 2: PML
    allLabels2 = dataKec.pml.map(p => p.nama);
    allDataGrafik2.belum = dataKec.pml.map(p => p.anomaliBelum);
    allDataGrafik2.catatan = dataKec.pml.map(p => p.anomaliCatatan);
    allDataGrafik2.perbaikan = dataKec.pml.map(p => p.anomaliPerbaikan);

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
    options: buildResponsiveChartOptions(labels1)
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
    options: buildResponsiveChartOptions(labels2)
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
