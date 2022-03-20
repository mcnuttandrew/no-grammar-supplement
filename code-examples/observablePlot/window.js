Plot.plot({
  marks: [
    Plot.line(
      data,
      Plot.windowY(
        {reduce: 'mean', k: 7, anchor: 'middle'},
        Plot.binX({y: 'sum'}, {x: 'date', y: 'price_in_usd', thresholds: d3.utcDay})
      )
    )
  ],
  height: 100,
  width: 802
});
