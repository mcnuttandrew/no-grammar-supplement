let chartConfig = {
  type: 'line',
  backgroundColor: '#2C2C39',
  title: {
    text: 'Time Series Data with null values',
    adjustLayout: true,
    marginTop: '7px',
    fontColor: '#E3E3E5'
  },
  legend: {
    align: 'center',
    backgroundColor: 'none',
    borderWidth: '0px',
    item: {
      cursor: 'hand',
      fontColor: '#E3E3E5'
    },
    marker: {
      type: 'circle',
      borderWidth: '0px',
      cursor: 'hand'
    },
    verticalAlign: 'top'
  },
  plot: {
    aspect: 'spline',
    lineWidth: '2px',
    marker: {
      borderWidth: '0px',
      size: '5px'
    }
  },
  plotarea: {
    margin: 'dynamic 70'
  },
  scaleX: {
    item: {
      fontColor: '#E3E3E5'
    },
    lineColor: '#E3E3E5',
    minValue: 1612180800000,
    step: 'day',
    transform: {
      type: 'date',
      all: '%D %M %d<br>%h:%i:%s'
    },
    zooming: true,
    zoomTo: [0, 15]
  },
  scaleY: {
    guide: {
      lineStyle: 'dashed'
    },
    item: {
      fontColor: '#E3E3E5'
    },
    lineColor: '#E3E3E5',
    minorGuide: {
      alpha: 0.7,
      lineColor: '#E3E3E5',
      lineStyle: 'dashed',
      lineWidth: '1px',
      visible: true
    },
    minorTick: {
      lineColor: '#E3E3E5'
    },
    minorTicks: 1,
    tick: {
      lineColor: '#E3E3E5'
    }
  },
  crosshairX: {
    marker: {
      alpha: 0.5,
      size: '7px'
    },
    plotLabel: {
      borderRadius: '3px',
      multiple: true
    },
    scaleLabel: {
      backgroundColor: '#53535e',
      borderRadius: '3px'
    }
  },
  crosshairY: {
    type: 'multiple',
    lineColor: '#E3E3E5',
    scaleLabel: {
      bold: true,
      borderRadius: '3px',
      decimals: 2,
      fontColor: '#2C2C39',
      offsetX: '-5px'
    }
  },
  shapes: [
    {
      type: 'rectangle',
      id: 'view_all',
      backgroundColor: '#53535e',
      borderColor: '#E3E3E5',
      borderRadius: '3px',
      borderWidth: '1px',
      cursor: 'hand',
      label: {
        text: 'View All',
        bold: true,
        fontColor: '#E3E3E5',
        fontSize: '12px'
      },
      width: '75px',
      height: '20px',
      x: '85%',
      y: '11%'
    }
  ],
  tooltip: {
    borderRadius: '3px',
    borderWidth: '0px'
  },
  preview: {
    adjustLayout: true,
    borderColor: '#E3E3E5',
    label: {
      fontColor: '#E3E3E5'
    },
    mask: {
      backgroundColor: '#E3E3E5'
    }
  },
  series: [
    {
      values: [
        218.92,
        212.85,
        241.95,
        200.76,
        203.87,
        245.26,
        249.9,
        240.05,
        241.8,
        251.4,
        230.06,
        null,
        null,
        203.04,
        229.05,
        232.37,
        190.89,
        236.63,
        249.18,
        188.98,
        194.06,
        234.61,
        241.91,
        196.4,
        191.87,
        213.5,
        194.83,
        228.48,
        235.66,
        235.04,
        195.74,
        243.04,
        null,
        197.51,
        232.64,
        238.99,
        227.8,
        235.81,
        221.7,
        193.46,
        252.64,
        205.35,
        248.52,
        218.32,
        188.55
      ],
      lineColor: '#E34247',
      marker: {
        backgroundColor: '#E34247'
      }
    },
    {
      values: [
        165.57,
        170.47,
        197.17,
        164.64,
        132.73,
        176.89,
        139.41,
        158.71,
        177.85,
        138.87,
        135.74,
        167.06,
        156.42,
        182,
        169.73,
        151.08,
        165.58,
        146.29,
        124.5,
        181.71,
        143.96,
        null,
        null,
        null,
        146,
        172.6,
        149.81,
        161.09,
        175.88,
        149.39,
        184.1,
        123.85,
        186.82,
        139.72,
        138.61,
        170.28,
        164.06,
        184.33,
        null,
        null,
        131.85,
        133.32,
        134.49,
        143.79,
        125.23
      ],
      lineColor: '#FEB32E',
      marker: {
        backgroundColor: '#FEB32E'
      }
    },
    {
      values: [
        70.19,
        96.56,
        75.04,
        51.58,
        82.8,
        68.14,
        89.61,
        null,
        45.33,
        98.59,
        92.9,
        66.94,
        null,
        74.08,
        57.25,
        79.68,
        89.66,
        64.56,
        96.59,
        79.96,
        98.08,
        42.93,
        91.93,
        56.23,
        82.66,
        null,
        85.76,
        74.98,
        51,
        66.99,
        63.02,
        63.8,
        44.33,
        77.56,
        95.28,
        60.93,
        59.6,
        80.58,
        68.51,
        67.63,
        69.76,
        40.54,
        78.42,
        90.4,
        82.3
      ],
      lineColor: '#31A59A',
      marker: {
        backgroundColor: '#31A59A'
      }
    }
  ]
};

// EVENTS
// -----------------------------
zingchart.bind('myChart', 'shape_click', function (p) {
  if (p.shapeid == 'view_all') {
    zingchart.exec(p.id, 'viewall');
  }
});

// RENDER CHARTS
// -----------------------------
zingchart.render({
  id: 'myChart',
  data: chartConfig,
  height: '100%',
  width: '100%'
});
