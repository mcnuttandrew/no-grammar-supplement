type GroupedData = {key: string; count: number}[];
// const lightModeColors = [
//   '#000000',
//   '#0000FF',
//   '#001080',
//   '#0070C1',
//   '#0451A5',
//   '#098658',
//   '#267F99',
//   '#795E26',
//   '#811F3F',
//   '#AF00DB',
//   '#EE0000',
//   '#A31515',
//   '#D16969'
// ];
const paletteColor1 = '#267F99';
// export const theme = {
//   title: {
//     anchor: "start",
//     color: "#000000",
//     font: "Montserrat, sans-serif",
//   },

//   axis: {
//     font: "Montserrat, sans-serif",
//   },
// };

// import { Config } from "./config";

// const ptToPx = (value: number) => value * (1 / 3 + 1);

// const fontSmallPx = ptToPx(9);
// const legendFontPx = ptToPx(10);
// const fontLargePx = ptToPx(12);
const fontStandard = 'Montserrat, sans-serif UI';
const fontTitle = 'wf_standard-font, helvetica, arial, sans-serif';
const firstLevelElementColor = '#252423';
const secondLevelElementColor = '#605E5C';
const backgroundColor = 'transparent';
const backgroundSecondaryColor = '#C8C6C4';

export const theme = {
  view: {stroke: backgroundColor},
  background: backgroundColor,
  font: fontStandard,
  header: {
    titleFont: fontTitle,
    // titleFontSize: fontLargePx,
    titleColor: firstLevelElementColor,
    labelFont: fontStandard,
    // labelFontSize: legendFontPx,
    labelColor: secondLevelElementColor
  },
  axis: {
    ticks: false,
    grid: false,
    domain: false,
    labelColor: secondLevelElementColor,
    // labelFontSize: fontSmallPx,
    titleFont: fontTitle,
    titleColor: firstLevelElementColor,
    // titleFontSize: fontLargePx,
    titleFontWeight: 'normal'
  },
  axisQuantitative: {
    tickCount: 3,
    grid: true,
    gridColor: backgroundSecondaryColor,
    gridDash: [1, 5],
    labelFlush: false
  },
  axisBand: {tickExtra: true},
  axisX: {labelPadding: 5},
  axisY: {labelPadding: 10},
  bar: {fill: paletteColor1},
  line: {
    stroke: paletteColor1,
    strokeWidth: 3,
    strokeCap: 'round',
    strokeJoin: 'round'
  },
  text: {
    font: fontStandard,
    // fontSize: fontSmallPx,
    fill: secondLevelElementColor
  },
  arc: {fill: paletteColor1},
  area: {fill: paletteColor1, line: true, opacity: 0.6},
  path: {stroke: paletteColor1},
  rect: {fill: paletteColor1},
  point: {fill: paletteColor1, filled: true, size: 75},
  shape: {stroke: paletteColor1},
  symbol: {fill: paletteColor1, strokeWidth: 1.5, size: 50},
  legend: {
    titleFont: fontStandard,
    titleFontWeight: 'bold',
    titleColor: secondLevelElementColor,
    labelFont: fontStandard,
    // labelFontSize: legendFontPx,
    labelColor: secondLevelElementColor,
    symbolType: 'circle',
    symbolSize: 75
  },
  range: {
    // category: [
    //   paletteColor1,
    //   paletteColor2,
    //   paletteColor3,
    //   paletteColor4,
    //   paletteColor5,
    //   paletteColor6,
    //   paletteColor7,
    //   paletteColor8,
    // ],
    // diverging: divergentPalette,
    // heatmap: divergentPalette,
    // ordinal: ordinalPalette,
  }
};

export const outputTypePi = (values: GroupedData, {scheme, title}: any, chartTitle: string): any => ({
  title: chartTitle,
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {values},
  mark: {type: 'arc', tooltip: {content: 'data'}},
  encoding: {
    theta: {field: 'count', type: 'quantitative', stack: true},
    color: {
      field: 'key',
      type: 'nominal',
      scale: {scheme: scheme || 'category10'},
      legend: {title}
    }
  },
  layer: [
    {mark: {type: 'arc', outerRadius: 80}},
    {
      mark: {type: 'text', radius: 90},
      encoding: {
        text: {field: 'count', type: 'nominal'}
      }
    }
  ]
});

export const barChart = (values: GroupedData, chartTitle: string, vertical?: boolean, axisName?: string) => {
  const nom = vertical ? 'y' : 'x';
  const quant = vertical ? 'x' : 'y';
  return {
    title: chartTitle,
    $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
    data: {values},
    encoding: {
      [nom]: {field: 'key', type: 'nominal', sort: `-${quant}`, axis: axisName ? {title: axisName} : {}},
      [quant]: {field: 'count', type: 'quantitative'}
    },
    mark: {type: 'bar', tooltip: {content: 'data'}}
  };
};

export const heatmap = (values: any[], xField: string, yField: string, chartTitle: string) => ({
  title: chartTitle,
  $schema: 'https://vega.github.io/schema/vega-lite/v5.json',
  data: {values},
  encoding: {
    y: {field: yField, type: 'ordinal'},
    x: {field: xField, type: 'ordinal'}
  },
  layer: [
    {mark: {type: 'rect', tooltip: {content: 'data'}}, encoding: {color: {aggregate: 'count'}}},
    {
      mark: {type: 'text', color: 'white'},
      encoding: {text: {aggregate: 'count'}}
    }
  ],
  height: {step: 50},
  width: {step: 50}
});

// values: [
//   {id: 'A', parent: null, value: 0},
//   {id: 'B', parent: 'A', value: 1},
//   {id: 'C', parent: 'A', value: 0},
//   {id: 'D', parent: 'C', value: 1},
//   {id: 'E', parent: 'C', value: 1}
// ],
export const petriDish = (values: {key: string; count: string}[]) => {
  return {
    $schema: 'https://vega.github.io/schema/vega/v5.json',
    width: 700,
    height: 700,
    padding: 5,
    // signals: [{name: ' padding', value: 0, bind: {input: 'range', min: 0, max: 10, step: 0.1}}],
    data: [
      {
        name: 'tree',
        values: [
          {id: 'root', parent: null, value: 0},
          ...values.map((x) => ({id: x.key, value: x.count, parent: 'root'}))
        ],
        transform: [
          {type: 'stratify', key: 'id', parentKey: 'parent'},
          {
            type: 'pack',
            field: 'value',
            padding: 5.4,
            compare: {field: 'id', order: 'ascending'},
            size: [{signal: 'width'}, {signal: 'height'}]
          },
          {type: 'filter', expr: "datum.id !== 'root'"}
        ]
      }
    ],

    scales: [{name: 'color', type: 'ordinal', range: {scheme: 'category20b'}}],

    marks: [
      {
        type: 'symbol',
        from: {data: 'tree'},
        encode: {
          enter: {fill: {scale: 'color', field: 'id'}, stroke: {value: 'white'}},
          update: {
            x: {field: 'x'},
            y: {field: 'y'},
            size: {signal: '4 * datum.r * datum.r'},
            tooltip: {
              signal: '{"id": \'\'+datum["id"], "count": datum["value"]}'
            }
          }
        }
      }
    ]
  };
};
