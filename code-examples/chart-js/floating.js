const actions = [
  {
    name: 'Randomize',
    handler(chart) {
      chart.data.datasets.forEach(dataset => {
        dataset.data = chart.data.labels.map(() => {
          return [Utils.rand(-100, 100), Utils.rand(-100, 100)];
        });
      });
      chart.update();
    }
  },
];

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = Utils.months({count: 7});
const data = {
  labels: labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => {
        return [Utils.rand(-100, 100), Utils.rand(-100, 100)];
      }),
      backgroundColor: Utils.CHART_COLORS.red,
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => {
        return [Utils.rand(-100, 100), Utils.rand(-100, 100)];
      }),
      backgroundColor: Utils.CHART_COLORS.blue,
    },
  ]
};

const config = {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Floating Bar Chart'
      }
    }
  }
};

module.exports = {
  actions: actions,
  config: config,
};
