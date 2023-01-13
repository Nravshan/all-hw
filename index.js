// for (let i = 5; i >= 1; i--) {
//     for (let k = 1; k <= i; k++) {
//         document.write('* ')
//     }
//     document.write('<br>')
// }

let arr = [
  {
    id: 1,
    name: "AZIZs_KABLUK",
    budget: 500000,
    tax: 12,
    expensesPerYear: [
      {
        for: "design",
        total: 60000,
      },
      {
        for: "material",
        total: 70000,
      },
      {
        for: "place",
        total: 120000,
      },
    ],
  },
  {
    id: 2,
    name: "KAMERON_CINEMA",
    budget: 600000,
    tax: 12,
    expensesPerYear: [
      {
        for: "camera",
        total: 90000,
      },
      {
        for: "actors",
        total: 140000,
      },
      {
        for: "electricity",
        total: 50000,
      },
    ],
  },
  {
    id: 3,
    name: "ISKANDARs_ZOO",
    budget: 450000,
    tax: 12,
    expensesPerYear: [
      {
        for: "animals",
        total: 100000,
      },
      {
        for: "cloune",
        total: 15000,
      },
      {
        for: "food",
        total: 70000,
      },
    ],
  },
  {
    id: 4,
    name: "AMINs_SOOOO",
    budget: 800000,
    tax: 12,
    expensesPerYear: [
      {
        for: "house",
        total: 200000,
      },
      {
        for: "cars",
        total: 150000,
      },
      {
        for: "family",
        total: 300000,
      },
    ],
  },
];
let plusArr = []
let minusArr = []

for (let item of arr) {
  item.expensesPerprocent = 0
  item.expensesPerMonth = 0
  item.expensesTotal = 0 
    
  for (let itemTwo of item.expensesPerYear) {
    // const total = item.total + itemTwo.total
    item.expensesPerMonth += Math.round(itemTwo.total / 12)
  }
  let per = item.budget / 100 * 70
  // console.log(per);
  if(item.budget < per){
    plusArr++
  }else{
    minusArr++
  }
  item.expensesPerprocent = Math.round(item.expensesPerMonth * 100 / (item.budget / 12))
  item.expensesTotal = item.budget - (item.expensesPerYear[0].total + item.expensesPerYear[1].total + item.expensesPerYear[2].total)

}
console.log(arr);







