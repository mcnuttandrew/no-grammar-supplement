Plot.plot({
  marks: [
    Plot.rectX(
      data,
      Plot.binY(
        {x: 'count'},
        {
          x: 'price_in_usd',
          y: 'date',
          fill: 'brand',
          fillOpacity: 0.5,
          thresholds: d3.utcDay
        }
      )
    )
  ],
  marginLeft: 100,
  width: 802,
  y: {reverse: true},
  color: {
    legend: true
  }
});
