// Plot the total number of sales by brand
Plot.plot({
  marks: [
    // Draw vertical bars
    Plot.barY(
      data,
      // Group data into categories along the x axis
      Plot.groupX(
        {y: 'count'}, // compute + display the count of observations in each group
        {
          x: 'brand',
          filter: (d) => d.brand !== 'Google',
          sort: {x: 'y', reverse: true}
        } // group observations by the `brand`
      )
    )
  ],
  y: {
    label: '↑ Count of sales by brand'
  },
  marginLeft: 60
});
