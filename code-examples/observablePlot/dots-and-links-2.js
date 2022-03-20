Plot.plot({
  marks: [
    // Values based on a linear regression below
    Plot.link(
      {length: 1},
      {
        x1: 0,
        x2: 450,
        y1: -31,
        y2: 9185
      }
    ),
    Plot.dot(data, {
      x: 'count',
      y: 'value',
      fill: (d) => (d.value > d.count * 20.48 + -31 ? true : false),
      fillOpacity: 0.4
    })
  ],
  width: 802,
  height: 200,
  color: {
    domain: [true, false],
    range: ['red', 'blue']
  }
});
