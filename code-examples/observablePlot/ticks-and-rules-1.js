Plot.plot({
  marks: [
    Plot.tickX(data, {
      x: 'date',
      y: 'brand',
      stroke: 'brand',
      strokeWidth: 0.5
    })
  ],
  width: 670,
  height: 200,
  marginLeft: 100,
  y: {reverse: true}
});
