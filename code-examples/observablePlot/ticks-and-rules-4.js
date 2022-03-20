Plot.plot({
  marks: [
    Plot.dot(data, {
      x: 'date',
      y: 'value',
      stroke: 'brand',
      strokeOpacity: 0.4
    }),
    Plot.ruleY(data, Plot.groupZ({y: 'mean'}, {y: 'value', stroke: 'brand'})),
    Plot.text(
      data,
      Plot.groupZ(
        {y: 'mean', text: 'first', x: () => d3.max(data, (dd) => dd.date)},
        {
          y: 'value',
          x: 'date',
          fill: 'brand',
          text: 'brand',
          textAnchor: 'start',
          dx: 0
        }
      )
    )
  ],
  width: 670,
  height: 230,
  x: {ticks: 3},
  y: {type: 'log', label: 'Log total sales'},
  marginLeft: 50,
  marginRight: 100
});
