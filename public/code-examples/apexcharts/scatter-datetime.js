var options = {
  series: [
    {
      name: 'TEAM 1',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'TEAM 2',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'TEAM 3',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'TEAM 4',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 10, {
        min: 10,
        max: 60,
      }),
    },
    {
      name: 'TEAM 5',
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017 GMT').getTime(), 30, {
        min: 10,
        max: 60,
      }),
    },
  ],
  chart: {
    height: 350,
    type: 'scatter',
    zoom: {
      type: 'xy',
    },
  },
  dataLabels: {
    enabled: false,
  },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  xaxis: {
    type: 'datetime',
  },
  yaxis: {
    max: 70,
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
