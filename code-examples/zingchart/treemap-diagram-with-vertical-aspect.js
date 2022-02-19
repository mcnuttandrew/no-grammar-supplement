let customRules = () => {
  let palleteIndex = 0;
  return (p) => {
    let pallete = [
      '#03A9F4', // food
      '#F44336', // alcohol
      '#4CAF50', // housing
      '#00BCD4', // apparel
      '#E91E63', // transporation
      '#009688', // healthcare
      '#3F51B5', // entertainment
      '#00BCD4', // personal care
      '#009688', // reading
      '#9C27B0', // education
      '#8BC34A', // tobacco
      '#CDDC39', // misc
      '#FFEB3B', // cash contributions
      '#FFC107' // personal insurance
    ];
    if (p.depth == 0) {
      return {
        backgroundColor: '#607D8B',
        fontColor: 'white',
        fontSize: '18px',
        tooltip: {
          backgroundColor: 'black'
        }
      };
    } else if (p.depth == 1) {
      palleteIndex = palleteIndex < 9 ? ++palleteIndex : 0;
      return {
        backgroundColor: pallete[palleteIndex],
        fontColor: 'white',
        fontSize: 18 - p.depth * 2,
        tooltip: {
          backgroundColor: 'black'
        }
      };
    } else {
      return {
        fontColor: 'white',
        fontSize: 12 + p.children,
        tooltip: {
          backgroundColor: 'black'
        }
      };
    }
  };
};

