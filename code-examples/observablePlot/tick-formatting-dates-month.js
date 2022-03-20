Plot.plot({
  x: {
    tickFormat: d3.utcFormat('%b'),
    domain: [d3.utcMonth.offset(d3.utcMonth(), -12), d3.utcMonth()]
  },
  width: 802
});