// this is not the best way to collect data, but needed something fast!
const cvoc = {
  counts: [
    {
      label:"Mar 6",
      data:[
        { category: 'Total Cases', type: 'Cases', count: '4' },
        { category: 'Total Cases', type: 'Travel Related', count: '4' },
        { category: 'Male', type: 'Cases', count: '3' },
        { category: 'Male', type: 'Travel Related', count: '3' },
        { category: 'Female', type: 'Cases', count: '1' },
        { category: 'Female', type: 'Travel Related', count: '1' },
        { category: '18 - 49', type: 'Cases', count: '2' },
        { category: '18 - 49', type: 'Travel Related', count: '2' },
        { category: '50 - 64', type: 'Cases', count: '1' },
        { category: '50 - 64', type: 'Travel Related', count: '1' },
        { category: '≥ 65', type: 'Cases', count: '1' },
        { category: '≥ 65', type: 'Travel Related', count: '1' },
      ]
    },
    {
      label:"Mar 7",
      data:[
        { category: 'Total Cases', type: 'Cases', count: '4' },
        { category: 'Total Cases', type: 'Travel Related', count: '4' },
        { category: 'Male', type: 'Cases', count: '3' },
        { category: 'Male', type: 'Travel Related', count: '3' },
        { category: 'Female', type: 'Cases', count: '1' },
        { category: 'Female', type: 'Travel Related', count: '1' },
        { category: '18 - 49', type: 'Cases', count: '2' },
        { category: '18 - 49', type: 'Travel Related', count: '2' },
        { category: '50 - 64', type: 'Cases', count: '1' },
        { category: '50 - 64', type: 'Travel Related', count: '1' },
        { category: '≥ 65', type: 'Cases', count: '1' },
        { category: '≥ 65', type: 'Travel Related', count: '1' },
      ]
    },
    {
      label:"Mar 8",
      data:[
        { category: 'Total Cases', type: 'Cases', count: '4' },
        { category: 'Total Cases', type: 'Travel Related', count: '4' },
        { category: 'Male', type: 'Cases', count: '3' },
        { category: 'Male', type: 'Travel Related', count: '3' },
        { category: 'Female', type: 'Cases', count: '1' },
        { category: 'Female', type: 'Travel Related', count: '1' },
        { category: '18 - 49', type: 'Cases', count: '2' },
        { category: '18 - 49', type: 'Travel Related', count: '2' },
        { category: '50 - 64', type: 'Cases', count: '1' },
        { category: '50 - 64', type: 'Travel Related', count: '1' },
        { category: '≥ 65', type: 'Cases', count: '1' },
        { category: '≥ 65', type: 'Travel Related', count: '1' },
      ]
    },
    {
      label:"Mar 9",
      data:[
        { category: 'Total Cases', type: 'Cases', count: '5' },
        { category: 'Total Cases', type: 'Travel Related', count: '4' },
        { category: 'Total Cases', type: 'Person to Person Spread*', count: '1' },
        { category: 'Male', type: 'Cases', count: '4' },
        { category: 'Male', type: 'Travel Related', count: '3' },
        { category: 'Male', type: 'Person to Person Spread*', count: '1' },
        { category: 'Female', type: 'Cases', count: '1' },
        { category: 'Female', type: 'Travel Related', count: '1' },
        { category: '18 - 49', type: 'Cases', count: '3' },
        { category: '18 - 49', type: 'Travel Related', count: '2' },
        { category: '18 - 49', type: 'Person to Person Spread*', count: '1' },
        { category: '50 - 64', type: 'Cases', count: '1' },
        { category: '50 - 64', type: 'Travel Related', count: '1' },
        { category: '≥ 65', type: 'Cases', count: '1' },
        { category: '≥ 65', type: 'Travel Related', count: '1' },
      ]
    },
    {
      label:"Mar 10",
      data:[
        { category: 'Total Cases', type: 'Cases', count: '5' },
        { category: 'Total Cases', type: 'Travel Related', count: '4' },
        { category: 'Total Cases', type: 'Person to Person Spread*', count: '1' },
        { category: 'Male', type: 'Cases', count: '4' },
        { category: 'Male', type: 'Travel Related', count: '3' },
        { category: 'Male', type: 'Person to Person Spread*', count: '1' },
        { category: 'Female', type: 'Cases', count: '1' },
        { category: 'Female', type: 'Travel Related', count: '1' },
        { category: '18 - 49', type: 'Cases', count: '3' },
        { category: '18 - 49', type: 'Travel Related', count: '2' },
        { category: '18 - 49', type: 'Person to Person Spread*', count: '1' },
        { category: '50 - 64', type: 'Cases', count: '1' },
        { category: '50 - 64', type: 'Travel Related', count: '1' },
        { category: '≥ 65', type: 'Cases', count: '1' },
        { category: '≥ 65', type: 'Travel Related', count: '1' },
      ]
    },
    {
      label:"Mar 11",
      data:[
        { category: 'Total Cases', type: 'Cases', count: '6' },
        { category: 'Total Cases', type: 'Travel Related', count: '5' },
        { category: 'Total Cases', type: 'Person to Person Spread*', count: '1' },
        { category: 'Total Cases', type: 'Community Acquired**', count: '1' },
        { category: 'Male', type: 'Cases', count: '4' },
        { category: 'Male', type: 'Travel Related', count: '3' },
        { category: 'Male', type: 'Person to Person Spread*', count: '1' },
        { category: 'Female', type: 'Cases', count: '2' },
        { category: 'Female', type: 'Travel Related', count: '2' },
        { category: '18 - 49', type: 'Cases', count: '3' },
        { category: '18 - 49', type: 'Travel Related', count: '2' },
        { category: '18 - 49', type: 'Person to Person Spread*', count: '1' },
        { category: '50 - 64', type: 'Cases', count: '1' },
        { category: '50 - 64', type: 'Travel Related', count: '1' },
        { category: '≥ 65', type: 'Cases', count: '2' },
        { category: '≥ 65', type: 'Travel Related', count: '2' },
      ]
    },
    {
      label:"Mar 12",
      data:[
        { category: 'Total Cases', type: 'Cases', count: '6' },
        { category: 'Total Cases', type: 'Travel Related', count: '5' },
        { category: 'Total Cases', type: 'Person to Person Spread*', count: '1' },
        { category: 'Total Cases', type: 'Community Acquired**', count: '1' },
        { category: 'Male', type: 'Cases', count: '4' },
        { category: 'Male', type: 'Travel Related', count: '3' },
        { category: 'Male', type: 'Person to Person Spread*', count: '1' },
        { category: 'Female', type: 'Cases', count: '2' },
        { category: 'Female', type: 'Travel Related', count: '2' },
        { category: '18 - 49', type: 'Cases', count: '3' },
        { category: '18 - 49', type: 'Travel Related', count: '2' },
        { category: '18 - 49', type: 'Person to Person Spread*', count: '1' },
        { category: '50 - 64', type: 'Cases', count: '1' },
        { category: '50 - 64', type: 'Travel Related', count: '1' },
        { category: '≥ 65', type: 'Cases', count: '2' },
        { category: '≥ 65', type: 'Travel Related', count: '2' },
      ]
    },
    {
      label:"Mar 13",
      data:[
        { category: 'Total Cases', type: 'Cases', count: '13' },
        { category: 'Total Cases', type: 'Travel Related', count: '10' },
        { category: 'Total Cases', type: 'Person to Person Spread*', count: '2' },
        { category: 'Total Cases', type: 'Community Acquired**', count: '1' },
        { category: 'Male', type: 'Cases', count: '9' },
        { category: 'Male', type: 'Travel Related', count: '7' },
        { category: 'Male', type: 'Person to Person Spread*', count: '2' },
        { category: 'Female', type: 'Cases', count: '4' },
        { category: 'Female', type: 'Travel Related', count: '3' },
        { category: 'Female', type: 'Community Acquired**', count: '1' },
        { category: '18 - 49', type: 'Cases', count: '5' },
        { category: '18 - 49', type: 'Travel Related', count: '3' },
        { category: '18 - 49', type: 'Person to Person Spread*', count: '2' },
        { category: '50 - 64', type: 'Cases', count: '5' },
        { category: '50 - 64', type: 'Travel Related', count: '4' },
        { category: '50 - 64', type: 'Community Acquired**', count: '1' },
        { category: '≥ 65', type: 'Cases', count: '3' },
        { category: '≥ 65', type: 'Travel Related', count: '3' },
      ]
    },
    {
      label:"Mar 14",
      data:[
        { category: 'Total Cases', type: 'Cases', count: '14' },
        { category: 'Total Cases', type: 'Travel Related', count: '11' },
        { category: 'Total Cases', type: 'Person to Person Spread*', count: '2' },
        { category: 'Total Cases', type: 'Community Acquired**', count: '1' },
        { category: 'Male', type: 'Cases', count: '9' },
        { category: 'Male', type: 'Travel Related', count: '7' },
        { category: 'Male', type: 'Person to Person Spread*', count: '2' },
        { category: 'Female', type: 'Cases', count: '5' },
        { category: 'Female', type: 'Travel Related', count: '4' },
        { category: 'Female', type: 'Community Acquired**', count: '1' },
        { category: '18 - 49', type: 'Cases', count: '6' },
        { category: '18 - 49', type: 'Travel Related', count: '4' },
        { category: '18 - 49', type: 'Person to Person Spread*', count: '2' },
        { category: '50 - 64', type: 'Cases', count: '5' },
        { category: '50 - 64', type: 'Travel Related', count: '4' },
        { category: '50 - 64', type: 'Community Acquired**', count: '1' },
        { category: '≥ 65', type: 'Cases', count: '3' },
        { category: '≥ 65', type: 'Travel Related', count: '3' },
      ]
    },
    {
      label:"Mar 15",
      data:[
        { category: 'Total Cases', type: 'Cases', count: '17' },
        { category: 'Total Cases', type: 'Travel Related', count: '11' },
        { category: 'Total Cases', type: 'Person to Person Spread*', count: '3' },
        { category: 'Total Cases', type: 'Community Acquired**', count: '3' },
        { category: 'Male', type: 'Cases', count: '12' },
        { category: 'Male', type: 'Travel Related', count: '7' },
        { category: 'Male', type: 'Person to Person Spread*', count: '3' },
        { category: 'Male', type: 'Community Acquired**', count: '2' },
        { category: 'Female', type: 'Cases', count: '5' },
        { category: 'Female', type: 'Travel Related', count: '4' },
        { category: 'Female', type: 'Community Acquired**', count: '1' },
        { category: '18 - 49', type: 'Cases', count: '7' },
        { category: '18 - 49', type: 'Travel Related', count: '4' },
        { category: '18 - 49', type: 'Person to Person Spread*', count: '3' },
        { category: '50 - 64', type: 'Cases', count: '6' },
        { category: '50 - 64', type: 'Travel Related', count: '4' },
        { category: '50 - 64', type: 'Community Acquired**', count: '2' },
        { category: '≥ 65', type: 'Cases', count: '4' },
        { category: '≥ 65', type: 'Travel Related', count: '3' },
        { category: '≥ 65', type: 'Community Acquired**', count: '1' },  
      ]
    },
    {
      label:"Mar 16",
      data:[
        { category: 'Total Cases', type: 'Cases', count: '22' },
        { category: 'Total Cases', type: 'Travel Related', count: '13' },
        { category: 'Total Cases', type: 'Person to Person Spread*', count: '4' },
        { category: 'Total Cases', type: 'Community Acquired**', count: '4' },
        { category: 'Total Cases', type: 'Under Investigation', count: '1' },
        { category: 'Male', type: 'Cases', count: '14' },
        { category: 'Male', type: 'Travel Related', count: '7' },
        { category: 'Male', type: 'Person to Person Spread*', count: '4' },
        { category: 'Male', type: 'Community Acquired**', count: '3' },
        { category: 'Female', type: 'Cases', count: '8' },
        { category: 'Female', type: 'Travel Related', count: '6' },
        { category: 'Female', type: 'Community Acquired**', count: '1' },
        { category: 'Female', type: 'Under Investigation', count: '1' },
        { category: '18 - 49', type: 'Cases', count: '11' },
        { category: '18 - 49', type: 'Travel Related', count: '5' },
        { category: '18 - 49', type: 'Person to Person Spread*', count: '4' },
        { category: '18 - 49', type: 'Community Acquired**', count: '1' },
        { category: '18 - 49', type: 'Under Investigation', count: '1' },
        { category: '50 - 64', type: 'Cases', count: '7' },
        { category: '50 - 64', type: 'Travel Related', count: '5' },
        { category: '50 - 64', type: 'Community Acquired**', count: '2' },
        { category: '≥ 65', type: 'Cases', count: '4' },
        { category: '≥ 65', type: 'Travel Related', count: '3' },
        { category: '≥ 65', type: 'Community Acquired**', count: '1' },  
      ]
    },
    {
      label:"Mar 17",
      data:[
        { category: 'Total Cases', type: 'Cases', count: '29' },
        { category: 'Total Cases', type: 'Travel Related', count: '15' },
        { category: 'Total Cases', type: 'Person to Person Spread*', count: '5' },
        { category: 'Total Cases', type: 'Community Acquired**', count: '8' },
        { category: 'Total Cases', type: 'Under Investigation', count: '1' },
        { category: 'Male', type: 'Cases', count: '19' },
        { category: 'Male', type: 'Travel Related', count: '8' },
        { category: 'Male', type: 'Person to Person Spread*', count: '5' },
        { category: 'Male', type: 'Community Acquired**', count: '6' },
        { category: 'Female', type: 'Cases', count: '10' },
        { category: 'Female', type: 'Travel Related', count: '7' },
        { category: 'Female', type: 'Community Acquired**', count: '2' },
        { category: 'Female', type: 'Under Investigation', count: '1' },
        { category: '18 - 49', type: 'Cases', count: '14' },
        { category: '18 - 49', type: 'Travel Related', count: '6' },
        { category: '18 - 49', type: 'Person to Person Spread*', count: '5' },
        { category: '18 - 49', type: 'Community Acquired**', count: '2' },
        { category: '18 - 49', type: 'Under Investigation', count: '1' },
        { category: '50 - 64', type: 'Cases', count: '9' },
        { category: '50 - 64', type: 'Travel Related', count: '6' },
        { category: '50 - 64', type: 'Community Acquired**', count: '3' },
        { category: '≥ 65', type: 'Cases', count: '6' },
        { category: '≥ 65', type: 'Travel Related', count: '3' },
        { category: '≥ 65', type: 'Community Acquired**', count: '3' },  
      ]
    },
    {
      label:"Mar 18",
      data:[
        { category: 'Total Cases', type: 'Cases', count: '42' },
        { category: 'Total Cases', type: 'Travel Related', count: '22' },
        { category: 'Total Cases', type: 'Person to Person Spread*', count: '7' },
        { category: 'Total Cases', type: 'Community Acquired**', count: '12' },
        { category: 'Total Cases', type: 'Under Investigation', count: '1' },
        { category: 'Male', type: 'Cases', count: '26' },
        { category: 'Male', type: 'Travel Related', count: '13' },
        { category: 'Male', type: 'Person to Person Spread*', count: '6' },
        { category: 'Male', type: 'Community Acquired**', count: '7' },
        { category: 'Female', type: 'Cases', count: '16' },
        { category: 'Female', type: 'Travel Related', count: '9' },
        { category: 'Female', type: 'Person to Person Spread*', count: '1' },
        { category: 'Female', type: 'Community Acquired**', count: '5' },
        { category: 'Female', type: 'Under Investigation', count: '1' },
        { category: '18 - 49', type: 'Cases', count: '21' },
        { category: '18 - 49', type: 'Travel Related', count: '10' },
        { category: '18 - 49', type: 'Person to Person Spread*', count: '5' },
        { category: '18 - 49', type: 'Community Acquired**', count: '5' },
        { category: '18 - 49', type: 'Under Investigation', count: '1' },
        { category: '50 - 64', type: 'Cases', count: '13' },
        { category: '50 - 64', type: 'Travel Related', count: '8' },
        { category: '50 - 64', type: 'Person to Person Spread*', count: '2' },
        { category: '50 - 64', type: 'Community Acquired**', count: '3' },
        { category: '≥ 65', type: 'Cases', count: '8' },
        { category: '≥ 65', type: 'Travel Related', count: '4' },
        { category: '≥ 65', type: 'Community Acquired**', count: '4' },  
      ]
    },
    {
      label:"Mar 19",
      data:[
        { category: 'Total Cases', type: 'Cases', count: '53' },
        { category: 'Total Cases', type: 'Travel Related', count: '25' },
        { category: 'Total Cases', type: 'Person to Person Spread*', count: '7' },
        { category: 'Total Cases', type: 'Community Acquired**', count: '19' },
        { category: 'Total Cases', type: 'Under Investigation', count: '2' },
        { category: 'Male', type: 'Cases', count: '33' },
        { category: 'Male', type: 'Travel Related', count: '14' },
        { category: 'Male', type: 'Person to Person Spread*', count: '6' },
        { category: 'Male', type: 'Community Acquired**', count: '12' },
        { category: 'Male', type: 'Under Investigation', count: '1' },
        { category: 'Female', type: 'Cases', count: '20' },
        { category: 'Female', type: 'Travel Related', count: '11' },
        { category: 'Female', type: 'Person to Person Spread*', count: '1' },
        { category: 'Female', type: 'Community Acquired**', count: '7' },
        { category: 'Female', type: 'Under Investigation', count: '1' },
        { category: '18 - 49', type: 'Cases', count: '26' },
        { category: '18 - 49', type: 'Travel Related', count: '11' },
        { category: '18 - 49', type: 'Person to Person Spread*', count: '6' },
        { category: '18 - 49', type: 'Community Acquired**', count: '8' },
        { category: '18 - 49', type: 'Under Investigation', count: '1' },
        { category: '50 - 64', type: 'Cases', count: '17' },
        { category: '50 - 64', type: 'Travel Related', count: '10' },
        { category: '50 - 64', type: 'Person to Person Spread*', count: '1' },
        { category: '50 - 64', type: 'Community Acquired**', count: '6' },
        { category: '≥ 65', type: 'Cases', count: '10' },
        { category: '≥ 65', type: 'Travel Related', count: '4' },
        { category: '≥ 65', type: 'Community Acquired**', count: '5' },
        { category: '≥ 65', type: 'Under Investigation', count: '1' },   
      ]
    },
    {
      label:"Mar 20",
      data:[
        { category: 'Total Cases', type: 'Cases', count: '65' },
        { category: 'Total Cases', type: 'Travel Related', count: '28' },
        { category: 'Total Cases', type: 'Person to Person Spread*', count: '7' },
        { category: 'Total Cases', type: 'Community Acquired**', count: '26' },
        { category: 'Total Cases', type: 'Under Investigation', count: '4' },
        { category: 'Male', type: 'Cases', count: '39' },
        { category: 'Male', type: 'Travel Related', count: '16' },
        { category: 'Male', type: 'Person to Person Spread*', count: '6' },
        { category: 'Male', type: 'Community Acquired**', count: '15' },
        { category: 'Male', type: 'Under Investigation', count: '2' },
        { category: 'Female', type: 'Cases', count: '26' },
        { category: 'Female', type: 'Travel Related', count: '12' },
        { category: 'Female', type: 'Person to Person Spread*', count: '1' },
        { category: 'Female', type: 'Community Acquired**', count: '11' },
        { category: 'Female', type: 'Under Investigation', count: '2' },
        { category: '<18', type: 'Cases', count: '1' },
        { category: '<18', type: 'Community Acquired**', count: '1' },
        { category: '18 - 49', type: 'Cases', count: '33' },
        { category: '18 - 49', type: 'Travel Related', count: '14' },
        { category: '18 - 49', type: 'Person to Person Spread*', count: '6' },
        { category: '18 - 49', type: 'Community Acquired**', count: '10' },
        { category: '18 - 49', type: 'Under Investigation', count: '3' },
        { category: '50 - 64', type: 'Cases', count: '19' },
        { category: '50 - 64', type: 'Travel Related', count: '10' },
        { category: '50 - 64', type: 'Person to Person Spread*', count: '1' },
        { category: '50 - 64', type: 'Community Acquired**', count: '8' },
        { category: '≥ 65', type: 'Cases', count: '12' },
        { category: '≥ 65', type: 'Travel Related', count: '4' },
        { category: '≥ 65', type: 'Community Acquired**', count: '7' },
        { category: '≥ 65', type: 'Under Investigation', count: '1' },   
      ]
    },
  ]
}