let chartData = [
  {
    text: '1984 - Average annual expenditures',
    children: [
      {
        text: 'Food',
        value: '3290',
        children: [
          {
            text: 'Food at home',
            value: '1970',
            children: [
              {
                text: 'Cereals and bakery products',
                value: '262'
              },
              {
                text: 'Cereals and cereal products',
                value: '84'
              },
              {
                text: 'Bakery products',
                value: '178'
              },
              {
                text: 'Meats, poultry, fish, and eggs',
                value: '586',
                children: [
                  {
                    text: 'Beef',
                    value: '199'
                  },
                  {
                    text: 'Pork',
                    value: '119'
                  },
                  {
                    text: 'Other meats',
                    value: '81'
                  },
                  {
                    text: 'Poultry',
                    value: '85'
                  },
                  {
                    text: 'Fish and seafood',
                    value: '67'
                  },
                  {
                    text: 'Eggs',
                    value: '35'
                  }
                ]
              },
              {
                text: 'Dairy products',
                value: '253',
                children: [
                  {
                    text: 'Fresh milk and cream',
                    value: '128'
                  },
                  {
                    text: 'Other dairy products',
                    value: '125'
                  }
                ]
              },
              {
                text: 'Fruits and vegetables',
                value: '313',
                children: [
                  {
                    text: 'Fresh fruits',
                    value: '93'
                  },
                  {
                    text: 'Fresh vegetables',
                    value: '92'
                  },
                  {
                    text: 'Processed fruits',
                    value: '72'
                  },
                  {
                    text: 'Processed vegetables',
                    value: '56'
                  }
                ]
              },
              {
                text: 'Other food at home',
                value: '526',
                children: [
                  {
                    text: 'Sugar and other sweets',
                    value: '74'
                  },
                  {
                    text: 'Fats and oils',
                    value: '56'
                  },
                  {
                    text: 'Miscellaneous foods',
                    value: '218'
                  },
                  {
                    text: 'Nonalcoholic beverages',
                    value: '178'
                  },
                  {
                    text: 'Food prepared by consumer unit on out-of-town trips',
                    value: '30'
                  }
                ]
              }
            ]
          },
          {
            text: 'Food away from home',
            value: '1320'
          }
        ]
      },
      {
        text: 'Alcoholic beverages',
        value: '275'
      },
      {
        text: 'Housing',
        value: '6674',
        children: [
          {
            text: 'Shelter',
            value: '3489',
            children: [
              {
                text: 'Owned dwellings',
                value: '2062',
                children: [
                  {
                    text: 'Mortgage interest and charges',
                    value: '1251'
                  },
                  {
                    text: 'Property taxes',
                    value: '421'
                  }
                ]
              },
              {
                text: 'Maintenance, repair, insurance, other expenses',
                value: '390'
              },
              {
                text: 'Rented dwellings',
                value: '1070'
              },
              {
                text: 'Other lodging',
                value: '357'
              }
            ]
          },
          {
            text: 'Utilities, fuels, and public services',
            value: '1638',
            children: [
              {
                text: 'Natural gas',
                value: '297'
              },
              {
                text: 'Electricity',
                value: '629'
              },
              {
                text: 'Fuel oil and other fuels',
                value: '140'
              },
              {
                text: 'Telephone services',
                value: '435'
              },
              {
                text: 'Water and other public services',
                value: '138'
              }
            ]
          },
          {
            text: 'Household operations',
            value: '315',
            children: [
              {
                text: 'Personal services',
                value: '128'
              },
              {
                text: 'Other household expenses',
                value: '187'
              }
            ]
          },
          {
            text: 'Housekeeping supplies',
            value: '307',
            children: [
              {
                text: 'Laundry and cleaning supplies',
                value: '87'
              },
              {
                text: 'Other household products',
                value: '134'
              },
              {
                text: 'Postage and stationery',
                value: '86'
              }
            ]
          },
          {
            text: 'Household furnishings and equipment',
            value: '926',
            children: [
              {
                text: 'Household textiles',
                value: '86'
              },
              {
                text: 'Furniture',
                value: '270'
              },
              {
                text: 'Floor coverings',
                value: '78'
              },
              {
                text: 'Major appliances',
                value: '143'
              },
              {
                text: 'Small appliances, miscellaneous housewares',
                value: '67'
              },
              {
                text: 'Miscellaneous household equipment',
                value: '282'
              }
            ]
          }
        ],
        fontSize: '20px'
      },
      {
        text: 'Apparel and services',
        value: '1319',
        children: [
          {
            text: 'Men and boys',
            value: '350',
            children: [
              {
                text: 'Men, 16 and over',
                value: '280'
              },
              {
                text: 'Boys, 2 to 15',
                value: '70'
              }
            ]
          },
          {
            text: 'Women and girls',
            value: '524',
            children: [
              {
                text: 'Women, 16 and over',
                value: '444'
              },
              {
                text: 'Girls, 2 to 15',
                value: '79'
              }
            ]
          },
          {
            text: 'Children under 2 years old',
            value: '50'
          },
          {
            text: 'Footwear',
            value: '185'
          },
          {
            text: 'Other apparel products and services',
            value: '211'
          }
        ]
      },
      {
        text: 'Transportation',
        value: '4304',
        children: [
          {
            text: 'Vehicle purchases (net outlay)',
            value: '1813',
            children: [
              {
                text: 'Cars and trucks, new',
                value: '1030'
              },
              {
                text: 'Cars and trucks, used',
                value: '756'
              },
              {
                text: 'Other vehicles',
                value: '27'
              },
              {
                text: 'Gasoline and motor oil',
                value: '1058'
              },
              {
                text: 'Other vehicle expenses',
                value: '1178',
                children: [
                  {
                    text: 'Vehicle finance charges',
                    value: '213'
                  },
                  {
                    text: 'Maintenance and repairs',
                    value: '481'
                  },
                  {
                    text: 'Vehicle insurance',
                    value: '349'
                  },
                  {
                    text: 'Vehicle, rental, leases, licenses, other charges',
                    value: '134'
                  }
                ]
              },
              {
                text: 'Public transportation',
                value: '255'
              }
            ]
          }
        ]
      },
      {
        text: 'Healthcare',
        value: '1049',
        children: [
          {
            text: 'Health insurance',
            value: '370'
          },
          {
            text: 'Medical services',
            value: '454'
          },
          {
            text: 'Drugs',
            value: '167'
          },
          {
            text: 'Medical supplies',
            value: '58'
          }
        ]
      },
      {
        text: 'Entertainment',
        value: '1055',
        children: [
          {
            text: 'Fees and admissions',
            value: '313'
          },
          {
            text: 'Audio and visual equipment and services',
            value: '322'
          },
          {
            text: 'Pets, toys, and playground equipment',
            value: '190'
          },
          {
            text: 'Other supplies, entertainment supplies, equipment, and services',
            value: '230'
          }
        ]
      },
      {
        text: 'Personal care products and services',
        value: '289'
      },
      {
        text: 'Reading',
        value: '132'
      },
      {
        text: 'Education',
        value: '303'
      },
      {
        text: 'Tobacco products and smoking supplies',
        value: '228'
      },
      {
        text: 'Miscellaneous',
        value: '451'
      },
      {
        text: 'Cash contributions',
        value: '706'
      },
      {
        text: 'Personal insurance and pensions',
        value: '1897',
        children: [
          {
            text: 'Life and other personal insurance',
            value: '300'
          },
          {
            text: 'Pensions and social security',
            value: '1598'
          }
        ]
      }
    ]
  }
];

let treeMapOptions = {
  aspectType: 'palette',
  splitType: 'horizontal',
  palette: [
    '#F44336', // food
    '#E91E63', // alcohol
    '#4CAF50', // housing
    '#673AB7', // apparel
    '#3F51B5', // transporation
    '#009688', // healthcare
    '#03A9F4', // entertainment
    '#00BCD4', // personal care
    '#009688', // reading
    '#9C27B0', // education
    '#8BC34A', // tobacco
    '#CDDC39', // misc
    '#FFEB3B', // cash contributions
    '#FFC107' // personal insurance
  ],
  box: {
    borderColor: '#fff',
    fontFamily: 'Lato',
    fontSize: '16px'
  }
};

let chartConfig = {
  type: 'treemap',
  options: treeMapOptions,
  tooltip: {
    backgroundColor: 'black'
  },
  series: chartData
};

zingchart.render({
  id: 'myChart',
  data: chartConfig,
  height: '100%',
  width: '100%'
});
