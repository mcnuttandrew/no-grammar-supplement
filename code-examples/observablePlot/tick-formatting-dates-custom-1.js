Plot.plot({
  x: {
    tickFormat: d3.utcFormat('%A %B %d, %Y'),
    domain: [d3.utcYear.offset(d3.utcYear(), -2), d3.utcYear()],
    ticks: 3,
    nice: true
  },
  marginLeft: 100,
  marginRight: 100,
  width: 802
});