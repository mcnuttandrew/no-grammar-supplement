var options = {
  series: [
    {
      name: 'Metric1',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Metric2',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Metric3',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Metric4',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Metric5',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Metric6',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Metric7',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Metric8',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Metric8',
      data: generateData(20, {
        min: 0,
        max: 90,
      }),
    },
  ],
  chart: {
    height: 350,
    type: 'heatmap',
  },
  stroke: {
    width: 0,
  },
  plotOptions: {
    heatmap: {
      radius: 30,
      enableShades: false,
      colorScale: {
        ranges: [
          {
            from: 0,
            to: 50,
            color: '#008FFB',
          },
          {
            from: 51,
            to: 100,
            color: '#00E396',
          },
        ],
      },
    },
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#fff'],
    },
  },
  xaxis: {
    type: 'category',
  },
  title: {
    text: 'Rounded (Range without Shades)',
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
