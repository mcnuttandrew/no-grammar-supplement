Plot.plot({
  marks: [
    Plot.areaX(data, {
      x: 'value',
      y: 'date',
      order: 'value',
      fill: 'brand',
      fillOpacity: 0.5,
      curve: 'linear'
    })
  ],
  width: 802,
  marginLeft: 80,
  y: {reverse: true},
  height: 200
});
