Plot.plot({
  marks: [
    Plot.barX(
      data,
      Plot.groupY({x: 'sum'}, {x: 'value', y: (d) => d3.utcFormat('%a')(d.date), stroke: 'brand'})
    )
  ],
  width: 802,
  height: 130,
  marginLeft: 50,
  y: {domain: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']}
});
