<Frame width={360} height={270} background="#556270">
  <DonutChart
    width={360}
    height={270}
    encoding={{
      color: {
        type: 'nominal',
        field: 'id',
        scale: {
          type: 'ordinal',
          range: ['#4ECDC4', '#C7F464', '#FF6B6B', '#C44D58']
        }
      },
      pattern: {value: 'lines'},
      size: {type: 'quantitative', field: 'value'},
      label: {field: 'id'}
    }}
    data={[
      {
        id: 'python',
        value: 376
      },
      {
        id: 'javascript',
        value: 392
      },
      {
        id: 'ruby',
        value: 331
      },
      {
        id: 'scala',
        value: 184
      }
    ]}
  />
</Frame>;
