import puppeteer from "puppeteer";
import fs from "fs";

// const pages = [
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_baroverview.html",
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_histogramoverview.html",
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_highlow.html",
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_scatterdotoverview.html",
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_lineoverview.html",
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_pieoverview.html",
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_boxoverview.html",
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_multioverview.html",
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/statistics_reference_project_ddita-gentopic4.html",
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_baroverview.html#vizml_examples_baroverview",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_simple.html#vizml_examples_barcharts_simple",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_simple_counts.html#vizml_examples_barcharts_simple_counts",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_simple_transpose.html#vizml_examples_barcharts_simple_transpose",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_simple_witherrorbars.html#vizml_examples_barcharts_simple_witherrorbars",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_stack.html#vizml_examples_barcharts_stack",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_cluster.html#vizml_examples_barcharts_cluster",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_clusterstack.html#vizml_examples_barcharts_clusterstack",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_bar2deval.html#vizml_examples_barcharts_bar2deval",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_panel.html#vizml_examples_barcharts_panel",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_3d.html#vizml_examples_barcharts_3d",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_errorbar.html#vizml_examples_barcharts_errorbar",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_pareto.html#vizml_examples_barcharts_pareto",
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_histogramoverview.html#vizml_examples_histogramoverview",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_histogram.html#vizml_examples_barcharts_histogram",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_histogramnormalcurve.html#vizml_examples_barcharts_histogramnormalcurve",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_freqpolygon.html#vizml_examples_freqpolygon",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_histogram_stack.html#vizml_examples_barcharts_histogram_stack",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_histogram_cumulative.html#vizml_examples_barcharts_histogram_cumulative",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_poppyramid.html#vizml_examples_barcharts_poppyramid",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_poppyramidpanel.html#vizml_examples_barcharts_poppyramidpanel",
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_highlow.html#vizml_examples_highlow",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_rangebar_simple_onevar.html#vizml_examples_barcharts_rangebar_simple_onevar",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_barcharts_rangebar_simple_twovar.html#vizml_examples_barcharts_rangebar_simple_twovar",
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_scatterdotoverview.html#vizml_examples_scatterdotoverview",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_scatterdot_scatter1d.html#vizml_examples_scatterdot_scatter1d",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_scatterdot_scatter2d.html#vizml_examples_scatterdot_scatter2d",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_scatterdot_scatter2d_withfitline.html#vizml_examples_scatterdot_scatter2d_withfitline",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_scatterdot_scatter2dgroup.html#vizml_examples_scatterdot_scatter2dgroup",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_scatterdot_splom.html#vizml_examples_scatterdot_splom",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_scatterdot_bubble.html#vizml_examples_scatterdot_bubble",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_scatterdot_2dbinned.html#vizml_examples_scatterdot_2dbinned",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_scatterdot_2dbinnedploygon.html#vizml_examples_scatterdot_2dbinnedploygon",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_scatterdot_borderboxplot.html#vizml_examples_scatterdot_borderboxplot",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_scatterdot_borderhisto.html#vizml_examples_scatterdot_borderhisto",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_scatterdot_dotplot.html#vizml_examples_scatterdot_dotplot",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_scatterdot_dotplot_2d.html#vizml_examples_scatterdot_dotplot_2d",
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_lineoverview.html#vizml_examples_lineoverview",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_linecharts_simple.html#vizml_examples_linecharts_simple",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_linecharts_simplewithpoints.html#vizml_examples_linecharts_simplewithpoints",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_linecharts_date.html#vizml_examples_linecharts_date",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_linecharts_step.html#vizml_examples_linecharts_step",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_linecharts_fit.html#vizml_examples_linecharts_fit",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_linecharts_equation.html#vizml_examples_linecharts_equation",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_linecharts_pareto.html#vizml_examples_linecharts_pareto",
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_pieoverview.html#vizml_examples_pieoverview",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_piecharts_simple.html#vizml_examples_piecharts_simple",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_piecharts_panel.html#vizml_examples_piecharts_panel",
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_boxoverview.html#vizml_examples_boxoverview",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_boxplots_1d.html#vizml_examples_boxplots_1d",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_boxplots_simple.html#vizml_examples_boxplots_simple",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_boxplots_withdotplot.html#vizml_examples_boxplots_withdotplot",
//   //   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_multioverview.html#vizml_examples_multioverview",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_multi_borderhisto.html#vizml_examples_multi_borderhisto",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_multi_borderboxplot.html#vizml_examples_multi_borderboxplot",
//   "https://www.ibm.com/docs/en/SSLVMB_24.0.0/vizml/vizml_examples_multi_stocksvolume.html#vizml_examples_multi_stocksvolume",
// ];
// const getShortName = (name) => name.split("#")[1];

const pages = [
  "Line",
  "Column",
  "Stacked Column",
  "Floating Column",
  "3D Column",
  "Image Column",
  "Stacked 3D Column",
  "Parallel 3D Column",
  "Pie",
  "3D Pie",
  "Image Pie",
  "Donut",
  "Bar",
  "Stacked Bar",
  "Floating Bar",
  "Area",
  "Stacked Area",
  "3D Area",
  "Stacked 3D Area",
  "Candlestick",
  "Scatter",
  "Polar",
  "Bubble",
  "Mixed",
  "Composite",
  "Joined",
  "Custom",
].reduce((acc, page) => {
  const pg = page.replaceAll(" ", "_");
  acc.push(
    `https://www.maani.us/xml_charts/source.php?page=Gallery_${pg}_1.xml`
  );
  acc.push(
    `https://www.maani.us/xml_charts/source.php?page=Gallery_${pg}_2.xml`
  );
  return acc;
}, []);
const getShortName = (url) => {
  return url.split("Gallery_")[1];
};

async function main() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  for (let idx = 0; idx < pages.length; idx++) {
    //   for (let idx = 0; idx < 1; idx++) {
    console.log("starting ", idx);
    const url = pages[idx];
    await page.goto(url);
    // await page.waitFor(() => !!document.querySelector("code"));
    const shortName = getShortName(url);
    const text = await page.$eval("body", (element) => element.textContent);
    fs.writeFile(`./code-examples/xml_charts/${shortName}`, text, (e) => {
      if (e) {
        console.log("Error on ", shortName);
        console.log(e);
      } else {
        console.log("Scraped", shortName);
      }
    });
  }
}

main();
