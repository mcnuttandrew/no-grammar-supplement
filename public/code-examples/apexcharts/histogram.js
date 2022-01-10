var options = {
  series: [
    {
      data: [4, 3, 10, 9, 29, 19, 22],
    },
  ],
  chart: {
    type: 'histogram',
    height: 380,
    foreColor: '#999',
    events: {
      dataPointSelection: function (e, chart, opts) {
        var arraySelected = []
        opts.selectedDataPoints.map(function (selectedIndex) {
          return selectedIndex.map(function (s) {
            return arraySelected.push(chart.w.globals.series[0][s])
          })
        })
        arraySelected = arraySelected.reduce(function (acc, curr) {
          return acc + curr
        }, 0)

        document.querySelector('#selected-count').innerHTML = arraySelected
      },
    },
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: false,
      },
    },
  },
  states: {
    active: {
      allowMultipleDataPointsSelection: true,
    },
  },
  xaxis: {
    categories: [10, 20, 30, 40, 50, 60, 70],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    tickAmount: 4,
    labels: {
      offsetX: -5,
      offsetY: -5,
    },
  },
  tooltip: {
    x: {
      format: 'dd MMM yyyy',
    },
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()

chart.addEventListener('dataPointSelection', function (e, opts) {
  console.log(e, opts)
})
