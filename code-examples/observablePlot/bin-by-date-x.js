Plot.plot({
  marks: [
    Plot.rectY(
      data,
      Plot.binX(
        {y: 'count'},
        {
          x: 'date',
          y: 'price_in_usd',
          fill: 'blue',
          fillOpacity: 0.5,
          thresholds: 10
        }
      )
    )
  ],
  marginLeft: 100,
  width: 802,
  height: 300
});