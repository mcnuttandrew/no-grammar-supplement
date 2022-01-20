/*
title: Function Plot
category: line
titleCN: 函数绘图
difficulty: 5
*/

function func(x: number) {
  x /= 10;
  return Math.sin(x) * Math.cos(x * 2 + 1) * Math.sin(x * 3 + 2) * 50;
}

function generateData() {
  let data = [];
  for (let i = -200; i <= 200; i += 0.1) {
    data.push([i, func(i)]);
  }
  return data;
}

option = {
  animation: false,
  grid: {
    top: 40,
    left: 50,
    right: 40,
    bottom: 50
  },
  xAxis: {
    name: 'x',
    minorTick: {
      show: true
    },
    minorSplitLine: {
      show: true
    }
  },
  yAxis: {
    name: 'y',
    min: -100,
    max: 100,
    minorTick: {
      show: true
    },
    minorSplitLine: {
      show: true
    }
  },
  dataZoom: [
    {
      show: true,
      type: 'inside',
      filterMode: 'none',
      xAxisIndex: [0],
      startValue: -20,
      endValue: 20
    },
    {
      show: true,
      type: 'inside',
      filterMode: 'none',
      yAxisIndex: [0],
      startValue: -20,
      endValue: 20
    }
  ],
  series: [
    {
      type: 'line',
      showSymbol: false,
      clip: true,
      data: generateData()
    }
  ]
};

export {};
