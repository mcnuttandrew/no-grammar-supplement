Plot.plot({
  x: {
    padding: 0.1,
    align: 0.5,
    type: 'band',
    domain: [...'ABCDEFGHIJ']
  },
  marks: [
    Plot.cell([...'ABCDEFGHIJ'], {
      x: (d) => d,
      fill: 'none',
      stroke: 'currentColor'
    })
  ],
  grid: true,
  width: 802
});