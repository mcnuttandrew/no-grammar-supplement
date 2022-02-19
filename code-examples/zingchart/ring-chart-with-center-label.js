let chartConfig = {
  gui: {
    contextMenu: {
      backgroundColor: '#306EAA', // sets background for entire contextMenu
      button: {
        backgroundColor: '#2D66A4',
        lineColor: '#2D66A4',
        visible: true
      },
      docked: true,
      gear: {
        alpha: 1,
        backgroundColor: '#2D66A4'
      },
      item: {
        backgroundColor: '#306EAA',
        borderColor: '#306EAA',
        borderWidth: '0px',
        color: '#fff',
        fontFamily: 'Lato'
      },
      position: 'right'
    }
  },
  graphset: [
    {
      type: 'ring',
      backgroundColor: '#FBFCFE',
      title: {
        text: 'Monthly Page Views',
        padding: '15px',
        fontColor: '#1E5D9E',
        fontFamily: 'Lato',
        fontSize: '14px'
      },
      subtitle: {
        text: '06/10/20 - 07/11/20',
        padding: '5px',
        fontColor: '#777',
        fontFamily: 'Lato',
        fontSize: '12px'
      },
      legend: {
        adjustLayout: true,
        align: 'center',
        backgroundColor: '#FBFCFE',
        borderWidth: '0px',
        item: {
          cursor: 'pointer',
          fontColor: '#777',
          fontSize: '12px',
          offsetX: '-6px'
        },
        marker: {
          type: 'circle',
          borderWidth: '0px',
          cursor: 'pointer',
          size: 5
        },
        mediaRules: [
          {
            maxWidth: '500px',
            visible: false
          }
        ],
        toggleAction: 'remove',
        verticalAlign: 'bottom'
      },
      plot: {
        valueBox: [
          {
            type: 'all',
            text: '%t',
            placement: 'out'
          },
          {
            type: 'all',
            text: '%npv%',
            placement: 'in'
          }
        ],
        animation: {
          effect: 'ANIMATION_EXPAND_VERTICAL',
          sequence: 'ANIMATION_BY_PLOT_AND_NODE'
        },
        backgroundColor: '#FBFCFE',
        borderWidth: '0px',
        hoverState: {
          cursor: 'hand'
        },
        slice: '60%'
      },
      plotarea: {
        margin: '70px 0px 10px 0px',
        backgroundColor: 'transparent',
        borderRadius: '10px',
        borderWidth: '0px'
      },
      scaleR: {
        refAngle: 270
      },
      tooltip: {
        text: '<span style="color:%color">Page Url: %t</span><br><span style="color:%color">Pageviews: %v</span>',
        anchor: 'c',
        backgroundColor: 'none',
        borderWidth: '0px',
        fontSize: '16px',
        mediaRules: [
          {
            maxWidth: '500px',
            y: '54%'
          }
        ],
        sticky: true,
        thousandsSeparator: ',',
        x: '50%',
        y: '50%'
      },
      noData: {
        text: 'No Selection',
        alpha: 0.6,
        backgroundColor: '#20b2db',
        bold: true,
        fontSize: '18px',
        textAlpha: 0.9
      },
      series: [
        {
          text: 'Docs',
          values: [106541],
          backgroundColor: '#00BAF2',
          lineColor: '#00BAF2',
          lineWidth: '1px',
          marker: {
            backgroundColor: '#00BAF2'
          }
        },
        {
          text: 'Gallery',
          values: [56711],
          backgroundColor: '#E80C60',
          lineColor: '#E80C60',
          lineWidth: '1px',
          marker: {
            backgroundColor: '#E80C60'
          }
        },
        {
          text: 'Index',
          values: [43781],
          backgroundColor: '#9B26AF',
          lineColor: '#9B26AF',
          lineWidth: '1px',
          marker: {
            backgroundColor: '#9B26AF'
          }
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
