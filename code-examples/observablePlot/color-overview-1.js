// Use a scheme to choose the colors
Plot.legend({
  color: {
    type: 'categorical',
    domain: d3.range(10).map((d) => `Category ${d + 1}`),
    scheme: 'accent' // use the "accent" scheme
  }
});
