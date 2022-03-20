Plot.plot({
  marks: [
    Plot.barY(
      data,
      Plot.groupX(
        {y: 'count'},
        {
          x: 'brand',
          y: 'price_in_usd',
          sort: null,
          filter: null
        }
      )
    )
  ],
  height: 200,
  marginLeft: 50,
  width: 802
});
