// ---------- Problem 3: FizzBuzz ----------
// Return:
//   "Fizz"     if num is divisible by 3
//   "Buzz"     if num is divisible by 5
//   "FizzBuzz" if num is divisible by both 3 and 5
//   otherwise, num converted to a string


function fizzBuzz(num) {
if (num %3 == 0)
    return "Fizz"; 
else if (num %5 == 0)
    return "Buzz";
else if (num %3 == 0 && num%5 == 0)
    return "FizzBuzz";
else 
 return String(num);
}

console.log(fizzBuzz(3)); // "Fizz"
console.log(fizzBuzz(5)); // "Buzz"
console.log(fizzBuzz(15)); // "FizzBuzz"
console.log(fizzBuzz(7)); // "7"

//gak says hi