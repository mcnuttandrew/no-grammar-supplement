const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100, rmin: 1, rmax: 20};
const data = {
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      borderColor: Utils.CHART_COLORS.blue,
      borderWidth: 1,
      boxStrokeStyle: 'red',
      data: Utils.bubbles(NUMBER_CFG)
    }
  ],
};

const config = {
  type: 'derivedBubble',
  data: data,
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Derived Chart Type'
      },
    }
  }
};


module.exports = {
  actions: [],
  config: config,
};
