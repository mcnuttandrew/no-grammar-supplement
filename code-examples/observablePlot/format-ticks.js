Plot.plot({
  marks: [Plot.dot([{value: 0.1}, {value: 0.25}, {value: 0.3}, {value: 0.42}], {x: 'value'})],
  x: {
    tickRotate: -45,
    ticks: 5,
    tickSize: 5,
    line: true,
    tickPadding: 10,
    labelAnchor: 'left',
    labelOffset: 0,
    nice: true,
    label: 'My label'
  },
  height: 200,
  width: 802,
  marginBottom: 100
});
