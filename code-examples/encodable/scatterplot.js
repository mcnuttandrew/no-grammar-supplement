<Frame width={360} height={270} background="#FED92A">
  <ScatterPlot
    width={360}
    height={270}
    data={cars}
    encoding={{
      x: {
        type: 'quantitative',
        field: 'x',
        scale: {type: 'linear', nice: true},
        axis: {title: 'Miles per gallon →'}
      },
      y: {
        type: 'quantitative',
        field: 'y',
        axis: {title: '↑ Horsepower'}
      },
      stroke: {value: '#333'},
      fill: {value: 'none'}
    }}
  />
</Frame>;
