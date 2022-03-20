Plot.plot({
  marks: [
    Plot.dot(data, {x: 'date', y: 'air_temp', fill: 'air_temp'}),
    Plot.ruleY([-10, 0, 10], {stroke: '#D3D3D3'})
  ],
  color: {
    type: 'threshold',
    domain: [-10, 0, 10],
    scheme: 'turbo',
    reverse: true,
    legend: true
  },
  width: 802
});
