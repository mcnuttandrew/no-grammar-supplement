Plot.plot({
  marks: [
    Plot.textX(
      data,
      Plot.groupY(
        {x: 'sum', text: 'first'},
        {
          x: 'value',
          y: 'brand',
          text: 'brand',
          textAnchor: 'start',
          fill: 'brand'
        }
      )
    ),
    Plot.barX(
      data,
      Plot.groupY(
        {x: 'sum', text: 'first'},
        {
          x: 'value',
          y: 'brand',
          text: 'brand',
          textAnchor: 'start',
          fill: 'brand'
        }
      )
    )
  ],
  marginRight: 50,
  marginLeft: 10,
  width: 670,
  y: {
    label: null,
    tickFormat: null,
    tickSize: 0
  }
});
