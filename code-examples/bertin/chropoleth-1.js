bertin.draw({
  params: {projection: d3.geoEckert3()},
  layers: [
    {
      type: 'layer',
      geojson: bertin.merge(world, 'ISO3', data, 'id'),
      fill: {
        type: 'choro',
        values: 'gdppc',
        nbreaks: nbreaks,
        method: method,
        pal: pal,
        leg_round: -1,
        leg_title: `GDP per inh
(in $)`,
        leg_x: 100,
        leg_y: 200
      },

      tooltip: ['name', 'gdppc', '(current US$)']
    },
    {type: 'graticule'},
    {type: 'outline'}
  ]
});