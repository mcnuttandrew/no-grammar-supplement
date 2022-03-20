// Customize the plot of sales by date
Plot.plot({
  marks: [Plot.rectY(data, Plot.binX({y: 'sum'}, {x: 'date', y: 'value'}))],
  marginLeft: 50, // space to the left of the chart
  marginBottom: 50, // space below the chart
  insetBottom: 33, // space between the x-axis and the marks
  insetLeft: 29 // space between the y-axis and the marks
});
