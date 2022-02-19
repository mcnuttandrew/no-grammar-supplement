// CHART CONFIG// -----------------------------
let chartConfig = {
  type: 'bar',
  stacked: true,
  title: {text: 'Multiple Stacked Bar', adjustLayout: true},
  legend: {align: 'center', layout: 'x3', toggleAction: 'remove', verticalAlign: 'bottom'},
  plot: {
    tooltip: {
      text: '%t %negation$%v',
      align: 'left',
      borderRadius: '3px',
      decimals: 2,
      fontColor: '#ffffff',
      negation: 'currency'
    },
    valueBox: {text: '%total', thousandsSeparator: ',', rules: [{rule: '%stack-top == 0', visible: false}]},
    offsetY: '-1px',
    rules: [{offsetY: '1px', rule: '%v <= 0'}]
  },
  plotarea: {margin: 'dynamic'},
  scaleX: {labels: ['Q1<br>2020', 'Q2', 'Q3', 'Q4', 'Q1<br>2021', 'Q2', 'Q3', 'Q4']},
  scaleY: {
    format: '$%v',
    guide: {items: [{backgroundColor: '#f5f5f5'}, {backgroundColor: '#eeeeee'}]},
    multiplier: true,
    negation: 'currency',
    refLine: {lineColor: '#212121', lineWidth: '2px'}
  },
  series: [
    {
      text: 'Distributed Product',
      values: [358425, 378546, 399865, 402514, 385652, 399996, 412541, 405365],
      backgroundColor: '#66bb6a',
      stack: 1
    },
    {
      text: 'Professional Services',
      values: [99452, 120145, 101452, 105487, 115102, 99054, 115431, 119898],
      backgroundColor: '#43a047',
      stack: 1
    },
    {
      text: 'Product Support',
      values: [85425, 78546, 82145, 99568, 102145, 98568, 99669, 101020],
      backgroundColor: '#2e7d32',
      stack: 1
    },
    {
      text: 'Product Development',
      values: [-124581, -165874, -163258, -205451, -225215, -199012, -205656, -205658],
      backgroundColor: '#e53935',
      stack: 2
    },
    {
      text: 'Services Expense',
      values: [-102545, -105478, -99015, -110245, -99458, -98658, -102545, -97325],
      backgroundColor: '#c62828',
      stack: 2
    }
  ]
}; // RENDER CHARTS// -----------------------------
zingchart.render({id: 'myChart', data: chartConfig, height: '100%', width: '100%'});
