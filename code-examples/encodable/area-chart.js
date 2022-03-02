<Frame width={360} height={270} background="transparent">
  <AreaChart
    width={360}
    height={270}
    encoding={{
      x: {type: 'temporal', field: 'date', scale: {type: 'utc'}},
      y: {type: 'quantitative', field: 'close'}
    }}
    data={appleStock}
  />
</Frame>;
