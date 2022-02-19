// CHART CONFIG// -----------------------------
let chartConfig = {
  type: 'hbullet',
  title: {text: 'Call Center Daily Goals', fontColor: '#212121'},
  plot: {
    tooltip: {text: '%t: %v of %g', borderRadius: '3px', borderWidth: '0px', fontSize: '12px'},
    barSpace: '8px',
    goal: {alpha: 0.9, borderWidth: '0px'}
  },
  plotarea: {margin: '50 50 90 120'},
  scaleX: {
    guide: {lineStyle: 'solid', lineWidth: '1px', visible: true},
    item: {visible: false},
    label: {text: 'Agent', offsetX: '-70px'}
  },
  scaleY: {guide: {visible: false}, label: {text: 'Number of Incidents'}},
  labels: [
    {
      text: '',
      backgroundImage: '//demos.zingchart.com/view/6FW4FFOV/avitar11.png',
      hook: 'scale:name=scale-x,index=0',
      offsetX: '-50px',
      width: '50px',
      height: '50px'
    },
    {
      text: '',
      backgroundImage: '//demos.zingchart.com/view/6FW4FFOV/avitar22.png',
      hook: 'scale:name=scale-x,index=1',
      offsetX: '-50px',
      width: '50px',
      height: '50px'
    },
    {
      text: '',
      backgroundImage: '//demos.zingchart.com/view/6FW4FFOV/avitar33.png',
      hook: 'scale:name=scale-x,index=2',
      offsetX: '-50px',
      width: '50px',
      height: '50px'
    },
    {
      text: '',
      backgroundImage: '//demos.zingchart.com/view/6FW4FFOV/avitar44.png',
      hook: 'scale:name=scale-x,index=3',
      offsetX: '-50px',
      width: '50px',
      height: '50px'
    }
  ],
  series: [
    {
      text: 'Inbound Calls',
      values: [35, 22, 50, 65],
      backgroundColor: '#009688',
      goal: {backgroundColor: '#00796b'},
      goals: [25, 30, 30, 45]
    },
    {
      text: 'Outbound Calls',
      values: [30, 30, 20, 15],
      backgroundColor: '#ffc107',
      goal: {backgroundColor: '#ffa000'},
      goals: [45, 50, 45, 30]
    },
    {
      text: 'Call Escalations',
      values: [10, 42, 12, 8],
      backgroundColor: '#9c27b0',
      goal: {backgroundColor: '#7b1fa2'},
      goals: [5, 15, 10, 15]
    }
  ]
};
// RENDER CHARTS// -----------------------------
zingchart.render({id: 'myChart', data: chartConfig, height: '100%', width: '100%'});
