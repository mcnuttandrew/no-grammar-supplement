bertin.draw({
  params: {
    projection: d3.geoBertin1953()
  },
  layers: [
    {
      type: 'bubble',
      geojson: data,
      values: 'pop',
      k: k,
      dorling: true,
      iteration: 100,
      fill: '#E95B40',
      tooltip: ['country', 'pop', '(inh.)'],
      leg_x: 720,
      leg_y: 420,
      leg_title: 'World Population\nin 2018 (inh.)',
      leg_fill: '#E95B40',
      leg_round: -1
    },
    {
      type: 'layer',
      geojson: countries,
      fill: 'white',
      fillOpacity: hide ? 0.01 : 0.3,
      stroke: 'none'
    },
    {type: 'graticule'},
    {type: 'outline', fillOpacity: hide ? 0.01 : 1}
  ]
});