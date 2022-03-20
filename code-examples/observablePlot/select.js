Plot.plot({
  marks: [
    Plot.line(
      data,
      Plot.windowY(
        {reduce: 'mean', k: 7, anchor: 'middle'},
        Plot.binX({y: 'sum'}, {x: 'date', y: 'price_in_usd', thresholds: d3.utcDay})
      )
    ),
    Plot.dot(
      data,
      Plot.selectMaxY(
        Plot.windowY(
          {reduce: 'mean', k: 7, anchor: 'middle'},
          Plot.binX({y: 'sum'}, {x: 'date', y: 'price_in_usd', thresholds: d3.utcDay})
        )
      )
    ),
    Plot.text(
      data,
      Plot.selectMaxY(
        Plot.windowY(
          {reduce: 'mean', k: 7, anchor: 'middle'},
          Plot.binX(
            {y: 'sum', text: 'first'},
            {
              x: 'date',
              y: 'price_in_usd',
              thresholds: d3.utcDay,
              text: (d) => `Peak sales: ${d3.utcFormat('%b %d')(d.date)}`,
              textAnchor: 'middle',
              dy: -5
            }
          )
        )
      )
    )
  ],
  width: 802
});
