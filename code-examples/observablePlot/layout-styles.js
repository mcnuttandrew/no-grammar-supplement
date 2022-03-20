Plot.plot({
  marks: [Plot.rectY(data, Plot.binX({y: 'sum'}, {x: 'date', y: 'value'}))],
  style: {
    backgroundColor: '#7e9a9a',
    color: '#e0f5ee',
    fontFamily: 'system-ui',
    fontSize: 9,
    overflow: 'visible'
  },
  width: 802,
  margin: 50
});
