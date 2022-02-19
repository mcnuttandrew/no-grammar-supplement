let initState = null; // Used later to store the chart state before changing the data
let store = {
  // Data store
  mathworks: [
    ['matlab', 1.71],
    ['matlab plot', 0.33],
    ['matlab download', 0.25],
    ['plot matlab', 0.22],
    ['matlab online', 0.2]
  ],
  ansys: [
    ['ansys', 12.06],
    ['ansys student', 3],
    ['ansys fluent', 2.79],
    ['fluent', 2.66],
    ['ansys customer portal', 1.73]
  ],
  arenasimulation: [
    ['arena software', 20.01],
    ['arena simulation', 15.43],
    ['arena', 6.88],
    ['rockwell arena', 3.38],
    ['arena download', 2.55]
  ],
  omnetpp: [
    ['omnet', 19.29],
    ['inet', 11.04],
    ['omnet tutorial', 5.3],
    ['omnet download', 3.64],
    ['omnet tutorial for beginners ...', 2.69]
  ],
  promodel: [
    ['promodel', 12.63],
    ['gsa ebuy', 9.83],
    ['process simulator', 4.9],
    ['promodel corporation', 4.47, ['promodel download', 2.54]]
  ]
};
let bgColors = ['#1976d2', '#424242', '#388e3c', '#ffa000', '#7b1fa2']; // mathworks, ansys, arenasimulation, omnetpp, promodel
let chartConfig = {
  type: 'bar',
  theme: 'classic',
  globals: {
    fontFamily: 'Helvetica'
  },
  backgroundColor: 'white',
  title: {
    text: 'Alexa: Top Software Sites - Traffic from Search, 7/23/19',
    backgroundColor: 'white',
    color: '#606060'
  },
  subtitle: {
    text: 'Click the columns to view top search keywords. Source: alexa.com.',
    color: '#606060'
  },
  plot: {
    tooltip: {
      visible: false
    },
    valueBox: {
      text: '%v%',
      color: '#606060',
      textDecoration: 'underline'
    },
    animation: {
      effect: 'ANIMATION_EXPAND_HORIZONTAL'
    },
    cursor: 'hand',
    dataBrowser: [
      "<span style='font-weight:bold;color:#1976d2;'>Mathworks.com</span>",
      "<span style='font-weight:bold;color:#424242;'>Ansys.com</span>",
      "<span style='font-weight:bold;color:#388e3c;'>Arenasimulation.com</span>",
      "<span style='font-weight:bold;color:#ffa000;'>Omnetpp.org</span>",
      "<span style='font-weight:bold;color:#7b1fa2;'>Promodel.com</span>"
    ],
    hoverState: {
      border: '2px solid #ffff00'
    },
    rules: [
      {
        backgroundColor: '#1976d2',
        rule: '%i==0'
      },
      {
        backgroundColor: '#424242',
        rule: '%i==1'
      },
      {
        backgroundColor: '#388e3c',
        rule: '%i==2'
      },
      {
        backgroundColor: '#ffa000',
        rule: '%i==3'
      },
      {
        backgroundColor: '#7b1fa2',
        rule: '%i==4'
      },
      {
        backgroundColor: '#c2185b',
        rule: '%i==5'
      }
    ]
  },
  scaleX: {
    values: ['Mathworks.com', 'Ansys.com', 'Arenasimulation.com', 'Omnetpp.org', 'Promodel.com'],
    guide: {
      visible: false
    },
    item: {
      color: '#606060'
    },
    lineColor: '#C0D0E0',
    lineWidth: '1px',
    tick: {
      lineColor: '#C0D0E0',
      lineWidth: '1px'
    }
  },
  scaleY: {
    guide: {
      lineStyle: 'solid'
    },
    item: {
      color: '#606060'
    },
    lineColor: 'none',
    tick: {
      lineColor: 'none'
    }
  },

  series: [
    {
      values: [59.9, 41.3, 51.2, 48.4, 23.5]
    }
  ],
  crosshairX: {
    lineColor: 'none',
    lineWidth: '0px',
    marker: {
      visible: false
    },
    plotLabel: {
      text: '%data-browser: %v% of total',
      alpha: 0.9,
      backgroundColor: 'white',
      borderRadius: '4px',
      borderWidth: '3px',
      callout: true,
      calloutPosition: 'bottom',
      color: '#606060',
      fontSize: '12px',
      multiple: true,
      offsetY: '-20px',
      padding: '8px',
      placement: 'node-top',
      rules: [
        {
          borderColor: '#1976d2',
          rule: '%i==0'
        },
        {
          borderColor: '#424242',
          rule: '%i==1'
        },
        {
          borderColor: '#388e3c',
          rule: '%i==2'
        },
        {
          borderColor: '#ffa000',
          rule: '%i==3'
        },
        {
          borderColor: '#7b1fa2',
          rule: '%i==4'
        },
        {
          borderColor: '#c2185b',
          rule: '%i==5'
        }
      ],
      shadow: false
    },
    scaleLabel: {
      visible: false
    }
  }
};

