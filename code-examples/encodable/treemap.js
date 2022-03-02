<Frame width={360} height={270} background="#606060">
  <Treemap
    width={360}
    height={270}
    padding={{top: 20, bottom: 20, left: 20, right: 20}}
    // squarify, dice, slice, slice-dice, resquarify, binary
    tileMethod="squarify"
    encoding={{
      color: {
        type: 'quantitative',
        field: 'size',
        scale: {type: 'linear', range: ['#606060', '#A8C96B']}
      },
      label: {field: 'id'},
      size: {type: 'quantitative', field: 'size'}
    }}
    data={shakespeare}
  />
</Frame>;
