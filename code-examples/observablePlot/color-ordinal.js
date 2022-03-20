Plot.plot({
  marks: [Plot.dot(data, {x: 'date', y: 'air_temp', fill: 'tempBin'})],
  color: {
    domain: domain,
    scheme: 'blues',
    legend: true,
    tickFormat: (d) => d + '°c'
  },
  width: 802
});
