const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

$(document).ready(readyNow);

console.log( employees );

let employeeInfo = [];

for(let person of employees){
  employeeInfo.push(returnEmployeeInfo(person));
}

console.log(employeeInfo);




//functions

function calculateBonus(rating, salary, seniority){
  let bonus = 0;
  // apply ratings
  if(rating <= 2){
    return bonus;
  }else if(rating == 3){
    bonus += 0.04;
  }else if(rating == 4){
    bonus += 0.06;
  }else{
    bonus += 0.1;
  }
  //check for senior bonus
  if(seniority.length <= 4){
    bonus += 0.05;
  }
  //check for salary cap
  if(salary > 65000){
    bonus -= 0.01;
  }
  //check for bonus cap
  if(bonus > 0.13){
    return 0.13;
  }else{
    return bonus;
  }
}// end calculateBonus

function returnEmployeeInfo(people){
  let person = {}
  person.name = people.name;
  person.bonusPercentage = calculateBonus(people.reviewRating, people.annualSalary, people.employeeNumber) * 100;
  person.totalBonus = calculateBonus(people.reviewRating, people.annualSalary, people.employeeNumber) * people.annualSalary;
  person.totalCompensation = person.totalBonus + Number(people.annualSalary);

  return person;
}

function displayEmployeeInfo(){
  let el = $('#employeeBonusInfo');
  el.empty();

  for(let person of employeeInfo){
    el.append(`<li>${person.name} should recieve a bonus of ${person.bonusPercentage}%. With their $${person.totalBonus} bonus, their total compensation will be $${person.totalCompensation}.`);
  }
}

function readyNow(){
  $('#calculateButton').on('click', displayEmployeeInfo);
}