

import{salesByWeek}from "./sales.js"
import{ allCars }from "./cars.js"


// var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

// let whatIExpected = integers.sort( (current, next) => {
//     return current - next
//   })
//   console.log(whatIExpected)
// let rev = whatIExpected.reverse()
// console.log(rev)
//  rev.filter((num) < 19 )

// .map((num * 1.5) -1)

// .reduce(( current, next) => current + next )

// console.log(rev)

// var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
//  let chainingResults = integers
//  .sort((a,b) => b-a)
//  .filter((num) => num < 19)
//  .map((num) => (num * 1.5) -1)
//  .reduce(( current, next) => current + next )

//  console.log(chainingResults)

// reverse
// sort
// find
// reduce

// Sort the numbers in descending order (10, 9, 8, 7, etc).
// Remove any integers greater than 19.
// Multiply each remaining number by 1.5 and then subtract 1.
// Then output (either in the DOM or the console) the sum of all the resulting numbers.


const outputElement = document.querySelector("#app");

// Iterate the array of cars. Individual objects stored in `car`.
allCars.forEach(car => {
  // Iterate all of the values of the current car
  for (const value of Object.values(car)) {
    outputElement.innerHTML += `<div>${value}</div>`;
  }
});

const dateVisted = "visitDate";
const owed = "amountBilled";
const patient = "patientName";

const bill = {
  officeName: "Dr. Brawners Inspections",
  streetAddress: "69 wayco TX",
  doctorName: "Dr. Brawn",
  patientName: "Sampson Simpson",
  visitDate: "06/99/1578",
  amountBilled: 1809204,
  dateDue: "06/100/1578"
};
console.log(bill[dateVisted], bill[owed], bill[patient]);

const billOutPut = document.querySelector("#bill-Values");

for (let value of Object.values(bill)) {
  billOutPut.innerHTML += `<li> ${value}</li>`;
}

const bug = {
  flying: true,
  legs: 6
};

for (const entry of Object.entries(bug)) {
  console.log(entry);
}

// [ 'flying', true ]
// [ 'legs', 6 ]​​​​​
outputElement.innerHTML += "<h1>Car List</h1>";

allCars.forEach(car => {
  outputElement.innerHTML += "<hr/>";

  for (const entry of Object.entries(car)) {
    outputElement.innerHTML += `<div>${entry[0]}: ${entry[1]}</div>`;
  }
});

document.querySelector("#dinners");


const dinnerArr = [
 {
  name: "speghetti",
  size: "two feet long",
  weight: "39lbs",
  ethnicity: "New Jersey"
},
{
  name: "burgers",
  size: "10 inches long",
  weight: "10lbs",
  ethnicity: "New York"
},
{
  name: "sammie",
  size: "small",
  weight: "heavy",
  ethnicity: "New Hampshire"
}
]
dinnerArr.forEach(car => {
    outputElement.innerHTML += "<hr/>";
  
    for (const entry of Object.entries(car)) {
      outputElement.innerHTML += `<article>${entry[0]}: ${entry[1]}</article>`;
    }
  });
  
  const contain = document.querySelector("#container")

  salesByWeek.forEach(car => {
    outputElement.innerHTML += "<hr/>";
  
    for (const entry of Object.entries(car["vehicle"])) {
      outputElement.innerHTML += `<article>${entry[0]}: ${entry[1]}</article>`;
    }
    contain.innerHTML += `<ol>${car.sales_agent["first_name"]}</ol>
    <li>Gross Profit: ${car.gross_profit} </li>`
  });