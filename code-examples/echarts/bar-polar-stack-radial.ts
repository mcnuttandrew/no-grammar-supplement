/*
title: Stacked Bar Chart on Polar(Radial)
titleCN: 极坐标系下的堆叠柱状图
category: bar
difficulty: 7
*/

option = {
  angleAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  radiusAxis: {},
  polar: {},
  series: [
    {
      type: 'bar',
      data: [1, 2, 3, 4, 3, 5, 1],
      coordinateSystem: 'polar',
      name: 'A',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    },
    {
      type: 'bar',
      data: [2, 4, 6, 1, 3, 2, 1],
      coordinateSystem: 'polar',
      name: 'B',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    },
    {
      type: 'bar',
      data: [1, 2, 3, 4, 1, 2, 5],
      coordinateSystem: 'polar',
      name: 'C',
      stack: 'a',
      emphasis: {
        focus: 'series'
      }
    }
  ],
  legend: {
    show: true,
    data: ['A', 'B', 'C']
  }
};

export {};
