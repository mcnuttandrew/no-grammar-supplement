<Frame width={360} height={270} background="#FFF897">
  <GridMap
    width={360}
    height={270}
    data={alcoholByState}
    encoding={{
      key: {field: 'State'},
      fill: {
        type: 'quantitative',
        field: 'alcoholConsumptionGallons',
        scale: {
          zero: false,
          interpolate: 'hsl',
          range: ['#FAE96F', '#C96E12']
        }
      }
    }}
  />
</Frame>;
