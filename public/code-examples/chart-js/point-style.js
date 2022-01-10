const actions = [
  {
    name: 'Toggle Tooltip Point Style',
    handler(chart) {
      chart.options.plugins.tooltip.usePointStyle = !chart.options.plugins.tooltip.usePointStyle;
      chart.update();
    }
  },
];

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};
const data = {
  labels: Utils.months({count: DATA_COUNT}),
  datasets: [
    {
      label: 'Triangles',
      data: Utils.numbers(NUMBER_CFG),
      fill: false,
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      pointStyle: 'triangle',
      pointRadius: 6,
    },
    {
      label: 'Circles',
      data: Utils.numbers(NUMBER_CFG),
      fill: false,
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      pointStyle: 'circle',
      pointRadius: 6,
    },
    {
      label: 'Stars',
      data: Utils.numbers(NUMBER_CFG),
      fill: false,
      borderColor: Utils.CHART_COLORS.green,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.green, 0.5),
      pointStyle: 'star',
      pointRadius: 6,
    }
  ]
};

const config = {
  type: 'line',
  data: data,
  options: {
    interaction: {
      mode: 'index',
    },
    plugins: {
      title: {
        display: true,
        text: (ctx) => 'Tooltip point style: ' + ctx.chart.options.plugins.tooltip.usePointStyle,
      },
      tooltip: {
        usePointStyle: true,
      }
    }
  }
};

module.exports = {
  actions: actions,
  config: config,
};
