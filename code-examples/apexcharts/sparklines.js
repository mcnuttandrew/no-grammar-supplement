var options = {
  series: [
    {
      data: randomizeArray(sparklineData),
    },
  ],
  chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: 'straight',
  },
  fill: {
    opacity: 0.3,
  },
  yaxis: {
    min: 0,
  },
  colors: ['#DCE6EC'],
  title: {
    text: '$424,652',
    offsetX: 0,
    style: {
      fontSize: '24px',
    },
  },
  subtitle: {
    text: 'Sales',
    offsetX: 0,
    style: {
      fontSize: '14px',
    },
  },
}

var chart = new ApexCharts(document.querySelector('#chart-spark1'), options)
chart.render()

var optionsSpark2 = {
  series: [
    {
      data: randomizeArray(sparklineData),
    },
  ],
  chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: 'straight',
  },
  fill: {
    opacity: 0.3,
  },
  yaxis: {
    min: 0,
  },
  colors: ['#DCE6EC'],
  title: {
    text: '$235,312',
    offsetX: 0,
    style: {
      fontSize: '24px',
    },
  },
  subtitle: {
    text: 'Expenses',
    offsetX: 0,
    style: {
      fontSize: '14px',
    },
  },
}

var chartSpark2 = new ApexCharts(document.querySelector('#chart-spark2'), optionsSpark2)
chartSpark2.render()

var optionsSpark3 = {
  series: [
    {
      data: randomizeArray(sparklineData),
    },
  ],
  chart: {
    type: 'area',
    height: 160,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    curve: 'straight',
  },
  fill: {
    opacity: 0.3,
  },
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  yaxis: {
    min: 0,
  },
  title: {
    text: '$135,965',
    offsetX: 0,
    style: {
      fontSize: '24px',
    },
  },
  subtitle: {
    text: 'Profits',
    offsetX: 0,
    style: {
      fontSize: '14px',
    },
  },
}

var chartSpark3 = new ApexCharts(document.querySelector('#chart-spark3'), optionsSpark3)
chartSpark3.render()

var options1 = {
  series: [
    {
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
    },
  ],
  chart: {
    type: 'line',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        },
      },
    },
    marker: {
      show: false,
    },
  },
}

var chart1 = new ApexCharts(document.querySelector('#chart-1'), options1)
chart1.render()

var options2 = {
  series: [
    {
      data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
    },
  ],
  chart: {
    type: 'line',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        },
      },
    },
    marker: {
      show: false,
    },
  },
}

var chart2 = new ApexCharts(document.querySelector('#chart-2'), options2)
chart2.render()

var options3 = {
  series: [43, 32, 12, 9],
  chart: {
    type: 'pie',
    width: 40,
    height: 40,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    width: 1,
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
  },
}

var chart3 = new ApexCharts(document.querySelector('#chart-3'), options3)
chart3.render()

var options4 = {
  series: [43, 32, 12, 9],
  chart: {
    type: 'donut',
    width: 40,
    height: 40,
    sparkline: {
      enabled: true,
    },
  },
  stroke: {
    width: 1,
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
  },
}

var chart4 = new ApexCharts(document.querySelector('#chart-4'), options4)
chart4.render()

var options5 = {
  series: [
    {
      data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
    },
  ],
  chart: {
    type: 'bar',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '80%',
    },
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        },
      },
    },
    marker: {
      show: false,
    },
  },
}

var chart5 = new ApexCharts(document.querySelector('#chart-5'), options5)
chart5.render()

var options6 = {
  series: [
    {
      data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14],
    },
  ],
  chart: {
    type: 'bar',
    width: 100,
    height: 35,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    bar: {
      columnWidth: '80%',
    },
  },
  labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
  xaxis: {
    crosshairs: {
      width: 1,
    },
  },
  tooltip: {
    fixed: {
      enabled: false,
    },
    x: {
      show: false,
    },
    y: {
      title: {
        formatter: function (seriesName) {
          return ''
        },
      },
    },
    marker: {
      show: false,
    },
  },
}

var chart6 = new ApexCharts(document.querySelector('#chart-6'), options6)
chart6.render()

var options7 = {
  series: [45],
  chart: {
    type: 'radialBar',
    width: 50,
    height: 50,
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '50%',
      },
      track: {
        margin: 0,
      },
      dataLabels: {
        show: false,
      },
    },
  },
}

var chart7 = new ApexCharts(document.querySelector('#chart-7'), options7)
chart7.render()

var options8 = {
  series: [53, 67],
  chart: {
    type: 'radialBar',
    width: 40,
    height: 40,
    sparkline: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    radialBar: {
      hollow: {
        margin: 0,
        size: '50%',
      },
      track: {
        margin: 1,
      },
      dataLabels: {
        show: false,
      },
    },
  },
}

var chart8 = new ApexCharts(document.querySelector('#chart-8'), options8)
chart8.render()
