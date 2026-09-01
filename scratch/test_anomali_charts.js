const fs = require('fs');
const dataCode = fs.readFileSync('js/data.js', 'utf8');
const chartsCode = fs.readFileSync('js/charts.js', 'utf8');

global.POSE_DATA = null;
eval(dataCode.replace('const POSE_DATA', 'global.POSE_DATA'));

global.currentAnomaliSelection = 'Kabupaten Jeneponto';
global.anomaliSearchQuery = '';
global.isAnomaliExpanded = false;
global.window = { innerWidth: 1200, addEventListener: () => {} };
global.document = {
  getElementById: (id) => ({
    textContent: '',
    style: {},
    parentElement: { style: {} },
    getContext: () => ({})
  }),
  querySelectorAll: () => []
};

let chart1Instance = null;
let chart2Instance = null;
global.Chart = function(ctx, config) {
  if (!chart1Instance) chart1Instance = config;
  else chart2Instance = config;
  return { destroy: () => {} };
};

eval(chartsCode);

console.log('=== TEST 1: Kabupaten View ===');
chart1Instance = null; chart2Instance = null;
renderAnomaliCharts('Kabupaten Jeneponto');
console.log('Labels 1:', chart1Instance.data.labels);
console.log('Dataset 0 (Belum):', chart1Instance.data.datasets[0].data[0], '% | Count:', chart1Instance.data.datasets[0].counts[0]);
console.log('Dataset 1 (Catatan):', chart1Instance.data.datasets[1].data[0], '% | Count:', chart1Instance.data.datasets[1].counts[0]);
console.log('Dataset 2 (Perbaikan):', chart1Instance.data.datasets[2].data[0], '% | Count:', chart1Instance.data.datasets[2].counts[0]);

const tooltipLabelFn = chart1Instance.options.plugins.tooltip.callbacks.label;
console.log('Tooltip item 0 Belum:', tooltipLabelFn({ dataset: chart1Instance.data.datasets[0], raw: chart1Instance.data.datasets[0].data[0], dataIndex: 0 }));
console.log('Tooltip item 0 Catatan:', tooltipLabelFn({ dataset: chart1Instance.data.datasets[1], raw: chart1Instance.data.datasets[1].data[0], dataIndex: 0 }));
console.log('Tooltip item 0 Perbaikan:', tooltipLabelFn({ dataset: chart1Instance.data.datasets[2], raw: chart1Instance.data.datasets[2].data[0], dataIndex: 0 }));

console.log('\n=== TEST 2: Kecamatan Arungkeke View ===');
chart1Instance = null; chart2Instance = null;
renderAnomaliCharts('Arungkeke');
console.log('PPL Labels 1 (with PML):', chart1Instance.data.labels);
console.log('PML Labels 2:', chart2Instance.data.labels);
console.log('PPL 0 Belum Count:', chart1Instance.data.datasets[0].counts[0], 'Catatan Count:', chart1Instance.data.datasets[1].counts[0], 'Perbaikan Count:', chart1Instance.data.datasets[2].counts[0]);
console.log('Tooltip PPL 0 Belum:', tooltipLabelFn({ dataset: chart1Instance.data.datasets[0], raw: chart1Instance.data.datasets[0].data[0], dataIndex: 0 }));
console.log('Tooltip PPL 0 Catatan:', tooltipLabelFn({ dataset: chart1Instance.data.datasets[1], raw: chart1Instance.data.datasets[1].data[0], dataIndex: 0 }));
console.log('Tooltip PPL 0 Perbaikan:', tooltipLabelFn({ dataset: chart1Instance.data.datasets[2], raw: chart1Instance.data.datasets[2].data[0], dataIndex: 0 }));

console.log('\n=== TEST 3: Search PPL "Medi" ===');
chart1Instance = null; chart2Instance = null;
anomaliSearchQuery = 'Medi';
renderAnomaliCharts('Kabupaten Jeneponto');
console.log('Search Results Labels 1:', chart1Instance.data.labels);
console.log('Search Results Labels 2 (Supervisor PML):', chart2Instance.data.labels);
console.log('Search Tooltip:', tooltipLabelFn({ dataset: chart1Instance.data.datasets[1], raw: chart1Instance.data.datasets[1].data[0], dataIndex: 0 }));
