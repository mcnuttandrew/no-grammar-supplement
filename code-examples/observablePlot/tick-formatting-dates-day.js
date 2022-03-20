Plot.plot({
  x: {
    tickFormat: d3.utcFormat('%a'),
    domain: [d3.utcDay.offset(d3.utcDay(), -7), d3.utcDay()]
  },
  width: 802
});