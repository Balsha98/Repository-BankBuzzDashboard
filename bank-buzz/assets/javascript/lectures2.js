"use strict";

/*
// ----- Numbers, Dates, Intl & Timers -----
console.log(23 === 23.0);

// Base 10 (0 - 9)
// Base 2 (0 & 1)
console.log(0.1 + 0.2);
console.log(0.1 + 0.2 === 0.3);

// Converting str -> num
console.log(Number("23"));
console.log(+"23");

// Parsing
// In this case, the String needs
// to begin with a digit.
// Usually using it when
// extracting CSS data.
console.log(Number.parseInt("30px", 10));
console.log(Number.parseInt("p30px", 10));

// Using a namespace (Number)
console.log(Number.parseFloat("  2.5rem  "));
console.log(Number.parseInt("  2.5rem  "));

// We can also call them like so:
console.log(parseFloat("  2.5rem  "));

// Check if it's a number.
// Only using if value is NaN.
console.log(Number.isNaN(20));
console.log(Number.isNaN("23"));
console.log(Number.isNaN(+"23X"));
console.log(Number.isNaN(22 / 0));

// isFinite() method.
// Best way of checking if
// value is a Number.
console.log(Number.isFinite(20));
console.log(Number.isFinite("20"));
console.log(Number.isFinite(+"20N"));
console.log(Number.isFinite(22 / 0));

// isInteger() method.
console.log(Number.isInteger(4.5));
console.log(Number.isInteger(4));
console.log(Number.isInteger(4.0));
console.log(Number.isFinite(4.5));


// Math & Rounding
// Math does do type coercion.
// sqrt() method
console.log(Math.sqrt(25));
console.log(25 ** (1 / 2));
console.log(8 ** (1 / 3));

// max() & min()
// Both of these do type coercion,
// but cannot parse the data.
console.log(Math.max(5, 13, 18, 23, 4));
console.log(Math.max(5, 8, 18, "23", 4));
console.log(Math.min(5, 13, 18, 23, 4));
console.log(Math.min(5, 8, 18, "23", 4));

// Math constants.
console.log(Math.PI * Number.parseFloat("10px") ** 2);

// random() method.
console.log(Math.trunc(Math.random() * 6 + 1));

const randomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min) + 1) + min;
};
console.log(randomInt(10, 20));

// Rounding integers.
// Truncates decimal parts.
console.log(Math.trunc(23.3));

// round() method
// Rounds the number to
// the nearest integer.
console.log(Math.round(23.3));
console.log(Math.round(23.9));

// ceil() method
console.log(Math.ceil(23.3));
console.log(Math.ceil(23.9));

// floor() method.
console.log(Math.floor(23.3));
console.log(Math.floor("23.9"));

console.log(Math.trunc(-23.3));
console.log(Math.floor(-23.3));

// Rounding floats (decimals).
// toFixed() returns a String.
// Because numbers are primitive
// type, JS boxes these values
// into objects, in order to be
// able to call methods.
console.log((2.7).toFixed(0));
console.log((2.7).toFixed(3));
console.log(+(2.345).toFixed(2));


// The remainder operator.
console.log(5 % 2);
console.log(5 / 2); // 5 = 2 * 2 + 1
console.log(8 % 3);
console.log(8 / 3); // 8 = 2 * 3 + 2

// Checking for even * odd numbers.
console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = (num) => num % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(81));

document.querySelector("#current_balance").addEventListener("click", function () {
    console.log(
        Array.from(document.querySelectorAll(".transaction")).forEach((div, i) => {
            if (i % 2 === 0) {
                div.style.backgroundColor = "cyan";
            } else {
                div.style.backgroundColor = "black";
            }
        })
    );
});


// Numeric Separators (, or .)
// using the _
// _ has to be placed between digits.
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.1415;
console.log(PI);

// Only use _ separators in code,
// not in String(s).
console.log(Number("230_000"));
console.log(Number.parseInt("230_000"));


// Working with BigInt
// This would be the
// largest safe number
// that JS can represent.
console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER);
console.log(2 ** 53 + 1);
console.log(2 ** 53 + 2);
console.log(2 ** 53 + 3);
console.log(2 ** 53 + 4);

// Not precise.
console.log(242351413513513414513513512415412312);

// Implementing BigInt.
console.log(242351413513513414513513512415412312n);
console.log(BigInt(2423514135135));

// Operations works just
// as before with BigInt.
console.log(10000n + 10000n);
console.log(12314135413132124141n * 12413513512125131n);

// We cannot combine int(s) of
// different types.
const huge = 135135234524623411412n;
const regular = 23;
console.log(huge * BigInt(regular));

// === does not accept
// type coercion.
// Also, here are
// exceptions when
// comparing 2 diff. types.
console.log(20n > 15);
console.log(20n === 20);
console.log(typeof 20n);
console.log(20n == 20);
console.log(20n == "20");

// BigInt(s) can be concat() with String(s).
console.log(huge + " is really big!!!");

// Math methods do not support BigInt(s).
// console.log(Math.sqrt(16n));

// Divisions
// Dividing BigInt(s)
// returns the closest BigInt.
console.log(14n / 3n);
console.log(10 / 3);


// Creating Dates
// There are 4 ways of creating Dates.
// 1. Date
const now = new Date();
console.log(now);

// 2. Parsing String
// This could end up being falsy.
console.log(new Date("Jan 29 2024 07:13:25"));
console.log(new Date("June 25, 2023"));

// String given by JS is okay.
console.log(new Date("2019-11-18T21:31:17.178Z"));

// 3. Value by value inside the constructor.
// Months are 0 based.
console.log(new Date(2037, 10, 19, 15, 23, 5));
console.log(new Date(2037, 10, 33));

// Getting the "unix" time.
console.log(new Date(0));
// 3 days after
// This essentially gives us a timestamp.
console.log(new Date(3 * 24 * 60 * 60 * 1000));


// 4. Using different methods, as Date()
// is a special type of object.
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
// 0 based. (month)
console.log(future.getDate());
// 0 based. (day of the week)
console.log(future.getDay());
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());
// Nicely formatted String.
// Great for storing Dates as String(s).
console.log(future.toISOString());
// Milliseconds passed since
// Jan. 1st, 1970.
console.log(future.getTime());

console.log(new Date(2142253380000));
// Getting the now().
console.log(Date.now());
// Setter methods.
future.setFullYear(2040);
console.log(future);


// Operations with Dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPast = function (d1, d2) {
    return Math.abs((d2 - d1) / (1000 * 60 * 60 * 24));
};

const day1 = calcDaysPast(new Date(2037, 3, 14), new Date(2037, 3, 24, 10, 8));
console.log(day1);


// Internationalizing Dates
const now = new Date();
const dateOptions = {
    hour: "numeric",
    minute: "numeric",
    day: "numeric",
    month: "2-digit",
    year: "numeric",
};

const locale = navigator.language;
console.log(locale);

let formatted = Intl.DateTimeFormat(locale, dateOptions).format(now);
console.log(typeof formatted);


// Internationalizing Numbers
const num = 3884764.23;

// The style property can
// have currency, unit, 
// and percent.
const options = {
    style: "currency",
    currency: "EUR",
};

console.log("US: ", Intl.NumberFormat("en-US", options).format(num));
console.log("Germany: ", Intl.NumberFormat("de-DE", options).format(num));
console.log("Syria: ", Intl.NumberFormat("ar-SY", options).format(num));
console.log(navigator.language, Intl.NumberFormat(navigator.language, options).format(num));


// Timers: setTimeout()
// asynchronous JS in this case.
// Passing multiple arguments
// after the delay value.
// Executes once, after a
// certain period of time.
const ingredients = ["olives", "spinach"];
const pizzaTimer = setTimeout(
    (ing1, ing2) => console.log(`Here is your ${ing1} & ${ing2} pizza!`),
    5000,
    ...ingredients
);

if (ingredients.includes("spinach")) {
    // Disabling the timer.
    clearTimeout(pizzaTimer);
}

console.log("Waiting...");

// Timers: setInterval()
// Executes each time, after a
// certain period of time.
// setInterval(() => {
//     const now = new Date();
//     console.log(now);
// }, 1000);

// Exercise: Creating a Clock
setInterval(() => {
    const now = new Date();
    const hours = `${now.getHours()}`.padStart(2, "0");
    const minutes = `${now.getMinutes()}`.padStart(2, "0");
    const seconds = `${now.getSeconds()}`.padStart(2, "0");
    console.log(`${hours}:${minutes}:${seconds}`);
}, 1000);
*/
