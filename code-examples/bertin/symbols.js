bertin.draw({
  params: {
    projection: d3.geoConicConformal().center([2.454071, 46.279229]),
    background: '#dbd1ca',
    margin: 20,
    extent: arrondissements
  },
  layers: [
    {
      type: 'header',
      text: 'Location of drinking fountains in Paris',
      background: color,
      fill: 'white',
      fontSize: 30,
      anchor: 'start'
    },
    {
      type: 'footer',
      text: 'Source: Paris Data, 2022'
    },

    {
      geojson: water,
      fill: color,
      symbol_size: size,
      symbol: symbol,
      symbol_shift: shift,
      tooltip: ['type_objet', 'voie', '']
    },
    {
      type: 'layer',
      geojson: arrondissements,
      fill: '#A5D1EC',
      stroke: 'white'
    },
    {
      type: 'scalebar'
    },
    {
      type: 'shadow',
      geojson: arrondissements
    }
  ]
});