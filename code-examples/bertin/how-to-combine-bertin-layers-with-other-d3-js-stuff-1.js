// 1 - create a svg document

const svg = d3
  .create('svg')
  .attr('viewBox', [0, 0, width, 500])
  .style('width', '100%')
  .style('height', 'auto');

// 2 - Define a projection

const projection = d3.geoCylindricalEqualArea();

// 3 - Add layers

bertin.outline(svg, projection, {});

bertin.graticule(svg, projection, {});

bertin.simple(svg, projection, {
  geojson: data,
  fill: {
    type: 'choro',
    values: 'gdppc',
    leg_x: 30,
    leg_y: 185,
    leg_round: -1,
    leg_title: 'Wealth'
  },
  tooltip: ['NAMEen', 'gdppc', '']
});

bertin.bubble(svg, projection, {
  geojson: data,
  values: 'pop',
  fill: 'none',
  stroke: 'black',
  strokeWidth: 0.7,
  leg_x: 30,
  leg_y: 330,
  leg_title: 'Population',
  leg_round: -2
});

// 4 - create an empty group for tooltip

svg.append('g').attr('id', 'info').attr('class', 'info');

// 5 - return the document
return svg.node();