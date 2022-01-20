var options = {
  series: [
    {
      type: 'bar',
      data: series.monthDataSeries2.prices,
    },
    {
      type: 'line',
      data: series.monthDataSeries1.prices,
    },
  ],
  chart: {
    type: 'line',
    id: 'chart',
    sparkline: {
      //  enabled: true
    },
  },
  annotations: {
    yaxis: [
      {
        y: 8200,
        borderColor: '#FEB019',
        label: {
          borderColor: '#333',
          style: {
            fontSize: '15px',
            color: '#333',
            background: '#FEB019',
          },
          text: 'Y-axis annotation',
        },
      },
    ],
    xaxis: [
      {
        x: new Date('23 Nov 2017').getTime(),
        borderColor: '#00E396',
        label: {
          borderColor: '#00E396',
          style: {
            fontSize: '15px',
            color: '#fff',
            background: '#00E396',
          },
          offsetY: -10,
          text: 'Vertical',
        },
      },
    ],
    points: [
      {
        x: new Date('01 Dec 2017').getTime(),
        y: 9025,
        label: {
          borderColor: '#FF4560',
          offsetY: 0,
          style: {
            fontSize: '15px',
            color: '#fff',
            background: '#FF4560',
          },
          text: 'All time high',
        },
      },
    ],
  },
  plotOptions: {
    bar: {
      columnWidth: '50%',
    },
  },
  markers: {
    size: 0,
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  legend: {
    show: false,
  },
  labels: series.monthDataSeries1.dates,
  xaxis: {
    type: 'datetime',
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()

function addAnnos() {
  // adding annotation through chart instance by calling direct method
  chart.addYaxisAnnotation({
    id: 'yaxis-anno',
    y: 9000,
    borderColor: '#FEB019',
    label: {
      borderColor: '#333',
      style: {
        fontSize: '15px',
        color: '#333',
        background: '#FEB019',
      },
      text: 'Y-axis - runtime',
    },
  })

  chart.addXaxisAnnotation({
    id: 'xaxis-anno',
    x: new Date('25 Nov 2017').getTime(),
    borderColor: '#00E396',
    label: {
      orientation: 'vertical',
      borderColor: '#00E396',
      style: {
        fontSize: '15px',
        color: '#fff',
        background: '#00E396',
      },
      offsetY: -10,
      text: 'xaxis - runtime',
    },
  })
}

addAnnos()

chart.addPointAnnotation({
  id: 'point-anno',
  x: new Date('17 Nov 2017').getTime(),
  y: 9425,
  label: {
    borderColor: '#FF4560',
    offsetY: 0,
    style: {
      fontSize: '15px',
      color: '#fff',
      background: '#FF4560',
    },
    text: 'Point - runtime',
  },
})

// removing annotation with method name
chart.removeAnnotation('point-anno')

// removing annotations with .exec() method
ApexCharts.exec('chart', 'removeAnnotation', 'xaxis-anno')
ApexCharts.exec('chart', 'removeAnnotation', 'yaxis-anno')

// add annos again
// addAnnos()
