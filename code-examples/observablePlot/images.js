Plot.plot({
  marks: [
    Plot.image(imageData, {
      x: 'value',
      y: 'brand',
      src: 'imgUrl',
      height: 40
    }),
    Plot.bar
  ],
  marginLeft: 100,
  height: 200,
  insetLeft: 30,
  width: 670
});
