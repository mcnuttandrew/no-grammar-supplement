bertin.draw({
  params: {
    extent: africa,
    margin: 30,
    background: '#bde1f0'
  },
  layers: [
    {
      type: 'header',
      text: `Unequal distribution of wealth in Africa`,
      fontSize: 36
    },
    {
      type: 'mushroom',
      geojson: final,
      top_values: 'gdp_pct',
      bottom_values: 'pop_pct',
      k: k,
      bottom_tooltip: ['name', 'pop', '(thousands inh.)'],
      top_tooltip: ['name', 'gdp', '(million $)'],
      leg_x: 150,
      leg_y: 500,
      leg_title: 'Wealth and population, 2021',
      leg_top_fill: 'none',
      leg_bottom_fill: 'none',
      leg_top_txt: 'GDP (%)',
      leg_bottom_txt: 'Inhabitants (%)',
      leg_fontSize: 17
    },
    {
      type: 'text',
      position: [150, 705],
      baseline: 'hanging',
      fontSize: 9,
      text: `GDP and population data are from the World Bank.
To make them comparable, the data has been converted
to a percentage of total African countries. `
    },
    {type: 'layer', geojson: africa, fill: '#f5d482'},
    {type: 'shadow', geojson: africa, dx: 5, dy: 5},
    {type: 'layer', geojson: world, fill: '#e0d0b6'},
    {type: 'scalebar'}
  ]
});