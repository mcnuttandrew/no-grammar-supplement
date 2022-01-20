var options = {
  series: [67],
  chart: {
    height: 350,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: '70%',
        image: '../../assets/images/clock.png',
        imageWidth: 64,
        imageHeight: 64,
        imageClipped: false,
      },
      dataLabels: {
        name: {
          show: false,
          color: '#fff',
        },
        value: {
          show: true,
          color: '#333',
          offsetY: 70,
          fontSize: '22px',
        },
      },
    },
  },
  fill: {
    type: 'image',
    image: {
      src: ['../../assets/images/4274635880_809a4b9d0d_z.jpg'],
    },
  },
  stroke: {
    lineCap: 'round',
  },
  labels: ['Volatility'],
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
