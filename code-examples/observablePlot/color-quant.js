Plot.plot({
  marks: [Plot.dot(data, {x: 'date', y: 'air_temp', fill: 'air_temp'})],
  color: {
    type: 'linear',
    scheme: 'turbo',
    legend: true,
    domain: [0, 30],
    range: [0, 1]
  },
  width: 802
});
