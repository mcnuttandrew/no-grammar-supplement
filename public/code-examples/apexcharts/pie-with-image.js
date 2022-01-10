var options = {
  series: [44, 33, 54, 45],
  chart: {
    width: 380,
    type: 'pie',
  },
  colors: ['#93C3EE', '#E5C6A0', '#669DB5', '#94A74A'],
  fill: {
    type: 'image',
    opacity: 0.85,
    image: {
      src: [
        '../../assets/images/stripes.jpg',
        '../../assets/images/1101098.png',
        '../../assets/images/4679113782_ca13e2e6c0_z.jpg',
        '../../assets/images/2979121308_59539a3898_z.jpg',
      ],
      width: 25,
      imagedHeight: 25,
    },
  },
  stroke: {
    width: 4,
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ['#111'],
    },
    background: {
      enabled: true,
      foreColor: '#fff',
      borderWidth: 0,
    },
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
