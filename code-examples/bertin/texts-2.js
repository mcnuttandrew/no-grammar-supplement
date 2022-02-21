bertin.draw({
  layers: [
    {
      type: 'label',
      geojson: subregions,
      values: 'label',
      fontWeight: 'bold',
      fontSize: 12
    },
    {
      type: 'layer',
      geojson: subregions,
      fill: '#89cdd6'
    }
  ]
});