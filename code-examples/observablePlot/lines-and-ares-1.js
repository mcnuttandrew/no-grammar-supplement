Plot.plot({
  marks: [
    Plot.line(data, {
      x: 'date',
      y: 'value',
      stroke: 'brand',
      strokeWidth: 2,
      curve: 'linear'
    })
  ],
  width: 802,
  height: 130,
  x: {ticks: 3},
  marginLeft: 50,
  color: {
    legend: true,
    width: 802,
    columns: '120px'
  }
});
