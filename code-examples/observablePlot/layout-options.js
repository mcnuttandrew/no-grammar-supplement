Plot.plot({
  marks: [Plot.rectY(data, Plot.binX({y: 'sum'}, {x: 'date', y: 'value'})), Plot.frame({stroke: '#d3d3d3'})],
  height: 400,
  width: 702,
  marginLeft: 50,
  marginRight: 50,
  marginTop: 50,
  marginBottom: 50,
  insetTop: 0,
  insetBottom: 0,
  insetLeft: 0,
  insetRight: 0
});
