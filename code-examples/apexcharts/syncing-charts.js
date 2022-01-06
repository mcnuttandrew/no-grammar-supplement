var options = {
  series: [
    {
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ],
  chart: {
    id: 'fb',
    group: 'social',
    type: 'line',
    height: 160,
  },
  colors: ['#008FFB'],
}

var chart = new ApexCharts(document.querySelector('#chart-line'), options)
chart.render()

var optionsLine2 = {
  series: [
    {
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
        min: 10,
        max: 30,
      }),
    },
  ],
  chart: {
    id: 'tw',
    group: 'social',
    type: 'line',
    height: 160,
  },
  colors: ['#546E7A'],
}

var chartLine2 = new ApexCharts(document.querySelector('#chart-line2'), optionsLine2)
chartLine2.render()

var optionsArea = {
  series: [
    {
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ],
  chart: {
    id: 'yt',
    group: 'social',
    type: 'area',
    height: 160,
  },
  colors: ['#00E396'],
}

var chartArea = new ApexCharts(document.querySelector('#chart-area'), optionsArea)
chartArea.render()

var optionsSmall = {
  series: [
    {
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ],
  chart: {
    id: 'ig',
    group: 'social',
    type: 'area',
    height: 160,
    width: 300,
  },
  colors: ['#008FFB'],
}

var chartSmall = new ApexCharts(document.querySelector('#chart-small'), optionsSmall)
chartSmall.render()

var optionsSmall2 = {
  series: [
    {
      data: generateDayWiseTimeSeries(new Date('11 Feb 2017').getTime(), 20, {
        min: 10,
        max: 60,
      }),
    },
  ],
  chart: {
    id: 'li',
    group: 'social',
    type: 'area',
    height: 160,
    width: 300,
  },
  colors: ['#546E7A'],
}

var chartSmall2 = new ApexCharts(document.querySelector('#chart-small2'), optionsSmall2)
chartSmall2.render()
