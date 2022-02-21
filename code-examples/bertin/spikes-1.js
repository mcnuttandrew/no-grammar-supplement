bertin.draw({
  params: {projection: d3.geoCylindricalEqualArea()},
  layers: [
    {
      type: 'text',
      position: 'bottomleft',
      text: `world's largest cities
population > ${threshold / 1000000} million inh.`,
      margin: 10,
      frame_fill: '#a31d88',
      fontFamily: 'Rubik',
      fill: 'white',
      fontSize: 20,
      fontWeight: 'bold'
    },
    {
      type: 'spikes',
      geojson: spikes,
      values: 'population',
      fillOpacity: 0.2,
      k: k,
      w: w,
      leg_x: 80,
      leg_y: 200,
      leg_fontSize2: 7,
      leg_round: -2,
      leg_title: `Number of
inhabitants`,
      tooltip: ['admin_name', 'population', 'inh.']
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