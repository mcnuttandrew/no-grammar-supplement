var options = {
  series: [70],
  chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      },
    },
  },
  labels: ['Cricket'],
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
