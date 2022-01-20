/*
title: Life Expectancy and GDP
category: scatter
titleCN: 各国人均寿命与GDP关系演变
difficulty: 9
*/

myChart.showLoading();

$.get(ROOT_PATH + '/data/asset/data/life-expectancy.json', function (data) {
  myChart.hideLoading();

  var itemStyle = {
    opacity: 0.8
  };

  var sizeFunction = function (x) {
    var y = Math.sqrt(x / 5e8) + 0.1;
    return y * 80;
  };
  // Schema:
  var schema = [
    { name: 'Income', index: 0, text: '人均收入', unit: '美元' },
    { name: 'LifeExpectancy', index: 1, text: '人均寿命', unit: '岁' },
    { name: 'Population', index: 2, text: '总人口', unit: '' },
    { name: 'Country', index: 3, text: '国家', unit: '' }
  ];

  option = {
    baseOption: {
      timeline: {
        axisType: 'category',
        orient: 'vertical',
        autoPlay: true,
        inverse: true,
        playInterval: 1000,
        left: null,
        right: 0,
        top: 20,
        bottom: 20,
        width: 55,
        height: null,
        symbol: 'none',
        checkpointStyle: {
          borderWidth: 2
        },
        controlStyle: {
          showNextBtn: false,
          showPrevBtn: false
        },
        data: []
      },
      title: [
        {
          text: data.timeline[0],
          textAlign: 'center',
          left: '63%',
          top: '55%',
          textStyle: {
            fontSize: 100
          }
        },
        {
          text: '各国人均寿命与GDP关系演变',
          left: 'center',
          top: 10,
          textStyle: {
            fontWeight: 'normal',
            fontSize: 20
          }
        }
      ],
      tooltip: {
        padding: 5,
        borderWidth: 1,
        formatter: function (obj) {
          var value = obj.value;
          // prettier-ignore
          return schema[3].text + '：' + value[3] + '<br>'
            + schema[1].text + '：' + value[1] + schema[1].unit + '<br>'
            + schema[0].text + '：' + value[0] + schema[0].unit + '<br>'
            + schema[2].text + '：' + value[2] + '<br>';
        }
      },
      grid: {
        top: 100,
        containLabel: true,
        left: 30,
        right: '110'
      },
      xAxis: {
        type: 'log',
        name: '人均收入',
        max: 100000,
        min: 300,
        nameGap: 25,
        nameLocation: 'middle',
        nameTextStyle: {
          fontSize: 18
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: '{value} $'
        }
      },
      yAxis: {
        type: 'value',
        name: '平均寿命',
        max: 100,
        nameTextStyle: {
          fontSize: 18
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: '{value} 岁'
        }
      },
      visualMap: [
        {
          show: false,
          dimension: 3,
          categories: data.counties,
          inRange: {
            color: (function () {
              // prettier-ignore
              var colors = ['#51689b', '#ce5c5c', '#fbc357', '#8fbf8f', '#659d84', '#fb8e6a', '#c77288', '#786090', '#91c4c5', '#6890ba'];
              return colors.concat(colors);
            })()
          }
        }
      ],
      series: [
        {
          type: 'scatter',
          itemStyle: itemStyle,
          data: data.series[0],
          symbolSize: function (val) {
            return sizeFunction(val[2]);
          }
        }
      ],
      animationDurationUpdate: 1000,
      animationEasingUpdate: 'quinticInOut'
    },
    options: []
  };

  for (var n = 0; n < data.timeline.length; n++) {
    option.baseOption.timeline.data.push(data.timeline[n]);
    option.options.push({
      title: {
        show: true,
        text: data.timeline[n] + ''
      },
      series: {
        name: data.timeline[n],
        type: 'scatter',
        itemStyle: itemStyle,
        data: data.series[n],
        symbolSize: function (val) {
          return sizeFunction(val[2]);
        }
      }
    });
  }

  myChart.setOption(option);
});
