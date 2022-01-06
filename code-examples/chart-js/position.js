const actions = [
  {
    name: 'Position: average',
    handler(chart) {
      chart.options.plugins.tooltip.position = 'average';
      chart.update();
    }
  },
  {
    name: 'Position: nearest',
    handler(chart) {
      chart.options.plugins.tooltip.position = 'nearest';
      chart.update();
    }
  },
  {
    name: 'Position: bottom (custom)',
    handler(chart) {
      chart.options.plugins.tooltip.position = 'bottom';
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
    },
  ]
};

// Create a custom tooltip positioner to put at the bottom of the chart area
components.Tooltip.positioners.bottom = function(items) {
  const pos = components.Tooltip.positioners.average(items);

  // Happens when nothing is found
  if (pos === false) {
    return false;
  }

  const chart = this.chart;

  return {
    x: pos.x,
    y: chart.chartArea.bottom,
    xAlign: 'center',
    yAlign: 'bottom',
  };
};


const config = {
  type: 'line',
  data: data,
  options: {
    interaction: {
      intersect: false,
      mode: 'index',
    },
    plugins: {
      title: {
        display: true,
        text: (ctx) => 'Tooltip position mode: ' + ctx.chart.options.plugins.tooltip.position,
      },
    }
  }
};

module.exports = {
  actions: actions,
  config: config,
};
