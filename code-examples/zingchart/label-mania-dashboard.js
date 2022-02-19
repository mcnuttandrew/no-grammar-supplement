let chartData = [
  {
    type: 'line',
    values: [69, 68, 54, 80, 70, 74, 90, 70, 72, 68, 49, 69],
    scales: 'scale-x,scale-y',
    lineColor: '#0D47A1',
    legendMarker: {
      type: 'circle'
    },
    marker: {
      backgroundColor: '#0D47A1'
    }
  },
  {
    type: 'line',
    values: [51, 53, 47, 50, 57, 63, 75, 52, 59, 47, 60, 48],
    scales: 'scale-x,scale-y-2',
    lineColor: '#B71C1C',
    tooltipText: '%v%',
    legendMarker: {
      type: 'circle'
    },
    marker: {
      backgroundColor: '#B71C1C'
    }
  },
  {
    type: 'bar',
    values: [22, 25, 14, 22, 26, 29, 34, 22, 26, 18, 22, 21],
    scales: 'scale-x,scale-y-3',
    backgroundColor: '#1B5E20',
    tooltip: {
      text: 'The number being shown is the percentage of the node when compared to its plot',
      width: '200px',
      wrapText: true
    },
    valueBox: {
      text: '%pper%',
      decimals: 1,
      fontAngle: 90,
      fontColor: '#fff',
      offsetY: '5px',
      placement: 'top-in'
    }
  },
  {
    type: 'bar',
    values: [250000, 150000, 260000, 210000, 240000, 260000, 330000, 150000, 410000, 250000, 220000, 240000],
    scales: 'scale-x,scale-y-4',
    backgroundColor: '#E65100',
    text: 'Dell',
    tooltip: {
      text: 'The number being shown above the bar is the value of the node',
      width: '200px',
      wrapText: true
    },
    valueBox: {
      bold: true,
      fontAngle: 90,
      fontColor: '#fff',
      offsetY: '5px',
      placement: 'top-in',
      short: true
    }
  }
];

let chartConfig = {
  type: 'mixed',
  backgroundColor: 'white',
  title: {
    text: 'Chart Title',
    align: 'left',
    backgroundColor: '#BDBDBD',
    fontSize: '14px',
    height: '5%'
  },
  subtitle: {
    text: 'Subtitle',
    align: 'left',
    backgroundColor: '#E0E0E0',
    height: '4%',
    offsetY: '-5px'
  },
  legend: {
    alpha: 1,
    draggable: true,
    footer: {
      text: '- Click Box Icon in Header to Minimize<br>- Click and Drag Cross Icon to Drag',
      fontSize: '8px'
    },
    header: {
      text: 'Legend Info'
    },
    layout: 'x2',
    maxItems: 2,
    minimize: true,
    overflow: 'page',
    shadow: false,
    width: '180px',
    x: '74%',
    y: '9.5%'
  },
  plotarea: {
    margin: '34% 30% 10% 10%'
  },
  scaleX: {
    values: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    guide: {
      lineColor: '#BDBDBD',
      lineStyle: 'solid'
    },
    label: {
      text: 'X label'
    },
    markers: [
      {
        type: 'area',
        alpha: 0.5,
        backgroundColor: '#66BB6A',
        label: {
          text: 'Active<br>Month',
          angle: 0,
          bold: true,
          fontSize: '10px',
          offsetY: '-240px'
        },
        range: [6.5, 7.5]
      },
      {
        type: 'area',
        alpha: 0.5,
        backgroundColor: '#cccccc',
        range: [7.5, 11.5]
      }
    ],
    zooming: true
  },
  scaleX2: {
    values: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
    guide: {
      visible: false
    },
    label: {
      text: 'X-2 label'
    },
    zooming: true
  },
  scaleY: {
    guide: {
      lineStyle: 'solid'
    },
    label: {
      text: 'Y label'
    },
    markers: [
      {
        type: 'line',
        alpha: 1,
        label: {
          text: 'Threshold',
          backgroundColor: '#212121',
          callout: true,
          calloutPosition: 'right',
          fontColor: 'white',
          fontSize: '10px',
          offsetX: '-60px',
          offsetY: '8px'
        },
        lineColor: '#212121',
        lineWidth: '2px',
        range: [74]
      }
    ],
    minorGuide: {
      alpha: 0.7,
      lineGapSize: '6px',
      lineSegementSize: '1px',
      lineStyle: 'dashed',
      lineWidth: '1px'
    },
    minorTick: {
      placement: 'cross',
      size: '6px'
    },
    minorTicks: 3,
    zooming: true
  },
  scaleY2: {
    values: '0:100:10',
    format: '%v%',
    guide: {
      visible: false
    },
    label: {
      text: 'Y-2 label'
    },
    zooming: true
  },
  scaleY3: {
    values: '0:50:10',
    decimals: 2,
    guide: {
      visible: false
    },
    label: {
      text: 'Y-3 label'
    },
    zooming: true
  },
  scaleY4: {
    values: '0:1000000:100000',
    format: '$%v',
    guide: {
      visible: false
    },
    label: {
      text: 'Y-4 label'
    },
    multiplier: true,
    zooming: true
  },
  crosshairX: {
    plotLabel: {
      visible: false
    }
  },
  labels: [
    {
      text: 'View External<br>Report',
      url: 'https://www.zingchart.com/pricing',
      target: '_blank',
      padding: '5px',
      backgroundColor: '#ccc',
      borderRadius: '3px',
      callout: true,
      calloutHeight: '10px',
      calloutWidth: '15px',
      fontColor: '#000',
      hook: 'node:plot=2,index=4',
      offsetY: '-35px',
      underline: true
    }
  ],
  source: {
    text: 'Source: www.zingchart.com',
    fontColor: '#B71C1C'
  },
  zoom: {
    alpha: 0.2,
    backgroundColor: '#B71C1C',
    label: {
      borderColor: '#B71C1C',
      visible: true
    }
  },
  scrollX: {
    bar: {
      backgroundColor: '#757575',
      height: '8px'
    },
    handle: {
      backgroundColor: '#E0E0E0',
      height: '4px',
      offsetY: '-1px'
    }
  },
  scrollY: {
    bar: {
      width: '8px',
      backgroundColor: '#757575'
    },
    handle: {
      backgroundColor: '#E0E0E0',
      offsetX: '-1px',
      width: '4px'
    }
  },
  preview: {
    position: '14% 14%',
    width: '69%',
    height: '50px'
  },
  series: chartData
};

zingchart.render({
  id: 'myChart',
  data: chartConfig,
  height: '100%',
  width: '100%'
});
