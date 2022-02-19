let chartConfig = {
  type: 'hbar',
  fontFamily: 'Arial',
  title: {
    text: 'Customer Survey Response',
    backgroundColor: 'none',
    fontColor: '#A4A4A4',
    fontFamily: 'Arial',
    fontSize: '18px'
  },
  plot: {
    animation: {
      delay: 300,
      effect: 'ANIMATION_EXPAND_TOP',
      method: 'ANIMATION_LINEAR',
      sequence: 'ANIMATION_BY_PLOT_AND_NODE',
      speed: '500'
    },
    barsOverlap: '100%',
    borderRadius: '8px',
    hoverState: {
      visible: false
    }
  },
  plotarea: {
    margin: '60px 20px 20px 140px'
  },
  scaleX: {
    values: ['120+', '90-120', '60-90', '30-60', '0-30'],
    guide: {
      visible: false
    },
    item: {
      autoAlign: true,
      fontSize: '14px',
      lineColor: 'none',
      paddingRight: '20px',
      rules: [
        {
          fontColor: '#FA8452',
          rule: '%i==0'
        },
        {
          fontColor: '#FCAE48',
          rule: '%i==1'
        },
        {
          fontColor: '#FCCC65',
          rule: '%i==2'
        },
        {
          fontColor: '#A0BE4A',
          rule: '%i==3'
        },
        {
          fontColor: '#6FA6DF',
          rule: '%i==4'
        }
      ]
    },
    tick: {
      visible: false
    }
  },
  scaleY: {
    guide: {
      visible: false
    },
    visible: false
  },
  labels: [
    {
      text: 'DAYS',
      fontColor: '#9d9d9d',
      fontSize: '12px',
      x: '11.5%',
      y: '10%'
    },
    {
      text: 'CUSTOMERS',
      fontColor: '#9d9d9d',
      fontSize: '12px',
      x: '20%',
      y: '10%'
    },
    {
      text: 'GOAL',
      fontColor: '#9d9d9d',
      fontSize: '12px',
      x: '4%',
      y: '10%'
    }
  ],
  shapes: [
    {
      type: 'circle',
      backgroundColor: 'white',
      borderColor: '#6FA6DF',
      borderWidth: '3px',
      size: '14px',
      x: '45px',
      y: '99px'
    },
    {
      type: 'circle',
      backgroundColor: '#6FA6DF',
      size: '2px',
      x: '40px',
      y: '95px'
    },
    {
      type: 'circle',
      backgroundColor: '#6FA6DF',
      size: '2px',
      x: '50px',
      y: '95px'
    },
    {
      type: 'pie',
      angleStart: 0,
      angleEnd: 180,
      backgroundColor: '#5297b6',
      size: '8px',
      x: '45px',
      y: '100px'
    },
    {
      type: 'pie',
      angleStart: 0,
      angleEnd: 180,
      backgroundColor: '#fff',
      size: '6px',
      x: '45px',
      y: '100px'
    },
    {
      type: 'circle',
      backgroundColor: 'white',
      borderColor: '#FA8452',
      borderWidth: '3px',
      size: '14px',
      x: '45px',
      y: '433px'
    },
    {
      type: 'circle',
      backgroundColor: '#FA8452',
      size: '2px',
      x: '40px',
      y: '429px'
    },
    {
      type: 'circle',
      backgroundColor: '#FA8452',
      size: '2px',
      x: '50px',
      y: '429px'
    },
    {
      type: 'pie',
      angleStart: 170,
      angleEnd: 10,
      backgroundColor: '#FA8452',
      size: '8px',
      x: '45px',
      y: '439px'
    },
    {
      type: 'pie',
      angleStart: 170,
      angleEnd: 10,
      backgroundColor: '#fff',
      size: '5px',
      x: '45px',
      y: '440px'
    }
  ],

  series: [
    {
      values: [100, 100, 100, 100, 100],
      tooltip: {
        visible: false
      },
      backgroundColor: '#f2f2f2',
      barWidth: '40px',
      borderColor: '#e8e3e3',
      borderWidth: '2px',
      fillAngle: 90
    },
    {
      values: [42, 56, 77, 44, 81],
      valueBox: {
        text: '%v',
        alpha: 0.6,
        decimals: 0,
        fontColor: '#A4A4A4',
        fontSize: '14px',
        placement: 'top-out'
      },
      barWidth: '32px',
      maxTrackers: 0,
      rules: [
        {
          backgroundColor: '#FA8452',
          rule: '%i==0'
        },
        {
          backgroundColor: '#FCAE48',
          rule: '%i==1'
        },
        {
          backgroundColor: '#FCCC65',
          rule: '%i==2'
        },
        {
          backgroundColor: '#A0BE4A',
          rule: '%i==3'
        },
        {
          backgroundColor: '#6FA6DF',
          rule: '%i==4'
        }
      ]
    }
  ],
  arrows: [
    {
      backgroundColor: '#CCCCCC',
      borderWidth: '0px',
      direction: 'bottom',
      to: {
        x: '6%',
        y: '27%'
      },
      from: {
        x: '6%',
        y: '79%'
      }
    }
  ]
};

zingchart.render({
  id: 'myChart',
  data: chartConfig,
  height: '500px',
  width: '725px'
});
