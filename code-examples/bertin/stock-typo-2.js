bertin.draw({
  params: {
    projection: d3.geoInterruptedMollweideHemispheres()
  },
  layers: [
    {
      type: 'bubble',
      geojson: data,
      k: k,
      leg_round: -2,
      values: 'pop',
      leg_x: 100,
      leg_y: 300,
      leg_title: 'Population',
      tooltip: ['name', 'region', ''],
      fill: 'none',
      strokeWidth: 2.5,
      stroke: {
        type: 'typo',
        values: 'region',
        leg_title: `The
Continents`,
        leg_x: 100,
        leg_y: 100
      }
    },
    {
      type: 'layer',
      geojson: geom,
      fillOpacity: 0.35,
      fill: 'white',
      stroke: 'none'
    },
    {type: 'graticule'},
    {type: 'outline'}
  ]
});