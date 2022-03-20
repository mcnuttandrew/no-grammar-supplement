Plot.plot({
  marks: [
    Plot.rectY(
      data,
      Plot.binX(
        {y: 'count'},
        {
          x: 'date',
          y: 'value',
          fill: 'blue',
          fillOpacity: 0.5,
          thresholds: 10
        }
      )
    )
  ],
  marginLeft: 100,
  height: 200,
  width: 802
});
