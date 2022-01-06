var options = {
  series: [
    {
      name: 'Logarithmic',
      data: data,
    },
    {
      name: 'Linear',
      data: data,
    },
  ],
  chart: {
    height: 350,
    type: 'line',
    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
  title: {
    text: 'Logarithmic Scale',
    align: 'left',
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: [
    {
      min: 1000000,
      max: 500000000,
      tickAmount: 4,
      logarithmic: true,
      seriesName: 'Logarithmic',
      labels: {
        formatter: labelFormatter,
        style: {
          fontWeight: 900,
          colors: 'rgb(0, 143, 251)',
        },
      },
      title: {
        text: 'Logarithmic',
        style: {
          fontWeight: 900,
          color: 'rgb(0, 143, 251)',
        },
      },
    },
    {
      min: 1000000,
      max: 500000000,
      opposite: true,
      tickAmount: 4,
      seriesName: 'Linear',
      labels: {
        formatter: labelFormatter,
        style: {
          fontWeight: 900,
          colors: 'rgb(0, 227, 150)',
        },
      },
      title: {
        text: 'Linear',
        style: {
          fontWeight: 900,
          color: 'rgb(0, 227, 150)',
        },
      },
    },
  ],
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
