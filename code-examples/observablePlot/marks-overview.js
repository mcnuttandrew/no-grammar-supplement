
// Create a plot
Plot.plot({
  // Pass in an array of desired marks
  marks: [
    // Create a line mark
    Plot.line(data, {
      x: 'date', // feature for the x channel
      y: 'value', // feature for the y channel
      stroke: 'brand' // feature for the stroke
    }),

    // Create a dot mark
    Plot.dot(data, {
      x: 'date', // feature for the x channel
      y: 'value', // feature for the y channel
      fill: 'brand' // feature for the stroke
    }),

    // Display a horizontal line at y = 0
    Plot.ruleY([0])
  ],

  // Include a legend for the color channel
  color: {
    legend: true
  }
});
