var options = {
  series: [
    {
      name: 'Jan',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: 'Feb',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: 'Mar',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: 'Apr',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: 'May',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: 'Jun',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: 'Jul',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: 'Aug',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
    {
      name: 'Sep',
      data: generateData(20, {
        min: -30,
        max: 55,
      }),
    },
  ],
  chart: {
    height: 350,
    type: 'heatmap',
  },
  plotOptions: {
    heatmap: {
      shadeIntensity: 0.5,
      radius: 0,
      useFillColorAsStroke: true,
      colorScale: {
        ranges: [
          {
            from: -30,
            to: 5,
            name: 'low',
            color: '#00A100',
          },
          {
            from: 6,
            to: 20,
            name: 'medium',
            color: '#128FD9',
          },
          {
            from: 21,
            to: 45,
            name: 'high',
            color: '#FFB200',
          },
          {
            from: 46,
            to: 55,
            name: 'extreme',
            color: '#FF0000',
          },
        ],
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    width: 1,
  },
  title: {
    text: 'HeatMap Chart with Color Range',
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
