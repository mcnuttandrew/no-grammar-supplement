type GroupedData = { key: string; count: number }[];
const lightModeColors = [
  "#000000",
  "#0000FF",
  "#001080",
  "#0070C1",
  "#0451A5",
  "#098658",
  "#267F99",
  "#795E26",
  "#811F3F",
  "#AF00DB",
  "#EE0000",
  "#A31515",
  "#D16969",
];
const paletteColor1 = "#267F99";
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
const fontStandard = "Montserrat, sans-serif UI";
const fontTitle = "wf_standard-font, helvetica, arial, sans-serif";
const firstLevelElementColor = "#252423";
const secondLevelElementColor = "#605E5C";
const backgroundColor = "transparent";
const backgroundSecondaryColor = "#C8C6C4";

export const theme = {
  view: { stroke: backgroundColor },
  background: backgroundColor,
  font: fontStandard,
  header: {
    titleFont: fontTitle,
    // titleFontSize: fontLargePx,
    titleColor: firstLevelElementColor,
    labelFont: fontStandard,
    // labelFontSize: legendFontPx,
    labelColor: secondLevelElementColor,
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
    titleFontWeight: "normal",
  },
  axisQuantitative: {
    tickCount: 3,
    grid: true,
    gridColor: backgroundSecondaryColor,
    gridDash: [1, 5],
    labelFlush: false,
  },
  axisBand: { tickExtra: true },
  axisX: { labelPadding: 5 },
  axisY: { labelPadding: 10 },
  bar: { fill: paletteColor1 },
  line: {
    stroke: paletteColor1,
    strokeWidth: 3,
    strokeCap: "round",
    strokeJoin: "round",
  },
  text: {
    font: fontStandard,
    // fontSize: fontSmallPx,
    fill: secondLevelElementColor,
  },
  arc: { fill: paletteColor1 },
  area: { fill: paletteColor1, line: true, opacity: 0.6 },
  path: { stroke: paletteColor1 },
  rect: { fill: paletteColor1 },
  point: { fill: paletteColor1, filled: true, size: 75 },
  shape: { stroke: paletteColor1 },
  symbol: { fill: paletteColor1, strokeWidth: 1.5, size: 50 },
  legend: {
    titleFont: fontStandard,
    titleFontWeight: "bold",
    titleColor: secondLevelElementColor,
    labelFont: fontStandard,
    // labelFontSize: legendFontPx,
    labelColor: secondLevelElementColor,
    symbolType: "circle",
    symbolSize: 75,
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
  },
};

export const outputTypePi = (
  values: GroupedData,
  { scheme, title }: any,
  chartTitle: string
): any => ({
  title: chartTitle,
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { values },
  mark: { type: "arc", tooltip: { content: "data" } },
  encoding: {
    theta: { field: "count", type: "quantitative", stack: true },
    color: {
      field: "key",
      type: "nominal",
      scale: { scheme: scheme || "category10" },
      legend: { title },
    },
  },
  layer: [
    { mark: { type: "arc", outerRadius: 80 } },
    {
      mark: { type: "text", radius: 90 },
      encoding: {
        text: { field: "count", type: "nominal" },
      },
    },
  ],
});

export const barChart = (values: GroupedData, chartTitle: string): any => ({
  title: chartTitle,
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { values },
  encoding: {
    y: { field: "key", type: "nominal", sort: "-x" },
    x: { field: "count", type: "quantitative" },
  },
  mark: { type: "bar", tooltip: { content: "data" } },
});

export const heatmap = (
  values: any[],
  xField: string,
  yField: string,
  chartTitle: string
) => ({
  title: chartTitle,
  $schema: "https://vega.github.io/schema/vega-lite/v5.json",
  data: { values },
  encoding: {
    y: { field: yField, type: "ordinal" },
    x: { field: xField, type: "ordinal" },
    color: { aggregate: "count" },
  },
  mark: { type: "rect", tooltip: { content: "data" } },
});
