// CHART CONFIG
// -----------------------------
let chartConfig = {
  type: 'hbar',
  theme: 'dark',
  title: {
    text: 'Average Temperatures',
    marginLeft: '20px'
  },
  legend: {
    align: 'left',
    backgroundColor: 'none',
    borderWidth: '0px',
    item: {
      cursor: 'hand',
      fontColor: '#E3E3E5'
    },
    marker: {
      type: 'circle',
      borderWidth: '0px',
      cursor: 'hand'
    },
    offsetY: '25px',
    verticalAlign: 'top'
  },
  plot: {
    tooltip: {
      text: '%data-city<br>High: %data-highs<br>Low: %data-lows'
    }
  },
  plotarea: {
    margin: '120px 50px 60px 85px'
  },
  scaleX: {
    label: {
      text: '2020',
      fontSize: '14px'
    },
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    zooming: true,
    zoomTo: [0, 5]
  },
  scaleY: {
    format: '%v°F',
    guide: {
      lineStyle: 'solid'
    },
    label: {
      text: 'Temperature',
      fontSize: '14px'
    }
  },
  shapes: [
    {
      type: 'rectangle',
      id: 'view_all',
      backgroundColor: '#5e5e5e',
      borderColor: '#E3E3E5',
      borderRadius: '3px',
      borderWidth: '1px',
      cursor: 'hand',
      height: '20px',
      label: {
        text: 'View All',
        bold: true,
        fontColor: '#E3E3E5',
        fontSize: '12px'
      },
      width: '75px',
      x: '89%',
      y: '7%'
    }
  ],
  series: [
    {
      text: 'New Orleans Average Temps 2020',
      values: [17, 17, 19, 18, 17, 15, 16, 16, 15, 17, 19, 17],
      dataCity: 'New Orleans',
      dataHighs: [62, 65, 72, 78, 85, 89, 91, 91, 87, 80, 72, 64],
      dataLows: [45, 48, 53, 60, 68, 74, 75, 75, 72, 63, 53, 47],
      offsetValues: [45, 48, 53, 60, 68, 74, 75, 75, 72, 63, 53, 47]
    },
    {
      text: 'San Diego Average Temps 2020',
      values: [16, 14, 13, 11, 10, 9, 10, 9, 9, 12, 15, 17],
      dataCity: 'San Diego',
      dataHighs: [65, 65, 66, 67, 69, 71, 75, 76, 76, 73, 69, 65],
      dataLows: [49, 51, 53, 56, 59, 62, 65, 67, 65, 61, 54, 48],
      offsetValues: [49, 51, 53, 56, 59, 62, 65, 67, 65, 61, 54, 48]
    },
    {
      text: 'Denver Average Temps 2020',
      values: [27, 27, 27, 27, 29, 30, 31, 31, 31, 29, 27, 27],
      dataCity: 'Denver',
      dataHighs: [45, 46, 54, 61, 72, 82, 90, 88, 79, 66, 52, 45],
      dataLows: [18, 19, 27, 34, 43, 52, 59, 57, 48, 37, 25, 18],
      offsetValues: [18, 19, 27, 34, 43, 52, 59, 57, 48, 37, 25, 18]
    }
  ],
  scrollX: {}
};

// EVENTS
// -----------------------------
zingchart.shape_click = (p) => {
  if (p.shapeid == 'view_all') {
    zingchart.exec(p.id, 'viewall');
  }
};

// RENDER CHARTS
// -----------------------------
zingchart.render({
  id: 'myChart',
  data: chartConfig,
  height: '100%',
  width: '100%'
});
