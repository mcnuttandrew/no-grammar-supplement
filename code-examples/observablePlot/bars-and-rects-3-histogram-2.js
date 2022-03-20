Plot.plot({
  marks: [
    Plot.rectX(
      data,
      Plot.binY(
        {x: 'sum'},
        {
          x: 'value',
          y: 'date',
          fill: 'blue',
          fillOpacity: 0.5,
          thresholds: 10
        }
      )
    )
  ],
  marginLeft: 100,
  width: 802,
  y: {reverse: true},
  height: 200
});
