var options = {
  series: [
    {
      name: 'Line',
      type: 'line',
      data: [37, 38.3, 33.01, 30, 29.7, 30, 35.2, 44, 45, 41, 22, 22.5, 29.1, 25.5, 41.2, 43.8, 39, 23, 26, 22, 34, 37, 43, 41, 17],
    },
    {
      name: 'Bar1',
      type: 'bar',
      data: [-1.57, -1.83, -0.29, 2, 0.23, 3, 0, -0.77, 0, 0, 0, -0.16, -0.5, -0.75, -0.93, -0.93, -0.45, 0, 0, -0.23, -0.95, -1.12, -0.51, 0.76],
    },
    {
      name: 'Bar2',
      type: 'bar',
      data: [-2.99, -0.43, 0.39, 2.8, 0.23, 1.2, -0.06, -2.96, -2.74, -2.58, -1.79, -2.16, -1.9, -1.75, -2, -2.16, -1.75, -1.9, -2.74, -2.58, -3.8, -1.24, -0.01, 1.89],
    },
    {
      name: 'Bar3',
      type: 'bar',
      data: [0.09, 4, 4.83, 6.86, 3.86, 5, 1.7, -1.21, 0, 0.02, 0.07, -0.15, -0.09, 0, -0.61, -1.75, 0, -0.43, -1.5, -0.66, -3.06, 0.06, 0.15, 1.48],
    },
    {
      name: 'bar4',
      type: 'bar',
      data: [5.95, 5.86, 0.92, -1.2, -2.73, -0.32, 0.12, -0.55, 0.78, 0, -1.73, -2.52, -1.26, -0.8, -0.75, 0, -3, 0, 0.29, 0.3],
    },
  ],
  colors: ['#6a6ba5', '#f9a867', '#2a6b9b', '#6c98b7', '#abc4d6', '#d5e2eb'],
  chart: {
    height: '350',
    width: '90%',
    type: 'line',
    stacked: 'true',
    zoom: {
      enabled: true,
      type: 'x',
    },
  },
  tooltip: {
    followCursor: true,
    shared: false,
  },
  responsive: [
    {
      breakpoint: 480,
    },
  ],
  markers: {
    size: 0,
    fillOpacity: 0,
    strokeOpacity: 0,
  },
  stroke: {
    width: 2,
  },
  xaxis: {
    categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25],
    type: 'numeric',
    tickPlacement: 'on',
    tickAmount: 'dataPoints',
    labels: {
      showDuplicates: false,
      formatter: function (value) {
        return value.toFixed(0)
      },
    },
  },
  yaxis: [
    {
      seriesName: 'Line',
      opposite: true,
    },
    {
      seriesName: 'Bar1',
    },
    {
      seriesName: 'Bar1',
      show: false,
    },
    {
      seriesName: 'Bar1',
      show: false,
    },
    {
      seriesName: 'Bar1',
      show: false,
    },
  ],
  legend: {
    showForSingleSeries: true,
  },
  fill: {
    opacity: 1,
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
