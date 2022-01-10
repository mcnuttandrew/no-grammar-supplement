var options = {
  series: [
    {
      data: [344, 345, 333, 323, 322, 342, 383, 353, 323, 376],
    },
  ],
  chart: {
    height: 350,
    type: 'area',
    zoom: {
      enabled: false,
    },
    events: {
      mounted: function (ctx, config) {
        var lowest = ctx.getLowestValueInSeries(0)
        var highest = ctx.getHighestValueInSeries(0)

        ctx.addPointAnnotation({
          x: new Date(ctx.w.globals.seriesX[0][ctx.w.globals.series[0].indexOf(lowest)]).getTime(),
          y: lowest,
          label: {
            text: 'Lowest: ' + lowest,
            offsetY: 2,
          },
          image: {
            path: '../../assets/images/ico-instagram.png',
            width: undefined,
            height: undefined,
            offsetX: 0,
            offsetY: -18,
          },
        })

        ctx.addPointAnnotation({
          x: new Date(ctx.w.globals.seriesX[0][ctx.w.globals.series[0].indexOf(highest)]).getTime(),
          y: highest,
          label: {
            text: 'Highest: ' + highest,
            offsetY: 2,
          },
        })
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
