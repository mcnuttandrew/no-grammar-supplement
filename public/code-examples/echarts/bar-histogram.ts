/*
title: Histogram with Custom Series
category: custom
titleCN: 直方图（自定义系列）
difficulty: 0
*/

// See https://github.com/ecomfe/echarts-stat
echarts.registerTransform(ecStat.transform.histogram);

option = {
  dataset: [
    {
      source: [
        [8.3, 143],
        [8.6, 214],
        [8.8, 251],
        [10.5, 26],
        [10.7, 86],
        [10.8, 93],
        [11.0, 176],
        [11.0, 39],
        [11.1, 221],
        [11.2, 188],
        [11.3, 57],
        [11.4, 91],
        [11.4, 191],
        [11.7, 8],
        [12.0, 196],
        [12.9, 177],
        [12.9, 153],
        [13.3, 201],
        [13.7, 199],
        [13.8, 47],
        [14.0, 81],
        [14.2, 98],
        [14.5, 121],
        [16.0, 37],
        [16.3, 12],
        [17.3, 105],
        [17.5, 168],
        [17.9, 84],
        [18.0, 197],
        [18.0, 155],
        [20.6, 125]
      ]
    },
    {
      transform: {
        type: 'ecStat:histogram',
        config: {}
      }
    },
    {
      transform: {
        type: 'ecStat:histogram',
        // print: true,
        config: { dimensions: [1] }
      }
    }
  ],
  tooltip: {},
  grid: [
    {
      top: '50%',
      right: '50%'
    },
    {
      bottom: '52%',
      right: '50%'
    },
    {
      top: '50%',
      left: '52%'
    }
  ],
  xAxis: [
    {
      scale: true,
      gridIndex: 0
    },
    {
      type: 'category',
      scale: true,
      axisTick: { show: false },
      axisLabel: { show: false },
      axisLine: { show: false },
      gridIndex: 1
    },
    {
      scale: true,
      gridIndex: 2
    }
  ],
  yAxis: [
    {
      gridIndex: 0
    },
    {
      gridIndex: 1
    },
    {
      type: 'category',
      axisTick: { show: false },
      axisLabel: { show: false },
      axisLine: { show: false },
      gridIndex: 2
    }
  ],
  series: [
    {
      name: 'origianl scatter',
      type: 'scatter',
      xAxisIndex: 0,
      yAxisIndex: 0,
      encode: { tooltip: [0, 1] },
      datasetIndex: 0
    },
    {
      name: 'histogram',
      type: 'bar',
      xAxisIndex: 1,
      yAxisIndex: 1,
      barWidth: '99.3%',
      label: {
        show: true,
        position: 'top'
      },
      encode: { x: 0, y: 1, itemName: 4 },
      datasetIndex: 1
    },
    {
      name: 'histogram',
      type: 'bar',
      xAxisIndex: 2,
      yAxisIndex: 2,
      barWidth: '99.3%',
      label: {
        show: true,
        position: 'right'
      },
      encode: { x: 1, y: 0, itemName: 4 },
      datasetIndex: 2
    }
  ]
};
