Plot.plot({
  marks: [Plot.dot(data, {x: 'date', y: 'air_temp', fill: 'air_temp'}), Plot.ruleY([0], {stroke: '#d3d3d3'})],
  color: {
    type: 'diverging',
    scheme: 'brbg',
    legend: true,
    pivot: 0,
    symmetric: true
  },
  width: 802
});
