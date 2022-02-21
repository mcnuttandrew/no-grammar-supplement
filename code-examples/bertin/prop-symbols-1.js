bertin.draw({
  params: {projection: d3.geoBromley()},
  layers: [
    {
      type: 'bubble',
      geojson: data,
      values: 'pop',
      k: k,
      fill: '#e368c0',
      tooltip: ['country', 'pop', '(inh.)'],
      leg_round: 0,
      leg_x: 100,
      leg_y: 170,
      leg_round: -1,
      leg_title: 'World Population\nin 2018 (inh.)'
    },
    {
      type: 'missing',
      geojson: data,
      values: 'pop',
      leg_x: 500,
      leg_y: 320
    },
    {
      type: 'layer',
      geojson: countries,
      fill: '#f5d482',
      leg_x: 600,
      leg_y: 320,
      leg_text: 'Countries'
    },
    {type: 'graticule'},
    {type: 'outline'}
  ]
});