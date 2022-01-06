const actions = [
  {
    name: 'Randomize',
    handler(chart) {
      chart.data.datasets.forEach(dataset => {
        dataset.data = Utils.numbers({count: chart.data.labels.length, min: -100, max: 100});
      });
      chart.update();
    }
  },
];

const DATA_COUNT = 7;
const data = {
  labels: Utils.months({count: DATA_COUNT}),
  datasets: [
    {
      label: 'Dataset 1',
      data: [10, 30, 39, 20, 25, 34, -10],
      fill: false,
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
    },
    {
      label: 'Dataset 2',
      data: [18, 33, 22, 19, 11, -39, 30],
      fill: false,
      borderColor: Utils.CHART_COLORS.blue,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
    }
  ]
};

// Change these settings to change the display for different parts of the X axis
// grid configuiration
const DISPLAY = true;
const BORDER = true;
const CHART_AREA = true;
const TICKS = true;

const config = {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Grid Line Settings'
      }
    },
    scales: {
      x: {
        grid: {
          display: DISPLAY,
          drawBorder: BORDER,
          drawOnChartArea: CHART_AREA,
          drawTicks: TICKS,
        }
      },
      y: {
        grid: {
          drawBorder: false,
          color: function(context) {
            if (context.tick.value > 0) {
              return Utils.CHART_COLORS.green;
            } else if (context.tick.value < 0) {
              return Utils.CHART_COLORS.red;
            }

            return '#000000';
          },
        },
      }
    }
  },
};

module.exports = {
  actions: actions,
  config: config,
};
