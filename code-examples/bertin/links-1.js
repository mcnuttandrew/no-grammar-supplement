bertin.draw({
  params: {
    projection: d3.geoAzimuthalEquidistant().rotate([0, -90]).clipAngle(150)
  },
  layers: [
    {
      geojson: links,
      stroke: '#cf429d',
      strokeOpacity: 0.2
    },

    {geojson: world, fill: 'white', fillOpacity: 0.3, stroke: 'none'},
    {type: 'graticule'},
    {type: 'outline'}
  ]
});