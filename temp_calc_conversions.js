//  Temperature in Kelvin to start.
const kelvin = 293;
// Temperature equiv to Kelvin in Celsius is -273 from Kelvin
const celsius = kelvin - 273;
// now calculate the farhenheit conversion with this formula: Fahrenheit = Celsius * (9/5) + 32. Note: this variable should be set with let instead because it will change.
let fahrenheit = Math.floor((celsius * (9 / 5) + 32));
// Print using string interpolation the temp in farenheit.
console.log(`The temperature is ${fahrenheit}  degrees Fahrenheit.`)
// Extra credit cuz I'm extra :sunglasses: 
// Convert celsius to Newton scale using the equation Newton = Celsius * (33/100)
let newton = Math.floor(celsius * (33/100));
console.log(`The temperature is ${newton} Newton.` );

