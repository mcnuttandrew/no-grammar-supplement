Plot.plot({
  marks: [
    Plot.line(
      data,
      Plot.normalizeY(
        'first',
        Plot.binX(
          {y: 'sum'},
          {
            x: 'date',
            y: 'price_in_usd',
            stroke: 'brand',
            sort: 'date',
            thresholds: d3.utcDay
          }
        )
      )
    )
  ],
  y: {
    label: 'Price normalized by first value'
  },
  height: 200,
  width: 802,
  color: {legend: true}
});
