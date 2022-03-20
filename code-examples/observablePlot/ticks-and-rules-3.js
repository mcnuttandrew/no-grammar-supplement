Plot.plot({
  marks: [
    Plot.dot(data, {x: 'value', fill: 'brand', fillOpacity: 0.3}),
    Plot.ruleX(data, Plot.groupZ({x: 'mean'}, {x: 'value', stroke: 'brand'}))
  ],
  width: 670,
  height: 150,
  facet: {
    data,
    y: 'brand',
    marginLeft: 100
  },
  fy: {
    axis: 'left'
  },
  marginRight: 100
});
