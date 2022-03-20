Plot.plot({
  marks: [
    Plot.arrow(wideData, {
      x1: 'startDate',
      x2: 'endDate',
      y1: 'startValue',
      y2: 'endValue',
      bend: true,
      stroke: 'brand'
    })
  ],
  width: 670,
  height: 130,
  x: {ticks: 3},
  marginLeft: 50,
  color: {
    legend: true,
    width: 670,
    columns: '120px'
  },
  marginTop: 30,
  height: 300,
  caption: 'Sales on the first and last day of the dataset'
});
