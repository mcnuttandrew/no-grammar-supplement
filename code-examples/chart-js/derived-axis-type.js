const DATA_COUNT = 12;
const NUMBER_CFG = {count: DATA_COUNT, min: 0, max: 1000};
const labels = Utils.months({count: DATA_COUNT});
const data = {
  labels: labels,
  datasets: [
    {
      label: 'My First dataset',
      data: Utils.numbers(NUMBER_CFG),
      borderColor: Utils.CHART_COLORS.red,
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      fill: false,
    }
  ],
};

const config = {
  type: 'line',
  data,
  options: {
    responsive: true,
    scales: {
      x: {
        display: true,
      },
      y: {
        display: true,
        type: 'log2',
      }
    }
  }
};


module.exports = {
  actions: [],
  config: config,
};
