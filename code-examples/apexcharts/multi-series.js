var options = {
  series: [
    {
      name: 'Bob',
      data: [
        {
          x: 'Design',
          y: [new Date('2019-03-05').getTime(), new Date('2019-03-08').getTime()],
        },
        {
          x: 'Code',
          y: [new Date('2019-03-08').getTime(), new Date('2019-03-11').getTime()],
        },
        {
          x: 'Test',
          y: [new Date('2019-03-11').getTime(), new Date('2019-03-16').getTime()],
        },
      ],
    },
    {
      name: 'Joe',
      data: [
        {
          x: 'Design',
          y: [new Date('2019-03-02').getTime(), new Date('2019-03-05').getTime()],
        },
        {
          x: 'Code',
          y: [new Date('2019-03-06').getTime(), new Date('2019-03-09').getTime()],
        },
        {
          x: 'Test',
          y: [new Date('2019-03-10').getTime(), new Date('2019-03-19').getTime()],
        },
      ],
    },
  ],
  chart: {
    height: 350,
    type: 'rangeBar',
  },
  plotOptions: {
    bar: {
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: true,
    formatter: function (val) {
      var a = moment(val[0])
      var b = moment(val[1])
      var diff = b.diff(a, 'days')
      return diff + (diff > 1 ? ' days' : ' day')
    },
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'vertical',
      shadeIntensity: 0.25,
      gradientToColors: undefined,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [50, 0, 100, 100],
    },
  },
  xaxis: {
    type: 'datetime',
  },
  legend: {
    position: 'top',
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
