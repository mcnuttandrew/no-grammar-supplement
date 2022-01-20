var options = {
  series: [
    {
      name: 'South',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'North',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 20,
      }),
    },
    {
      name: 'Central',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 15,
      }),
    },
  ],
  chart: {
    type: 'area',
    height: 350,
    stacked: true,
    events: {
      selection: function (chart, e) {
        console.log(new Date(e.xaxis.min))
      },
    },
  },
  colors: ['#008FFB', '#00E396', '#CED4DC'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.6,
      opacityTo: 0.8,
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
  },
  xaxis: {
    type: 'datetime',
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
