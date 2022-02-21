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
      text: title2,
      fill: '#cf429d'
    },
    {
      geojson: links3,
      strokeWidth: {
        values: 'fij',
        k: k2,
        fixmax: d3.max(migr2019.map((d) => +d.fij)),
        leg_x: 20,
        leg_y: 20,
        leg_w: 110,
        leg_title: 'Number of people'
      },
      stroke: '#cf429d',
      strokeOpacity: 1,
      strokeLinecap: linecap,
      tooltip: [ij2 == 'Origin' ? 'j' : 'i', 'fij', '']
    },
    {geojson: mycountry2, fill: '#d9abc9', stroke: 'none'},
    {geojson: world, fill: 'white', fillOpacity: 0.3, stroke: 'none'},
    {type: 'graticule'},
    {type: 'outline'}
  ]
});