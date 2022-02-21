bertin.draw({
  layers: [
    {
      type: 'header',
      text: `Amazing title
of this wonderful map`
    },
    {
      type: 'footer',
      text: `Nicolas Lambert, 2022
Made with Bertin.js`
    },
    {
      type: 'text',
      position: [15, 415],
      text: `Lorem ipsum dolor sit amet,
consectetu adipiscing elit, sed do
eiusmod tempor incididunt ut labore et
dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco`
    },
    {
      type: 'text',
      text: 'topleft',
      position: 'topleft',
      fontSize: 20,
      frame_stroke: 'red',
      margin: 4
    },
    {
      type: 'text',
      text: 'top',
      position: 'top',
      fontSize: 20,
      frame_stroke: 'red',
      margin: 4
    },
    {
      type: 'text',
      text: 'topright',
      position: 'topright',
      fontSize: 20,
      frame_stroke: 'red',
      margin: 4
    },
    {
      type: 'text',
      text: 'left',
      position: 'left',
      fontSize: 20,
      frame_stroke: 'red',
      margin: 4
    },
    {
      type: 'text',
      text: 'middle',
      position: 'middle',
      fontSize: 40,
      frame_stroke: 'red',
      margin: 4
    },
    {
      type: 'text',
      text: `Here
a text
positioned
on the right
on several
lines`,
      position: 'right',
      fontSize: 20,
      frame_stroke: 'red',
      margin: 4
    },
    {
      type: 'text',
      text: 'bottomleft',
      position: 'bottomleft',
      fontSize: 20,
      frame_stroke: 'red',
      margin: 4
    },
    {
      type: 'text',
      text: 'bottom',
      position: 'bottom',
      fontSize: 20,
      frame_stroke: 'red',
      margin: 4
    },
    {
      type: 'text',
      text: 'bottomright',
      position: 'bottomright',
      fontSize: 20,
      frame_stroke: 'red',
      margin: 4
    },
    {
      type: 'graticule',
      step: [0, 90],
      stroke: '#89cdd6',
      strokeWidth: 4,
      strokeDasharray: 'none'
    },
    {
      type: 'layer',
      geojson: subregions,
      fill: '#89cdd6',
      stroke: 'none'
    },

    {type: 'outline', fill: '#90d5de'}
  ]
});