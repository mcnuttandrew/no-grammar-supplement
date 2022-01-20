var options = {
  series: data,
  chart: {
    height: 450,
    type: 'heatmap',
  },
  dataLabels: {
    enabled: false,
  },
  colors: colors,
  xaxis: {
    type: 'category',
    categories: ['10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '01:00', '01:30'],
  },
  title: {
    text: 'HeatMap Chart (Different color shades for each series)',
  },
  grid: {
    padding: {
      right: 20,
    },
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
