zingchart.MODULESDIR = 'https://cdn.zingchart.com/modules/';
// Javascript code to execute after DOM contentlet
chartConfig = {
  type: 'flame',
  plot: {
    tooltip: {
      text: "<span style='font-size:19px'>%data-vbtext</span><br>Global value: %data-value (%data-percent%)<br>Local value: %data-local-value (%data-local-percent%)"
    }
  },
  plotarea: {margin: '10 10 10 10'},
  scaleX: {},
  options: {palette: ['#ff9900']},
  series: []
};
fetch('https://app.zingsoft.com/api/file/X2GRC1WK/m9JaezkmToq9YsTjHjd8_stacks.json')
  .then((res) => res.json())
  .then((data) => {
    // assign series data
    chartConfig.series = data; // render chart
    zingchart.render({id: 'myChart', width: '100%', height: '100%', output: 'svg', data: chartConfig});
  })
  .catch((e) => {
    console.error('Error fetching data for flame chart');
  });
