Plot.plot({
  x: {
    tickFormat: d3.utcFormat('%Y'),
    domain: [d3.utcYear.offset(d3.utcYear(), -12), d3.utcYear()]
  },
  width: 802
});