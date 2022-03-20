// Manually set the colors using the `range`
Plot.legend({
  color: {
    type: 'categorical',
    domain: d3.range(10).map((d) => `Category ${d + 1}`),
    range: ['green', 'purple', 'orange', 'yellow', 'blue', 'pink', 'brown', 'grey', 'green', 'lavender']
  }
});
