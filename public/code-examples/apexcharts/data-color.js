var options = {
  series: [
    {
      name: 'Yearly Profit',
      data: [
        {
          x: '2011',
          y: 1292,
        },
        {
          x: '2012',
          y: 4432,
        },
        {
          x: '2013',
          y: 5423,
        },
        {
          x: '2014',
          y: 6653,
        },
        {
          x: '2015',
          y: 8133,
          fillColor: '#EB8C87',
          strokeColor: '#C23829',
        },
        {
          x: '2016',
          y: 7132,
        },
        {
          x: '2017',
          y: 7332,
        },
        {
          x: '2018',
          y: 6553,
        },
      ],
    },
  ],
  chart: {
    height: 350,
    type: 'bar',
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '60%',
    },
  },
  stroke: {
    width: 0,
  },
  dataLabels: {
    enabled: false,
  },
  yaxis: {
    labels: {
      formatter: function (val) {
        return val / 1000 + 'K $'
      },
    },
  },
  fill: {
    opacity: 1,
  },
  xaxis: {
    type: 'datetime',
  },
}

var chart = new ApexCharts(document.querySelector('#chart'), options)
chart.render()
