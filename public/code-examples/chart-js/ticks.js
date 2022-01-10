const actions = [
  {
    name: 'Alignment: start',
    handler(chart) {
      chart.options.scales.x.ticks.align = 'start';
      chart.update();
    }
  },
  {
    name: 'Alignment: center (default)',
    handler(chart) {
      chart.options.scales.x.ticks.align = 'center';
      chart.update();
    }
  },
  {
    name: 'Alignment: end',
    handler(chart) {
      chart.options.scales.x.ticks.align = 'end';
      chart.update();
    }
  },
];


const DATA_COUNT = 12;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 100};
const data = {
  labels: [['June', '2015'], 'July', 'August', 'September', 'October', 'November', 'December', ['January', '2016'], 'February', 'March', 'April', 'May'],
  datasets: [
    {
      label: 'Dataset 1',
      data: Utils.numbers(NUMBER_CFG),
      fill: false,
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
    {
      label: 'Dataset 2',
      data: Utils.numbers(NUMBER_CFG),
      fill: false,
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    }
  ]
};

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart with Tick Configuration'
      }
    },
    scales: {
      x: {
        ticks: {
          // For a category axis, the val is the index so the lookup via getLabelForValue is needed
          callback: function(val, index) {
            // Hide every 2nd tick label
            return index % 2 === 0 ? this.getLabelForValue(val) : '';
          },
          color: 'red',
        }
      }
    }
  },
};

module.exports = {
  actions: actions,
  config: config,
};
