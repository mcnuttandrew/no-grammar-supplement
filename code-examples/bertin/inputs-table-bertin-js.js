bertin.draw({
  params: {
    extent: selection,
    margin: margin,
    background: '#bde1f0'
  },
  layers: [
    {
      type: 'layer',
      geojson: selection,
      fill: '#de4960',
      tooltip: ['ISO3', 'NAMEen', '']
    },
    {type: 'shadow', geojson: selection, dx: 5, dy: 5},
    {type: 'layer', geojson: countries, fill: '#e0d0b6'},
    {type: 'scalebar'}
  ]
});
