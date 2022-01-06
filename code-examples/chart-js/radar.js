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
  labels: [['Eating', 'Dinner'], ['Drinking', 'Water'], 'Sleeping', ['Designing', 'Graphics'], 'Coding', 'Cycling', 'Running'],
  datasets: [{
    data: generateData()
  }]
};

function getLineColor(ctx) {
  return Utils.color(ctx.datasetIndex);
}

function alternatePointStyles(ctx) {
  const index = ctx.dataIndex;
  return index % 2 === 0 ? 'circle' : 'rect';
}

function makeHalfAsOpaque(ctx) {
  return Utils.transparentize(getLineColor(ctx));
}

function make20PercentOpaque(ctx) {
  return Utils.transparentize(getLineColor(ctx), 0.8);
}

function adjustRadiusBasedOnData(ctx) {
  const v = ctx.parsed.y;
  return v < 10 ? 5
    : v < 25 ? 7
    : v < 50 ? 9
    : v < 75 ? 11
    : 15;
}

const config = {
  type: 'radar',
  data: data,
  options: {
    plugins: {
      legend: false,
      tooltip: false,
    },
    elements: {
      line: {
        backgroundColor: make20PercentOpaque,
        borderColor: getLineColor,
      },
      point: {
        backgroundColor: getLineColor,
        hoverBackgroundColor: makeHalfAsOpaque,
        radius: adjustRadiusBasedOnData,
        pointStyle: alternatePointStyles,
        hoverRadius: 15,
      }
    }
  }
};

module.exports = {
  actions,
  config,
};
