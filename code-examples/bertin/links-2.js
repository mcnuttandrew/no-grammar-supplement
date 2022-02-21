bertin.draw({
  params: {
    projection: d3.geoAzimuthalEquidistant().rotate([0, -90]).clipAngle(150)
  },
  layers: [
    {
      type: 'text',
      position: 'top',
      fontSize: 30,
      fontFamily: 'Ubuntu',
      textDecoration: 'underline',
      text: title,
      fill: '#cf429d'
    },
    {
      geojson: links2,
      strokeWidth: k,
      stroke: '#cf429d',
      strokeOpacity: 1
    },

    {geojson: mycountry, fill: '#d9abc9', stroke: 'none'},
    {geojson: world, fill: 'white', fillOpacity: 0.3, stroke: 'none'},
    {type: 'graticule'},
    {type: 'outline'}
  ]
});