var options = {
  series: [
    {
      data: [
        {
          x: 'Category A',
          y: [54, 66, 69, 75, 88],
        },
        {
          x: 'Category B',
          y: [43, 65, 69, 76, 81],
        },
        {
          x: 'Category C',
          y: [31, 39, 45, 51, 59],
        },
        {
          x: 'Category D',
          y: [39, 46, 55, 65, 71],
        },
        {
          x: 'Category E',
          y: [29, 31, 35, 39, 44],
        },
        {
          x: 'Category F',
          y: [41, 49, 58, 61, 67],
        },
        {
          x: 'Category G',
          y: [54, 59, 66, 71, 88],
        },
      ],
    },
  ],
  chart: {
    type: 'boxPlot',
    height: 350,
  },
  title: {
    text: 'Horizontal BoxPlot Chart',
    align: 'left',
  },
  plotOptions: {
    bar: {
      horizontal: true,
      barHeight: '50%',
    },
    boxPlot: {
      colors: {
        upper: '#e9ecef',
        lower: '#f8f9fa',
      },
    },
  },
  stroke: {
    colors: ['#6c757d'],
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
