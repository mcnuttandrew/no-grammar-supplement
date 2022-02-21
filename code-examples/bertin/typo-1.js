bertin.draw({
  params: {
    projection: d3.geoInterruptedHomolosine()
  },
  layers: [
    {
      type: 'layer',
      geojson: data,
      tooltip: ['region', 'NAMEen', ''],
      fill: {
        type: 'typo',
        values: 'region',
        strokeWidth: 0.3,
        pal: 'Tableau10',
        tooltip: ['region', 'name', ''],
        leg_title: `The
        Continents`,
        leg_x: 55,
        leg_y: 180
      }
    },
    {
      type: 'shadow',
      geojson: geom,
      opacity: 0.2
    },
    {type: 'graticule'},
    {type: 'outline'}
  ]
});