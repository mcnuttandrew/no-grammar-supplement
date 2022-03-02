<Frame width={360} height={270} background="#FFF4F1">
  <CoffeeChart
    width={360}
    height={270}
    encoding={{
      label: {field: 'day'},
      drinkLevel: {field: 'numCoffee', type: 'quantitative'},
      drinkColor: {
        field: 'productivity',
        type: 'nominal',
        scale: {
          domain: [1, 2, 3, 4],
          range: ['#EAC8C1', '#DFAB6D', '#B26C4D', '#623D2B']
        }
      },
      useToGoCup: {field: 'goToOffice', type: 'nominal'}
    }}
    data={[
      {day: 'MON', numCoffee: 2, productivity: 4, goToOffice: true},
      {day: 'TUE', numCoffee: 3, productivity: 4, goToOffice: true},
      {day: 'WED', numCoffee: 2, productivity: 4, goToOffice: false},
      {day: 'THU', numCoffee: 4, productivity: 3, goToOffice: true},
      {day: 'FRI', numCoffee: 3, productivity: 2, goToOffice: true},
      {day: 'SAT', numCoffee: 1, productivity: 1, goToOffice: false},
      {day: 'SUN', numCoffee: 1, productivity: 1, goToOffice: false}
    ]}
  />
</Frame>;
