// Variables

// Calculate area of a rectangle

let areaLength = 10;
let areaWidth = 10;

console.log(`The area of the rectangle is: ${areaLength*areaWidth}`);

// The Temperature Converter

let celsiusTemperature = 100;
let fahrenheitTemperature = (celsiusTemperature * 9/5) + 32;

console.log(`${celsiusTemperature}°C is ${fahrenheitTemperature}°F`);

let fahrenheitTemperature2 = 212;
let celsiusTemperature2 = (fahrenheitTemperature2-32) * 5/9;

console.log(`${fahrenheitTemperature2}°F is ${celsiusTemperature2}°C.`);



// For loop

// Numbers' summations
let Numbers = [23,54,32,87,47];
let sum = 0;

for (let i = 0; i < Numbers.length; i++)
{
    sum += Numbers[i];
}

console.log(`The Sum of array [${Numbers}] is ${sum}`);

//Maximum number
let arr1 = [16,4,2,0,19,6];
let maxiumNumber = arr1[0];

for (let i = 0; i < arr1.length; i++)
{
    if(arr1[i] > maxiumNumber)
    {
        maxiumNumber = arr1[i];
    }
}
console.log(`Maximum number of array [${arr1}] is ${maxiumNumber}`);

//Reverse Array
let arr2 = [1,2,3,4,5,6,7,8,9,10];
console.log(`Array [${arr2}] in reverse is [${arr2.reverse()}]`); // hehehe you don't have to use a for loop



// Nested for loop

//stars pattern
let a = 10;
console.log('Here is a triangle')
for (let i = 0; i <= a; i++)
{
    let str = "";
    for (let j = 0; j < i; j++)
    {
        str+="*"
    }
    console.log(str);
    
}