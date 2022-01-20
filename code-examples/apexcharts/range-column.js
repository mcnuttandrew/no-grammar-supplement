var options = {
  series: [
    {
      data: [
        {
          x: 'Team A',
          y: [1, 5],
        },
        {
          x: 'Team B',
          y: [4, 6],
        },
        {
          x: 'Team C',
          y: [5, 8],
        },
        {
          x: 'Team D',
          y: [3, 11],
        },
      ],
    },
    {
      data: [
        {
          x: 'Team A',
          y: [2, 6],
        },
        {
          x: 'Team B',
          y: [1, 3],
        },
        {
          x: 'Team C',
          y: [7, 8],
        },
        {
          x: 'Team D',
          y: [5, 9],
        },
      ],
    },
  ],
  chart: {
    type: 'rangeBar',
    height: 350,
  },
  plotOptions: {
    bar: {
      horizontal: false,
    },
  },
  dataLabels: {
    enabled: true,
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
