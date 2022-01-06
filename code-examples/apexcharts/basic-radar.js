var options = {
  series: [
    {
      name: 'Series 1',
      data: [80, 50, 30, 40, 100, 20],
    },
  ],
  chart: {
    height: 350,
    type: 'radar',
  },
  title: {
    text: 'Basic Radar Chart',
  },
  xaxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June'],
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
