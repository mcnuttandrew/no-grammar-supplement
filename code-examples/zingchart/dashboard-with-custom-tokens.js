let chartConfig = {
  backgroundColor: '#ecf2f6',
  graphset: [
    {
      type: 'bar',
      backgroundColor: '#fff',
      borderWidth: '1px',
      borderColor: '#dae5ec',
      width: '96%',
      height: '30%',
      x: '2%',
      y: '3%',
      title: {
        text: 'DEPARTMENT PERFORMANCE',
        marginTop: '7px',
        marginLeft: '9px',
        backgroundColor: 'none',
        fontColor: '#707d94',
        fontFamily: 'Arial',
        fontSize: '11px',
        fontWeight: 'bold',
        shadow: false,
        textAlign: 'left'
      },
      plot: {
        tooltip: {
          padding: '5px 10px',
          backgroundColor: '#707e94',
          borderRadius: '6px',
          fontColor: '#fff',
          fontFamily: 'Arial',
          fontSize: '11px',
          shadow: false
        },
        animation: {
          delay: 500,
          effect: 'ANIMATION_SLIDE_BOTTOM'
        },
        barWidth: '33px',
        hoverState: {
          visible: false
        }
      },
      plotarea: {
        margin: '45px 20px 38px 45px'
      },
      scaleX: {
        values: ['Apparel', 'Drug', 'Footwear', 'Gift Card', 'Home', 'Jewelry', 'Garden', 'Other'],
        guide: {
          visible: false
        },
        item: {
          paddingTop: '2px',
          fontColor: '#8391a5',
          fontFamily: 'Arial',
          fontSize: '11px'
        },
        itemsOverlap: true,
        lineColor: '#d2dae2',
        maxItems: 9999,
        offsetY: '1px',
        tick: {
          lineColor: '#d2dae2',
          visible: false
        }
      },
      scaleY: {
        values: '0:300:100',
        guide: {
          rules: [
            {
              lineWidth: '0px',
              rule: '%i == 0'
            },
            {
              alpha: 0.4,
              lineColor: '#d2dae2',
              lineStyle: 'solid',
              lineWidth: '1px',
              rule: '%i > 0'
            }
          ]
        },
        item: {
          paddingRight: '5px',
          fontColor: '#8391a5',
          fontFamily: 'Arial',
          fontSize: '10px'
        },
        lineColor: 'none',
        maxItems: 4,
        maxTicks: 4,
        tick: {
          visible: false
        }
      },
      series: [
        {
          values: [150, 165, 173, 201, 185, 195, 162, 125],
          styles: [
            {
              backgroundColor: '#4dbac0'
            },
            {
              backgroundColor: '#25a6f7'
            },
            {
              backgroundColor: '#ad6bae'
            },
            {
              backgroundColor: '#707d94'
            },
            {
              backgroundColor: '#f3950d'
            },
            {
              backgroundColor: '#e62163'
            },
            {
              backgroundColor: '#4e74c0'
            },
            {
              backgroundColor: '#9dc012'
            }
          ]
        }
      ]
    },
    {
      type: 'hbar',
      backgroundColor: '#fff',
      borderColor: '#dae5ec',
      borderWidth: '1px',
      width: '30%',
      height: '63%',
      x: '2%',
      y: '35.2%',
      title: {
        text: 'BRAND PERFORMANCE',
        marginTop: '7px',
        marginLeft: '9px',
        backgroundColor: 'none',
        fontColor: '#707d94',
        fontFamily: 'Arial',
        fontSize: '11px',
        shadow: false,
        textAlign: 'left'
      },
      scaleY: {
        guide: {
          visible: false
        },
        item: {
          visible: false
        },
        lineColor: 'none',
        tick: {
          visible: false
        }
      },
      scaleX: {
        values: ['Kenmore', 'Craftsman', 'DieHard', "Land's End", 'Laclyn Smith', 'Joe Boxer'],
        guide: {
          visible: false
        },
        item: {
          paddingBottom: '8px',
          fontColor: '#8391a5',
          fontFamily: 'Arial',
          fontSize: '11px',
          offsetX: '206px',
          offsetY: '-12px',
          textAlign: 'left',
          width: '200px'
        },
        lineColor: 'none',
        tick: {
          visible: false
        }
      },
      plot: {
        tooltip: {
          padding: '5px 10px',
          backgroundColor: '#707e94',
          borderRadius: '6px',
          fontColor: '#ffffff',
          fontFamily: 'Arial',
          fontSize: '11px',
          shadow: false
        },
        animation: {
          delay: 500,
          effect: 'ANIMATION_EXPAND_LEFT'
        },
        barsOverlap: '100%',
        barWidth: '12px',
        hoverState: {
          backgroundColor: '#707e94'
        },
        thousandsSeparator: ','
      },
      plotarea: {
        margin: '50px 15px 10px 15px'
      },
      series: [
        {
          values: [103902, 112352, 121823, 154092, 182023, 263523],
          styles: [
            {
              backgroundColor: '#4dbac0'
            },
            {
              backgroundColor: '#4dbac0'
            },
            {
              backgroundColor: '#4dbac0'
            },
            {
              backgroundColor: '#4dbac0'
            },
            {
              backgroundColor: '#4dbac0'
            },
            {
              backgroundColor: '#4dbac0'
            }
          ],
          tooltipText: '$%node-value',
          zIndex: 2
        },
        {
          values: [300000, 300000, 300000, 300000, 300000, 300000],
          valueBox: {
            text: '$%data-rvalues',
            paddingBottom: '8px',
            fontColor: '#8391a5',
            fontFamily: 'Arial',
            fontSize: '11px',
            offsetX: '-54px',
            offsetY: '-12px',
            textAlign: 'right',
            visible: true
          },
          backgroundColor: '#d9e4eb',
          dataRvalues: [103902, 112352, 121823, 154092, 182023, 263523],
          maxTrackers: 0,
          zIndex: 1
        }
      ]
    },
    {
      type: 'line',
      backgroundColor: '#fff',
      borderColor: '#dae5ec',
      borderWidth: '1px',
      width: '64%',
      height: '63%',
      x: '34%',
      y: '35.2%',
      title: {
        text: 'TODAY\\'S SALES',
        marginTop: '7px',
        marginLeft: '12px',
        backgroundColor: 'none',
        fontColor: '#707d94',
        fontFamily: 'Arial',
        fontSize: '11px',
        shadow: false,
        textAlign: 'left'
      },
      plot: {
        animation: {
          delay: 500,
          effect: 'ANIMATION_SLIDE_LEFT'
        }
      },
      plotarea: {
        margin: '50px 25px 70px 46px'
      },
      scaleY: {
        values: '0:100:25',
        guide: {
          alpha: 0.5,
          lineColor: '#d2dae2',
          lineStyle: 'solid',
          lineWidth: '1px'
        },
        item: {
          paddingRight: '5px',
          fontColor: '#8391a5',
          fontFamily: 'Arial',
          fontSize: '10px'
        },
        lineColor: 'none',
        tick: {
          visible: false
        }
      },
      scaleX: {
        values: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        guide: {
          visible: false
        },
        item: {
          paddingTop: '5px',
          fontColor: '#8391a5',
          fontFamily: 'Arial',
          fontSize: '10px'
        },
        lineColor: '#d2dae2',
        lineWidth: '2px',
        tick: {
          lineColor: '#d2dae2',
          lineWidth: '1px'
        }
      },
      legend: {
        margin: 'auto auto 15 auto',
        backgroundColor: 'none',
        borderWidth: '0px',
        item: {
          margin: '0px',
          padding: '0px',
          fontColor: '#707d94',
          fontFamily: 'Arial',
          fontSize: '9px'
        },
        layout: 'x4',
        marker: {
          type: 'match',
          padding: '3px',
          fontFamily: 'Arial',
          fontSize: '10px',
          lineWidth: '2px',
          showLine: 'true',
          size: 4
        },
        shadow: false
      },
      scaleLabel: {
        padding: '5px 10px',
        backgroundColor: '#707d94',
        borderRadius: '5px',
        fontColor: '#ffffff',
        fontFamily: 'Arial',
        fontSize: '10px'
      },
      crosshairX: {
        lineColor: '#707d94',
        lineWidth: '1px',
        plotLabel: {
          padding: '5px 10px',
          alpha: 1,
          borderRadius: '5px',
          fontColor: '#000',
          fontFamily: 'Arial',
          fontSize: '10px',
          shadow: false
        }
      },
      tooltip: {
        visible: false
      },
      series: [
        {
          text: 'Kenmore',
          values: [69, 68, 54, 48, 70, 74, 98, 70, 72, 68, 49, 69],
          lineColor: '#4dbac0',
          lineWidth: '2px',
          marker: {
            backgroundColor: '#fff',
            borderColor: '#36a2a8',
            borderWidth: '1px',
            shadow: false,
            size: 3
          },
          palette: 0,
          shadow: false
        },
        {
          text: 'Craftsman',
          values: [51, 53, 47, 60, 48, 52, 75, 52, 55, 47, 60, 48],
          lineColor: '#25a6f7',
          lineWidth: '2px',
          marker: {
            backgroundColor: '#fff',
            borderColor: '#1993e0',
            borderWidth: '1px',
            shadow: false,
            size: 3
          },
          palette: 1,
          shadow: false,
          visible: true
        },
        {
          text: 'DieHard',
          values: [42, 43, 30, 50, 31, 48, 55, 46, 48, 32, 50, 38],
          lineColor: '#ad6bae',
          lineWidth: '2px',
          marker: {
            backgroundColor: '#fff',
            borderColor: '#975098',
            borderWidth: '1px',
            shadow: false,
            size: 3
          },
          palette: 2,
          shadow: false,
          visible: true
        },
        {
          text: 'Land\\'s End',
          values: [25, 15, 26, 21, 24, 26, 33, 25, 15, 25, 22, 24],
          lineColor: '#f3950d',
          lineWidth: '2px',
          marker: {
            backgroundColor: '#fff',
            borderColor: '#d37e04',
            borderWidth: '1px',
            shadow: false,
            size: 3
          },
          palette: 3,
          shadow: false
        }
      ]
    }
  ]
};

zingchart.render({
  id: 'myChart',
  data: chartConfig,
  height: '100%',
  width: '100%'
});
