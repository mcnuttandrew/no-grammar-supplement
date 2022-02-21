bertin.draw({
  params: {projection: d3.geoBertin1953()},
  layers: [
    {
      type: 'bubble',
      geojson: dots,
      values: 'population',
      k: 17,
      tooltip: ['city', 'country', ''],
      fill: '#5c7db8',
      leg_x: 680,
      leg_y: 410,
      leg_fontSize2: 7,
      leg_title: `Number of inhabitants
in the world's largest cities`
    },

    {
      type: 'layer',
      geojson: countries,
      fill: 'white',
      fillOpacity: 0.5,
      stroke: 'none'
    },
    {type: 'graticule'},
    {type: 'outline'}
  ]
});