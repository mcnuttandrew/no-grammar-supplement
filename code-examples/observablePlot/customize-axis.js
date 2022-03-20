Plot.plot({
  marks: [Plot.dot([{value: 0.1}, {value: 0.25}, {value: 0.3}, {value: 0.42}], {x: 'value'})],
  x: {
    axis: 'top',
    grid: true,
    percent: true,
    reverse: true,
    zero: false,
    inset: 75,
    domain: [1, 30]
  },
  width: 802
});
