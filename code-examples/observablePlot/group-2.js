Plot.plot({
  marks: [Plot.barX(data, Plot.groupY({x: 'count'}, {x: 'price_in_usd', y: 'brand'}))],
  height: 200,
  marginLeft: 100,
  width: 802
});
