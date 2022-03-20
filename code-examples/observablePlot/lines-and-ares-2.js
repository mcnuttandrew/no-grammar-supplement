Plot.plot({
  marks: [
    Plot.areaY(data, {
      x: 'date',
      y: 'value',
      order: 'value',
      fill: 'brand',
      fillOpacity: 0.5,
      curve: 'linear'
    })
  ],
  width: 802,
  height: 130,
  x: {ticks: 3},
  marginLeft: 50
});
