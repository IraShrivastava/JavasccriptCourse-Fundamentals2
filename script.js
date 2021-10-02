'use strict';

/* let hasDriversLicense = false;
const passTest = true;

if(passTest) hasDriversLicense = true;

if(hasDriversLicense) console.log('I can drive 😎:D') */

//const interface = 'Audio';
//const private = 534;

function logger(){
    console.log('My name is Ira');
}

// calling, running or invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges){
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges`;
    return juice;
}

const appleJuice = fruitProcessor(5,0)
console.log(appleJuice)
console.log(fruitProcessor(5,0))