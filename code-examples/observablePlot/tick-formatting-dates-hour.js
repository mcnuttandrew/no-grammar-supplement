Plot.plot({
  x: {
    tickFormat: d3.utcFormat('%H:%M'),
    domain: [d3.utcHour.offset(d3.utcHour(), -12), d3.utcHour()]
  },
  width: 802
});