var options = {
  series: [],
  chart: {
    height: 350,
    type: 'bar',
  },
  dataLabels: {
    enabled: false,
  },
  title: {
    text: 'Ajax Example',
  },
  noData: {
    text: 'Loading...',
  },
  xaxis: {
    type: 'category',
    tickPlacement: 'on',
    labels: {
      rotate: -45,
      rotateAlways: true,
    },
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()

$.getJSON('http://my-json-server.typicode.com/apexcharts/apexcharts.js/yearly', function (response) {
  chart.updateSeries([
    {
      name: 'Sales',
      data: response,
    },
  ])
})
