const DATA_COUNT = 5;
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
  {
    name: 'Toggle Doughnut View',
    handler(chart) {
      if (chart.options.cutout) {
        chart.options.cutout = 0;
      } else {
        chart.options.cutout = '50%';
      }
      chart.update();
    }
  }
];

function generateData() {
  return Utils.numbers({
    count: DATA_COUNT,
    min: -100,
    max: 100
  });
}

const data = {
  datasets: [{
    data: generateData()
  }]
};

function colorize(opaque, hover, ctx) {
  const v = ctx.parsed;
  const c = v < -50 ? '#D60000'
    : v < 0 ? '#F46300'
    : v < 50 ? '#0358B6'
    : '#44DE28';

  const opacity = hover ? 1 - Math.abs(v / 150) - 0.2 : 1 - Math.abs(v / 150);

  return opaque ? c : Utils.transparentize(c, opacity);
}

function hoverColorize(ctx) {
  return colorize(false, true, ctx);
}

const config = {
  type: 'pie',
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
