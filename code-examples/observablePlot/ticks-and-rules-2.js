Plot.plot({
  marks: [
    Plot.tickY(data, {
      x: 'brand',
      y: 'date',
      stroke: 'brand',
      strokeWidth: 0.5
    })
  ],
  width: 670,
  height: 200,
  marginLeft: 100,
  y: {reverse: true}
});
