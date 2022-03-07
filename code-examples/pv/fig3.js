p5.pipeline()
  .input({
    source: 'file://.../data.csv',
    batchSize: 500000,
    type: 'text/csv',
    delimiter: ','
  })
  .batch([
    {
      match: {
        MotherAge: [18, 50],
        FatherAge: [18, 70]
      },
      aggregate: {
        $group: ['FatherAge', 'MotherAge'],
        $collect: {
          Babies: {$count: '*'}
        }
      }
    }
  ])
  .progress([
    {
      visualize: {
        mark: 'rect',
        x: 'MotherAge',
        y: 'FatherAge',
        color: 'Babies'
      }
    }
  ])
  .execute({mode: 'automatic'});
