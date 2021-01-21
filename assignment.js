//https://github.com/s-m-samrat/assignment-3

//Kilometer to Meter Convert
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000; //we know that, 1 kilometer = 1000 meter
    return meter;
}

var result = kilometerToMeter(5);
console.log(result);

//Budget Calculator

function budgetCalculator(clock, phone, laptop){
    var clockCost = clock * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    var totalExpense = clockCost + phoneCost + laptopCost;
    return totalExpense; 
}
var totalBudget = budgetCalculator(5, 10, 3);
console.log(totalBudget);