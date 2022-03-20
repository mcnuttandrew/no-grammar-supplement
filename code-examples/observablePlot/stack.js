Plot.plot({
  marks: [
    Plot.areaY(
      data,
      Plot.binX(
        {y: 'mean'},
        {
          x: 'date',
          y: 'price_in_usd',
          thresholds: d3.utcWeek,
          order: null,
          fill: 'brand',
          offset: null
        }
      )
    )
  ],
  height: 100,
  width: 802,
  color: {legend: true}
});
