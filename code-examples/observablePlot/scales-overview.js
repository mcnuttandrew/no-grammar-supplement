Plot.plot({
  // Configure the x scale
  x: {
    type: 'log', // set the type
    axis: 'top' // place the axis on top of the chart
  },
  // Display dots for 100 random numbers
  marks: [
    Plot.dotX(
      d3.range(100).map((d) => Math.random() * 100 + 1),
      {strokeWidth: 0.5, fill: 'blue'}
    )
  ],
  height: 50,
  marginBottom: 10
});
