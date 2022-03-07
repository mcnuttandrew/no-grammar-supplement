app
  .batch([
    {
      aggregate: {
        $group: ['LastGVT', 'KP'],
        $include: tsMetrics,
        $calculate: ['avg', 'sum']
      }
    }
  ])
  .progress([
    {
      visualize: {
        facets: {
          layout: 'rows',
          variables: {
            metrics: tsMetrics.map((m) => 'avg.' + m),
            colors: ['teal', 'purple', 'orange']
          },
          sortBy: {$var: 'metrics'},
          limit: 3
        },
        mark: 'area',
        color: 'colors',
        x: 'LastGvt',
        y: 'metrics',
        brush: {
          condition: {x: true, y: false},
          export: {format: 'json'},
          callback: (results) => {
            // pass results to D3
            //  d3.select(...)
            //  ...
            //  .data(results)
            //  ...
          }
        }
      }
    }
  ]);
