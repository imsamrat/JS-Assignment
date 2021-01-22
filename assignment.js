//https://github.com/s-m-samrat/assignment-3

//https://github.com/s-m-samrat/assignment-3

//Kilometer to Meter Convert
function kilometerToMeter(kilometer) {
    if (kilometer > 0) {
        var meter = kilometer * 1000; //we know that, 1 kilometer = 1000 meter. 
    }
    else{
        meter = "Please enter a positive value";
    }
    return meter;
}
/*var result = kilometerToMeter(5);
console.log(result);*/

//Budget Calculator

function budgetCalculator(clock, phone, laptop) {
    if (clock > 0 && phone > 0 && laptop > 0){
        var clockCost = clock * 50;
    var phoneCost = phone * 100;
    var laptopCost = laptop * 500;
    var totalExpense = clockCost + phoneCost + laptopCost;
    }
    else{
        totalExpense = "Please Enter a positive Value";
    }
    return totalExpense;
}
/*var totalBudget = budgetCalculator(5, 10, 3);
console.log(totalBudget);*/

//Hotel Cost

function hotelCost(days) {
    if (days > 0) {
        if (days <= 10) {
            cost = days * 100;
        }
        else if (days <= 20) {
            var firstTenDays = 10 * 100; // First Ten Days Per Night 100Tk Hotel Rent.
            var remainingDays = days - 10;
            var secondTenDays = remainingDays * 80; // 11th-20th Days per night 20% Discount thatsway (100-20 = 80)
            cost = firstTenDays + secondTenDays;
        }
        else {
            var firstTenDays = 10 * 100;
            var secondTenDays = 10 * 80;
            var remainingDays = days - 20;
            var afterTwentyDays = remainingDays * 50; //After Twenty Days per night 50tk Hotel Rent.
            cost = firstTenDays + secondTenDays + afterTwentyDays;
        }
    }
    else {
        cost = "Please Enter a Positive Value";
    }
    return cost;
}
/*var totalCost = hotelCost(20);
console.log(totalCost);*/

// Mega Friend

function megaFriend(friend){
    var longest = '';
    for (var i = 0; i < friend.length; i++) {
        if (friend[i].length > longest.length)
            longest = friend[i];
    }
    return longest;
}
/*var longestName = megaFriend(['Nayeem', 'Samrat', 'Rony']);
console.log(longestName);*/