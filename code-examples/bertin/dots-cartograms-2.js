bertin.draw({
  params: {projection: d3.geoBertin1953()},
  layers: [
    {type: 'header', text: 'World Population in 2022'},
    {
      type: 'dotcartogram',
      geojson: data2,
      values: 'pop2020',
      onedot: onedot2 * 1000000,
      span: span2,
      fill: '#0e0f2e',
      radius: radius2,
      leg_title: `Population in 2020`,
      leg_txt: `${onedot2} million inh.`,
      leg_x: 700,
      leg_y: 450
    },
    {
      geojson: geom,
      fillOpacity: 0.35,
      fill: 'white',
      stroke: 'none'
    },
    {
      type: 'graticule'
    },
    {
      type: 'outline'
    }
  ]
});