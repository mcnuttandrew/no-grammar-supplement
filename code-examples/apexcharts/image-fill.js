var options = {
  series: [
    {
      name: 'Oliver',
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Harry',
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Thomas',
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Callum',
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Ethan',
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'Richard',
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
    {
      name: 'David',
      data: generateData(15, {
        min: 0,
        max: 90,
      }),
    },
  ],
  chart: {
    height: 360,
    type: 'heatmap',
  },
  dataLabels: {
    enabled: false,
  },
  colors: ['#008FFB'],
  title: {
    text: 'HeatMap Chart with image fill',
  },
  fill: {
    type: 'image',
    image: {
      src: '../../assets/images/ico-instagram.png',
    },
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
