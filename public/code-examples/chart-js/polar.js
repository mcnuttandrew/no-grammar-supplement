const DATA_COUNT = 7;
Utils.srand(110);

const actions = [
  {
    name: 'Randomize',
    handler(chart) {
      chart.data.datasets.forEach(dataset => {
        dataset.data = generateData();
      });
      chart.update();
    }
  },
];

function generateData() {
  return Utils.numbers({
    count: DATA_COUNT,
    min: 0,
    max: 100
  });
}

const data = {
  labels: Utils.months({count: DATA_COUNT}),
  datasets: [{
    data: generateData()
  }]
};

function colorize(opaque, hover, ctx) {
  const v = ctx.raw;
  const c = v < 35 ? '#D60000'
    : v < 55 ? '#F46300'
    : v < 75 ? '#0358B6'
    : '#44DE28';

  const opacity = hover ? 1 - Math.abs(v / 150) - 0.2 : 1 - Math.abs(v / 150);

  return opaque ? c : Utils.transparentize(c, opacity);
}

function hoverColorize(ctx) {
  return colorize(false, true, ctx);
}

const config = {
  type: 'polarArea',
  data: data,
  options: {
    plugins: {
      legend: false,
      tooltip: false,
    },
    elements: {
      arc: {
        backgroundColor: colorize.bind(null, false, false),
        hoverBackgroundColor: hoverColorize
      }
    }
  }
};

module.exports = {
  actions,
  config,
};
