Plot.plot({
  marks: [Plot.cell(data, {x: 'date', y: 'brand', fill: 'value'})],
  color: {scheme: 'blues', legend: true, reverse: false},
  marginLeft: 100,
  x: {tickFormat: null},
  width: 670
});
