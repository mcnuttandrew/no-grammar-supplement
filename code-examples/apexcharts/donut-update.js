var options = {
  series: [44, 55, 13, 33],
  chart: {
    width: 380,
    type: 'donut',
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          show: false,
        },
      },
    },
  ],
  legend: {
    position: 'right',
    offsetY: 0,
    height: 230,
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()

function appendData() {
  var arr = chart.w.globals.series.slice()
  arr.push(Math.floor(Math.random() * (100 - 1 + 1)) + 1)
  return arr
}

function removeData() {
  var arr = chart.w.globals.series.slice()
  arr.pop()
  return arr
}

function randomize() {
  return chart.w.globals.series.map(function () {
    return Math.floor(Math.random() * (100 - 1 + 1)) + 1
  })
}

function reset() {
  return options.series
}

document.querySelector('#randomize').addEventListener('click', function () {
  chart.updateSeries(randomize())
})

document.querySelector('#add').addEventListener('click', function () {
  chart.updateSeries(appendData())
})

document.querySelector('#remove').addEventListener('click', function () {
  chart.updateSeries(removeData())
})

document.querySelector('#reset').addEventListener('click', function () {
  chart.updateSeries(reset())
})
