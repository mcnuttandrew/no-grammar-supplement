bertin.draw({
  params: {projection: d3.geoPolyhedralWaterman()},
  layers: [
    {
      type: 'bubble',
      geojson: data,
      leg_round: -2,
      k: k,
      values: 'pop',
      fill: {
        type: 'choro',
        method: method,
        nbreaks: nbreaks,
        values: 'gdppc',
        pal: pal,
        leg_title: 'GDP per capital\n(in $)',
        leg_x: 100,
        leg_y: 270,
        leg_round: -2
      },
      tooltip: ['name', 'gdppc', '(current US$)'],
      leg_title: `Number of inh.`,
      leg_x: 800,
      leg_y: 270
    },
    {
      type: 'layer',
      geojson: data,
      stroke: 'none',
      fill: 'white',
      fillOpacity: 0.5
    },
    {type: 'graticule'},
    {type: 'outline'}
  ]
});