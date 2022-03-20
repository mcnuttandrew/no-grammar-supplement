Plot.plot({
  marks: [
    Plot.barY(
      data,
      Plot.groupX({y: 'sum'}, {x: (d) => d3.utcFormat('%a')(d.date), y: 'value', stroke: 'brand'})
    )
  ],
  width: 802,
  height: 130,
  x: {ticks: 3, domain: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']},
  marginLeft: 50,
  color: {
    legend: true,
    width: 802,
    columns: '120px'
  }
});
