const LinearColorScale = {
  data: { url: "mn_data.json" },
  compose: {
    mix: "max",
  },
};

const LogColorScale = {
  data: { url: "mn_data.json" },
  compose: {
    mix: "max",
  },
  rescale: {
    type: "log",
  },
};

const EquiDepthColorScale = {
  data: { url: "mn_data.json" },
  compose: {
    mix: "max",
  },
  rescale: {
    type: "equidepth",
    levels: 3,
  },
};

const EquiDepthColorScaleSmallMultiples = {
  data: { url: "mn_data.json" },
  compose: {
    mix: "separate",
  },
  rescale: {
    type: "equidepth",
    levels: 4,
  },
};

const SquareWeaving = {
  data: { url: "mn_data.json" },
  compose: {
    mix: "weaving",
    shape: "square",
  },
};

const RandomSquareWeaving = {
  data: { url: "mn_data.json" },
  compose: {
    mix: "weaving",
    shape: "square",
    random: true,
  },
};

const HexagonalWeaving = {
  description: "multivariate normal data",
  data: { url: "mn_data.json" },
  compose: {
    mix: "weaving",
    shape: "hex",
  },
};

const RandomTrianglularWeaving = {
  data: { url: "mn_data.json" },
  compose: {
    mix: "weaving",
    shape: "tri",
    random: true,
  },
  rescale: {
    type: "equidepth",
  },
};

const RectangularRebinningPunchcard = {
  data: { url: "mn_data.json" },
  rebin: {
    type: "square",
    size: 32,
  },
  compose: {
    mix: "glyph",
    glyphSpec: {
      template: "punchcard",
    },
  },
};

const VoronoiTiling = {
  data: { url: "mn_data.json" },
  rebin: {
    type: "voronoi",
    size: 32,
    stroke: "black",
  },
  compose: {
    mix: "weaving",
    shape: "random",
    size: 4,
  },
};

const VoronoiTilingDotDensities = {
  data: { url: "mn_data.json" },
  rebin: {
    type: "voronoi",
    size: 32,
    stroke: "black",
  },
  compose: {
    mix: "dotdensity",
    size: 4,
  },
};

const VoronoiTilingMultiplicative = {
  data: { url: "mn_data.json" },
  reencoding: {
    color: {
      field: "z",
      type: "nominal",
      scale: {
        range0: ["White", "White", "White", "White"],
        range1: ["Blue", "Orange", "Red", "Green"],
      },
    },
  },
  rebin: {
    type: "voronoi",
    size: 32,
    stroke: "black",
  },
  compose: {
    mix: "blend",
    blending: "multiplicative",
  },
};

const VoronoiTilingPropLines = {
  data: { url: "mn_data.json" },
  rebin: {
    type: "voronoi",
    size: 32,
    stroke: "black",
  },
  compose: {
    mix: "propline",
    size: 4,
    widthprop: "percent",
    colprop: true,
  },
};

const VoronoiTilingHatching = {
  data: { url: "mn_data.json" },
  rebin: {
    type: "voronoi",
    size: 32,
    stroke: "black",
  },
  compose: {
    mix: "hatching",
    size: 2,
    widthprop: 1,
    colprop: false,
  },
};

const VoronoiTilingBars = {
  data: { url: "mn_data.json" },
  smooth: {},
  rebin: {
    type: "voronoi",
    size: 32,
    stroke: "black",
  },
  compose: {
    mix: "glyph",
    glyphSpec: {
      template: "bars",
      width: 20,
      height: 20,
    },
  },
};

const Timemultiplexing = {
  data: { url: "mn_data.json" },
  compose: {
    mix: "time",
  },
};

const LinearColorScaleColorRemapping = {
  data: { url: "mn_data.json" },
  compose: {
    mix: "max",
  },
};

const CensusData = {
  data: { url: "census.snappy_data.json" },
  compose: {
    mix: "mean",
  },
  rescale: {
    type: "log",
  },
};

const CensusDataClassReorderedAndRenamed = {
  data: {
    url: "census.snappy_data.json",
  },
  style: {
    classes: [
      {
        name: "w",
        alias: "White",
        color0: "White",
        color1: "Blue",
      },
      {
        name: "h",
        alias: "Hispanic",
        color0: "White",
        color1: "Orange",
      },
      {
        name: "a",
        alias: "Asian",
        color0: "White",
        color1: "Red",
      },
      {
        name: "b",
        alias: "Black",
        color0: "White",
        color1: "Green",
      },
      {
        name: "o",
        alias: "Other",
        color0: "White",
        color1: "Brown",
      },
    ],
    scale: {
      type: "log",
    },
  },
  assembly: {
    mix: "mean",
  },
};

const CensusDataSmoothed = {
  data: { url: "census.snappy_data.json" },
  smooth: { radius: 1 },
  compose: {
    mix: "mean",
  },
  rescale: {
    type: "log",
  },
};

const CensusDataRandomWeaving = {
  description: "US Census Synthetic people",
  data: { url: "census.snappy_data.json" },
  rebin: {
    type: "topojson",
    url: "us.json",
    feature: "states",
    stroke: "rgba(0,0,0,0.25)",
  },
  compose: {
    mix: "weaving",
    shape: "random",
    size: 4,
  },
  rescale: {
    type: "cbrt",
  },
};

const CensusDataWeaving = {
  description: "US Census Synthetic people",
  data: { url: "census.snappy_data.json" },
  rebin: {
    type: "topojson",
    url: "us.json",
    feature: "states",
    stroke: "grey",
  },
  compose: {
    mix: "weaving",
    shape: "square",
    size: 4,
  },
  rescale: {
    type: "cbrt",
  },
};

const CensusDataChoropleth = {
  description: "US Census Synthetic people",
  data: { url: "census.snappy_data.json" },
  rebin: {
    type: "topojson",
    url: "us.json",
    feature: "states",
    stroke: "white",
  },
  compose: {
    mix: "mean",
    size: 2,
  },
  rescale: {
    type: "cbrt",
  },
};

const CensusDataMultiplicativeChoropleth = {
  description: "US Census Synthetic people",
  data: { url: "census.snappy_data.json" },
  rebin: {
    type: "topojson",
    url: "us.json",
    feature: "counties",
    stroke: "rgba(255,255,255,0.1)",
  },
  compose: {
    mix: "blend",
    blending: "multiplicative",
  },
  rescale: {
    type: "log",
  },
};

const examples = {
  LinearColorScale,
  LogColorScale,
  EquiDepthColorScale,
  EquiDepthColorScaleSmallMultiples,
  SquareWeaving,
  RandomSquareWeaving,
  HexagonalWeaving,
  RandomTrianglularWeaving,
  RectangularRebinningPunchcard,
  VoronoiTiling,
  VoronoiTilingDotDensities,
  VoronoiTilingMultiplicative,
  VoronoiTilingPropLines,
  VoronoiTilingHatching,
  VoronoiTilingBars,
  Timemultiplexing,
  LinearColorScaleColorRemapping,
  CensusData,
  CensusDataClassReorderedAndRenamed,
  CensusDataSmoothed,
  CensusDataRandomWeaving,
  CensusDataWeaving,
  CensusDataChoropleth,
  CensusDataMultiplicativeChoropleth,
};

import fs from "fs";

Object.entries(examples).forEach(([filename, file]) => {
  fs.writeFile(
    `./code-examples/MultiClassDensityMaps/${filename}.json`,
    JSON.stringify(file, null, 2),
    (err) => {
      if (err) console.log("err");
      // else {
      //   console.log("File written successfully\n");
      //   console.log("The written has the following contents:");
      // }
    }
  );
});
