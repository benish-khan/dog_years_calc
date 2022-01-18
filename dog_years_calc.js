const myAge = 99;
// first 2 years count as 10.5 dog yrs each. So the assignment operator here will mul the value by 10.5.
let earlyYears = 2;
// same as  x = x * 10.5;
earlyYears *= 10.5;
// this var will account for all years beyond the first 2.
let laterYears = myAge - 2;
// this accounts for 4 years for all yrs beyond first 2.
laterYears *= 4;

console.log(earlyYears); // 21
console.log(laterYears); // 388

// set new var to add early and later years
myAgeInDogYears = earlyYears + laterYears
console.log(myAgeInDogYears) // 409

// set a var to your name and call the lower case all char's method on it.
let myName = 'Benish Khan'.toLowerCase()
console.log(myName)

console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)
