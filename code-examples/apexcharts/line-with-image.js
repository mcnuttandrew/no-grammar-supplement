var options = {
  series: [
    // {
    //     name: 'Dataset 1',
    //     data: [20, 31, 14, 40, 12, 55, 13, 13, 9, 19, 20, 41, 36, 62, 60]
    // },
    {
      name: 'Dataset 2',
      data: [10, 5, 20, 13, 15, 12, 13, 24, 24, 34, 7, 15, 10, 9, 26],
    },
  ],
  chart: {
    height: 350,
    type: 'line',
  },
  stroke: {
    width: 5,
    curve: 'smooth',
  },
  colors: ['#2e93fa'],
  xaxis: {
    categories: ['1990', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005'],
    labels: {
      formatter: function (val) {
        return val
      },
    },
  },
  title: {
    text: 'Line Chart - Image fill',
    align: 'left',
    style: {
      fontSize: '16px',
    },
  },
  fill: {
    type: 'image',
    image: {
      src: ['../../assets/images/abstract.jpg'],
      width: 800,
      height: 800,
    },
  },
  markers: {
    size: 0,
    opacity: 0,
    colors: ['#fff'],
    strokeColor: '#2e93fa',
    strokeWidth: 2,
    hover: {
      size: 8,
    },
  },
  yaxis: {
    title: {
      text: '$ (million)',
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'right',
    floating: true,
    offsetY: -25,
    offsetX: -5,
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
