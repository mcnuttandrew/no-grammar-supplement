Plot.plot({
  marks: [
    Plot.dot(data, {
      x: 'date',
      y: 'value',
      fill: 'brand',
      stroke: '#544f4f',
      strokeWidth: 1
    })
  ],
  width: 802,
  height: 130,
  x: {ticks: 3},
  marginLeft: 50
});
