bertin.draw({
  params: {projection: d3.geoBertin1953()},
  layers: [
    {
      type: 'dotcartogram',
      geojson: data,
      onedot: onedot,
      iteration: iteration,
      values: 'gdp',
      radius: radius,
      span: span,
      leg_fill: 'none',
      leg_stroke: 'black',
      leg_strokeWidth: 1.5,
      leg_x: 800,
      leg_y: 450,
      leg_title: `GDP in billion`,
      fill: 'none',
      fill: {
        type: 'typo',
        values: 'region',
        leg_x: 700,
        leg_y: 400,
        leg_strokeWidth: 0.1
      },
      tooltip: ['name', 'region', '']
    },
    {
      geojson: data,
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