<Frame width={360} height={270} background="#B6312A">
  <SketchBarChart
    width={360}
    height={270}
    padding={{top: 30, left: 162, right: 60, bottom: 30}}
    encoding={{
      x: {
        field: 'calories',
        type: 'quantitative'
      },
      y: {
        field: 'menu',
        type: 'nominal',
        scale: {type: 'band'}
      },
      color: {value: '#E1D453'},
      label: {field: 'menu'}
    }}
    data={[
      {
        menu: 'Egg McMuffin',
        calories: 300
      },
      {
        menu: 'Hotcakes',
        calories: 350
      },
      {
        menu: 'Big Mac',
        calories: 530
      },
      {
        menu: 'Hamburger',
        calories: 240
      },
      {
        menu: 'Cheeseburger',
        calories: 290
      },
      {
        menu: 'McChicken',
        calories: 360
      },
      {
        menu: 'French Fries',
        calories: 230
      }
    ]}
  />
</Frame>;
