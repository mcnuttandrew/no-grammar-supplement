// CHART CONFIG
// -----------------------------
let chartConfig = {
  type: 'pie',
  backgroundColor: '#2B313B',
  title: {
    text: 'Global Browser Usage',
    align: 'left',
    fontColor: '#fff',
    fontFamily: 'Open Sans',
    fontSize: '25px',
    offsetX: '10px'
  },
  subtitle: {
    text: 'June 2020',
    align: 'left',
    fontColor: '#8e99a9',
    fontFamily: 'Open Sans',
    fontSize: '16px',
    offsetX: '10px',
    offsetY: '10px'
  },
  plot: {
    tooltip: {
      text: '%npv%',
      padding: '5 10',
      fontFamily: 'Open Sans',
      fontSize: '18px'
    },
    valueBox: {
      text: '%t\n%npv%',
      fontFamily: 'Open Sans',
      placement: 'out'
    },
    animation: {
      effect: 'ANIMATION_EXPAND_VERTICAL',
      method: 'ANIMATION_REGULAR_EASE_OUT',
      sequence: 'ANIMATION_BY_PLOT',
      speed: 500
    },
    borderColor: '#2B313B',
    borderWidth: '5px'
  },
  plotarea: {
    margin: '20 0 0 0'
  },
  source: {
    text: 'Source: gs.statcounter.com',
    fontColor: '#8e99a9',
    fontFamily: 'Open Sans',
    textAlign: 'left'
  },
  series: [
    {
      text: 'IE and Edge',
      values: [4.8],
      backgroundColor: '#50ADF5'
    },
    {
      text: 'Chrome',
      values: [63.69],
      backgroundColor: '#FF7965'
    },
    {
      text: 'Firefox',
      values: [4.64],
      backgroundColor: '#FFCB45'
    },
    {
      text: 'Safari',
      values: [15.15],
      backgroundColor: '#6877e5'
    },
    {
      text: 'Other',
      values: [11.72],
      backgroundColor: '#6FB07F'
    }
  ]
};

// RENDER CHARTS
// -----------------------------
zingchart.render({
  id: 'myChart',
  data: chartConfig,
  height: '100%',
  width: '100%'
});