let updateChart = (p) => {
  initState = zingchart.exec(p.id, 'getdata'); // Gets the state of the chart when the node was clicked
  let newValues = null;
  let update = null;
  switch (p.nodeindex) {
    case 0:
      newValues = store['mathworks'];
      update = true;
      break;
    case 1:
      newValues = store['ansys'];
      update = true;
      break;
    case 2:
      newValues = store['arenasimulation'];
      update = true;
      break;
    case 3:
      newValues = store['omnetpp'];
      update = true;
      break;
    case 4:
      newValues = store['promodel'];
      update = true;
      break;
    case 5:
      update = false; // We don't want to allow drilldown for unknown
      break;
  }

  if (update) {
    zingchart.unbind(p.id, 'node_click'); // Disable node_click for second level
    zingchart.exec(p.id, 'modify', {
      update: false, // Making multiple changes, queue these changes
      data: {
        crosshairX: {
          plotLabel: {
            text: '%v% of total',
            borderColor: bgColors[p.nodeindex],
            rules: []
          }
        },
        plot: {
          backgroundColor: bgColors[p.nodeindex],
          cursor: null,
          rules: []
        },
        scaleX: {
          values: []
        }
      }
    });
    zingchart.exec(p.id, 'setseriesvalues', {
      // Replaces all values at plotindex 0
      update: false, // Queue these, too
      plotindex: 0,
      values: newValues
    });
    zingchart.exec(p.id, 'update'); // Push queued changes
    zingchart.bind(p.id, 'animation_end', () => {
      // When the animation ends...
      zingchart.exec(p.id, 'addobject', {
        // ...add a back button
        type: 'shape',
        data: {
          type: 'rectangle',
          id: 'back_btn',
          backgroundColor: '#ffffff #f6f6f6',
          borderColor: '#888',
          borderWidth: '1px',
          cursor: 'hand',
          hoverState: {
            backgroundColor: '#1976D2 #ffffff',
            borderColor: '#57a2ff',
            fillAngle: -180
          },
          label: {
            text: '< Back',
            color: '#606060'
          },
          width: '70px',
          height: '20px',
          x: '80%',
          y: '16%'
        }
      });
    });
  }
};

zingchart.render({
  id: 'myChart',
  data: chartConfig,
  height: '100%',
  width: '100%'
});

zingchart.bind('myChart', 'node_click', updateChart);

// Listen for back button click
zingchart.bind('myChart', 'shape_click', (p) => {
  zingchart.unbind(p.id, 'animation_end');
  if (p.shapeid == 'back_btn') {
    // Set the data back to the state it was in when the node was clicked
    zingchart.exec(p.id, 'setdata', {
      data: initState
    });
    zingchart.bind(p.id, 'node_click', updateChart);
  }
});
