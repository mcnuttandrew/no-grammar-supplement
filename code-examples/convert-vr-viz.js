import fs from "fs";
// code-examples/vr-viz/Charts/WaterFallPlot.js
import Bargraph from "./vr-viz/Charts/Bargraph";
import ConnectedScatterPlot from "./vr-viz/Charts/ConnectedScatterPlot";
import LollipopChart from "./vr-viz/Charts/LollipopChart";
import MeshPlot from "./vr-viz/Charts/MeshPlot";
import RectangleChart from "./vr-viz/Charts/RectangleChart";
import ScatterPlot from "./vr-viz/Charts/ScatterPlot";
import SpiralChart from "./vr-viz/Charts/SpiralChart";
import StackedBargraph from "./vr-viz/Charts/StackedBargraph";
import TimeSeries from "./vr-viz/Charts/TimeSeries";
import WaterFallPlot from "./vr-viz/Charts/WaterFallPlot";

import ContourMap from "./vr-viz/Diagrams/ContourMap";
import CrossSectionView from "./vr-viz/Diagrams/CrossSectionView";
import ForceDirectedGraph from "./vr-viz/Diagrams/ForceDirectedGraph";
import PointCloud from "./vr-viz/Diagrams/PointCloud";
import TreeMap from "./vr-viz/Diagrams/TreeMap";

import FlowMap from "./vr-viz/Maps/FlowMap";
import IsolineMap from "./vr-viz/Maps/IsolineMap";
import MapBarChart from "./vr-viz/Maps/MapBarChart";
import MapStackedBarChart from "./vr-viz/Maps/MapStackedBarChart";
import MapTimeBars from "./vr-viz/Maps/MapTimeBars";
import PrismMap from "./vr-viz/Maps/PrismMap";

import ContourPlot from "./vr-viz/Plots/ContourPlot";
import ParametricCurvePlot from "./vr-viz/Plots/ParametricCurvePlot";
import ParametricSurfacePlot from "./vr-viz/Plots/ParametricSurfacePlot";
import SurfacePlot from "./vr-viz/Plots/SurfacePlot";

const charts = {
  Bargraph,
  ConnectedScatterPlot,
  LollipopChart,
  MeshPlot,
  RectangleChart,
  ScatterPlot,
  SpiralChart,
  StackedBargraph,
  TimeSeries,
  WaterFallPlot,
};

const diagrams = {
  ContourMap,
  CrossSectionView,
  ForceDirectedGraph,
  PointCloud,
  TreeMap,
};

const maps = {
  FlowMap,
  IsolineMap,
  MapBarChart,
  MapStackedBarChart,
  MapTimeBars,
  PrismMap,
};

const plots = {
  ContourPlot,
  ParametricCurvePlot,
  ParametricSurfacePlot,
  SurfacePlot,
};

const groups = { charts, diagrams, maps, plots };

Object.entries(groups).forEach(([group, files]) => {
  Object.entries(files).forEach(([filename, file]) => {
    fs.writeFile(
      `./vr-viz/${group}-${filename}.json`,
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
});
