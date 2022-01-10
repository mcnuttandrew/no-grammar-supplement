var options = {
  series: [44, 55, 41, 17, 15],
  chart: {
    width: 380,
    type: 'donut',
    dropShadow: {
      enabled: true,
      color: '#111',
      top: -1,
      left: 3,
      blur: 3,
      opacity: 0.2,
    },
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    pie: {
      donut: {
        labels: {
          show: true,
          total: {
            showAlways: true,
            show: true,
          },
        },
      },
    },
  },
  labels: ['Comedy', 'Action', 'SciFi', 'Drama', 'Horror'],
  dataLabels: {
    dropShadow: {
      blur: 3,
      opacity: 0.8,
    },
  },
  fill: {
    type: 'pattern',
    opacity: 1,
    pattern: {
      enabled: true,
      style: ['verticalLines', 'squares', 'horizontalLines', 'circles', 'slantedLines'],
    },
  },
  states: {
    hover: {
      filter: 'none',
    },
  },
  theme: {
    palette: 'palette2',
  },
  title: {
    text: 'Favourite Movie Type',
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: 'bottom',
        },
      },
    },
  ],
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
