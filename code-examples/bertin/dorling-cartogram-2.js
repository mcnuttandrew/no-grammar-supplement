bertin.draw({
  params: {projection: d3.geoBertin1953()},
  layers: [
    {type: 'header', text: 'Cities with more than one million inhabitants'},
    {
      type: 'bubble',
      geojson: dots,
      values: 'population',
      k: 10,
      dorling: true,
      fill: '#5c7db8',
      leg_x: 680,
      leg_y: 410,
      leg_fontSize2: 7,
      leg_title: `Number of inhabitants
in the world's largest cities`,
      tooltip: ['city', 'population', 'inh.'],
      leg_round: -2
    },

    {
      type: 'layer',
      geojson: countries,
      fill: 'white',
      fillOpacity: 0.3,
      stroke: 'none'
    },
    {type: 'graticule'},
    {type: 'outline'}
  ]
});