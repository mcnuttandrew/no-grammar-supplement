/*
title: Scatter Nebula
category: scatter
titleCN: 大规模星云散点图
difficulty: 5
*/

const dataURL = ROOT_PATH + '/data/asset/data/fake-nebula.bin';
const xhr = new XMLHttpRequest();
xhr.open('GET', dataURL, true);
xhr.responseType = 'arraybuffer';

myChart.showLoading();

xhr.onload = function (e) {
  myChart.hideLoading();
  var rawData = new Float32Array(this.response);

  option = {
    title: {
      left: 'center',
      text:
        echarts.format.addCommas(Math.round(rawData.length / 2)) + ' Points',
      subtext: 'Fake data'
    },
    tooltip: {},
    toolbox: {
      right: 20,
      feature: {
        dataZoom: {}
      }
    },
    grid: {
      right: 70,
      bottom: 70
    },
    xAxis: [{}],
    yAxis: [{}],
    dataZoom: [
      {
        type: 'inside'
      },
      {
        type: 'slider',
        showDataShadow: false,
        handleIcon:
          'path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%'
      },
      {
        type: 'inside',
        orient: 'vertical'
      },
      {
        type: 'slider',
        orient: 'vertical',
        showDataShadow: false,
        handleIcon:
          'path://M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%'
      }
    ],
    animation: false,
    series: [
      {
        type: 'scatter',
        data: rawData,
        dimensions: ['x', 'y'],
        symbolSize: 3,
        itemStyle: {
          opacity: 0.4
        },
        blendMode: 'source-over',
        large: true,
        largeThreshold: 500
      }
    ]
  };

  myChart.setOption(option);
};

xhr.send();

export {};
