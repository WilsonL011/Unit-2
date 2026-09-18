// ---------- Problem 4: Shipping Cost Calculator ----------
// If isMember is true:
//   weight <= 5  -> 0 (free)
//   weight > 5   -> 3
// If isMember is false:
//   weight <= 1  -> 5
//   weight <= 5  -> 8
//   weight > 5   -> 12


function getShippingCost(weight, isMember) {
if (isMember) {
    if (weight <=5)
        return '0';
    else if (weight >5)
        return '3';
    }
else {
       if (weight <=1)
        return '5';
    else if (weight <=5)
        return '8';
       else if (weight >5)
        return '12';
}
    

}

console.log(getShippingCost(3, true)); // 0
console.log(getShippingCost(8, true)); // 3
console.log(getShippingCost(0.5, false)); // 5
console.log(getShippingCost(4, false)); // 8
console.log(getShippingCost(10, false)); // 12


//gak says hi
//hi gak