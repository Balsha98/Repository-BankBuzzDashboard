"use strict";

/*
// ----- Working With Arrays -----
let arr = ["a", "b", "c", "d", "e"];

// Slice
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

// Copying an array.
console.log(arr.slice());
console.log([...arr]);

// Splice
// console.log(arr.splice(2));
// arr.splice(-1);
arr.splice(1, 2);
console.log(arr);

// Reverse
arr = ["a", "b", "c", "d", "e"];
const arr2 = ["j", "i", "h", "g", "f"];
console.log(arr2.reverse());

// Concat
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// Join
console.log(letters.join(" - "));

// at() method.
const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));

// Getting the last element.
console.log(arr[arr.length - 1]);
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1));
console.log(arr.at(-2));

console.log("Balsha".at(0));
console.log("Balsha".at(-1));
*/

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/*
// for (let movement of movements) {
for (let [i, movement] of movements.entries()) {
    if (movement > 0) {
        console.log(`Movement ${i + 1}. You deposited \$${movement}.`);
    } else {
        console.log(`Movement ${i + 1}. You withdrew \$${Math.abs(movement)}.`);
    }
}

console.log("----- forEach() -----  ");
// The arguments are always passed in this order:
// 1st goes the current element,
// 2nd is the current index,
// 3rd is the entire array.
movements.forEach(function (movement, index, array) {
    if (movement > 0) {
        console.log(`Movement ${index + 1}. You deposited \$${movement}.`);
    } else {
        console.log(`Movement ${index + 1}. You withdrew \$${Math.abs(movement)}.`);
    }
});

// forEach with a Map
const currencies = new Map([
    ["USD", "United States dollar"],
    ["EUR", "Euro"],
    ["GBP", "Pound sterling"],
]);

currencies.forEach(function (value, key, map) {
    console.log(`${key}: ${value}`);
});

// forEach with a Map
const currenciesUnique = new Set(["USD", "GBP", "USD", "EUR", "EUR"]);
console.log(currenciesUnique);

currenciesUnique.forEach(function (value, _, mySet) {
    console.log(`${value}: ${value}`);
});


// The map() method.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUSD = 1.1;

// Using function expressions.
const mappedArray = movements.map(function (currElement) {
    return currElement * eurToUSD;
});

// Using arrow functions
// const mappedArray = movements.map((currElement) => currElement * eurToUSD);

// Same output using for/of loop.
// const movements2 = [];
// for (let e of movements) {
//     movements2.push(e * eurToUSD);
// }

console.log(movements);
// console.log(movements2);
console.log(mappedArray);

const movementsDescription = movements.map(function (currElement, i) {
    let tranType;
    tranType = currElement > 0 ? "deposited" : "withdrew";
    return `Movement ${i + 1}. You ${tranType} ${Math.abs(currElement)}.`;
});

console.log(movementsDescription);


// The filter() method.
// All of these functions have the 3 available values,
// those being: element, index, & data structure.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const deposits = movements.filter(function (currElement) {
    return currElement > 0;
});

// const deposits = [];
// for (let mov of movements) {
//     mov > 0 ? deposits.push(mov) : false;
// }

const withdrawals = movements.filter((currElement) => currElement < 0);

console.log(movements);
console.log(deposits);
console.log(withdrawals);


// The reduce() method.
// The first value of the callback function is the sum of the
// currElement values.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// const balance = movements.reduce(function (accumulator, currElement, i) {
//     console.log(`Iteration ${i + 1}: ${accumulator}`);
//     return accumulator + currElement;
// }, 0);

const balance = movements.reduce((accumulator, currElement) => accumulator + currElement, 0);

// let balance = 0;
// for (let mov of movements) {
//     balance += mov;
// }

console.log(balance);

// Getting the maximum value, as well.
const maxValue = movements.reduce(function (a, v) {
    if (a > v) return a;
    else return v;
}, movements[0]);

console.log(maxValue);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUSD = 1.1;

// Referred to as the PIPELINE.
const totalDeposits = movements
    .filter((mov) => mov > 0)
    .map((mov) => mov * eurToUSD)
    .reduce((a, v) => a + v, 0);

console.log(totalDeposits);


// The find() method.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const firstWithdrawal = movements.find((mov) => mov < 0);

console.log(movements, firstWithdrawal);
*/

// const account1 = {
//     owner: "Balsha Bazovich",
//     transactions: [200, 450, -400, 3000, -650, -130, 70, 1300],
//     interestRate: 1.2,
//     pin: 1234,
// };

// const account2 = {
//     owner: "Dejan Sekulich",
//     transactions: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//     interestRate: 1.5,
//     pin: 4321,
// };

// const account3 = {
//     owner: "Igor Djonovich",
//     transactions: [200, -200, 340, -300, -20, 50, 400, -460],
//     interestRate: 0.7,
//     pin: 1357,
// };

// const account4 = {
//     owner: "John Sankovich",
//     transactions: [430, 1000, 700, 50, 90],
//     interestRate: 1,
//     pin: 2468,
// };

// const accounts = [account1, account2, account3, account4];

/*
console.log(accounts);

const account = accounts.find((acc) => acc.owner === "John Sankovich");
console.log(account);

// Same done with a for/of loop.
for (let acc of accounts) {
    if (acc.owner === "John Sankovich") console.log(acc);
}

// The findIndex() method.
const arrTest = [1, 2, 3, 4, 5, 6, 7];
const findIndex = arrTest.findIndex((num) => num === 4);

console.log(findIndex, arrTest.splice(findIndex, 1));

// The findLast() method.
const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(transactions.findLast((transaction) => transaction < 0));

const findLatestWithdrawal = (transArr) => {
    const lastIndex = transArr.findLastIndex((transaction) => transaction >= 1000);
    return `Your latest withdrawal was ${transactions.length - lastIndex} transactions ago.`;
};

console.log(findLatestWithdrawal(transactions));

// The some() method.
// includes() checks for equality.
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
console.log(movements.includes(1300));

// some() checks for a condition.
const anyDeposits = movements.some((move) => move > 1500);
console.log(anyDeposits);

// The every() method.
const movements = [430, 1000, 700, 50, 90];
let everyMovement = movements.every((move) => move > 0);
console.log(everyMovement);

// Separate callback function.
const checkDeposit = (mov) => mov > 0;
console.log(movements.every(checkDeposit));
console.log(movements.some(checkDeposit));
console.log(movements.filter(checkDeposit));

// The flat() method.
// Goes 1 level deep of nesting.
const nestedArr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(nestedArr.flat());

// We can change the depth the flat() method visits.
const deeplyNested = [[[1, 2], 3], [[4, 5], 6], 7, 8];
console.log(deeplyNested.flat(2));

const movementsArr = accounts.map((acc) => acc.transactions);
console.log(movementsArr);

const allMovements = movementsArr.flat();
console.log(allMovements);

const movementSum = allMovements.reduce((a, v) => a + v, 0);
console.log(movementSum);

const chainedSum1 = accounts
    .map((acc) => acc.transactions)
    .flat()
    .reduce((a, v) => a + v, 0);
console.log(chainedSum1);

// The flatMap() method.
// It ONLY goes 1 level deep.
const chainedSum2 = accounts.flatMap((acc) => acc.transactions).reduce((a, v) => a + v, 0);
console.log(chainedSum2);

// Sorting arrays.
// sort() actually mutates the array.
const owners = ["Jonas", "Zach", "Adam", "Martha"];
console.log(owners.sort());
console.log(owners);

// Grouping arrays.
const transactions = [200, 450, -400, 3000, -650, -130, 70, 1300];

// Method returns an object that groups the values
// with the appropriate key based on the condition.
const groupedTransactions = Object.groupBy(transactions, (transaction) =>
    transaction > 0 ? "deposits" : "withdrawals"
);

console.log(groupedTransactions);

// Non-destructive methods (toSorted(), toReversed(), toSpliced()).
// These methods do NOT alter the original array.
console.log(transactions.toReversed());
console.log(transactions);

// We also have the with method that serves for copying
// arrays that we additionally want to alter; this
// method also return the newly altered array.
const newTransactions = transactions.with(1, 3000);
console.log(newTransactions);

// Numbers
console.log(movements);
// console.log(movements.sort());

// a - current value.
// b - next value.
// return < 0, a before b
// return > 0, b before a
// Ascending sort.
// movements.sort((a, b) => {
//     if (a > b) return 1;
//     if (b > a) return -1;
// });
movements.sort((a, b) => a - b);
console.log(movements);

// Descending sort.
// movements.sort((a, b) => {
//     if (a > b) return -1;
//     if (b > a) return 1;
// });
movements.sort((a, b) => (a - b) * -1);
movements.sort((a, b) => b - a);
console.log(movements);


// More Ways of Creating & Filling Arrays
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// Creates an array of
// length 7.
const x = new Array(7);
console.log(x);

// The fill() method.
x.fill(1);
x.fill(1, 3, 5);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// The from() method.
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

// Using underscore as a "throwaway" parameter.
const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

// Quick Exercise
// An array containing 100 random dice rolls.
const randNumArray = Array.from({ length: 100 }, () => Math.trunc(Math.random() * 6 + 1));
console.log(randNumArray);

document.getElementById("current_balance").addEventListener("click", () => {
    // When we fetch DOM objects (Nodes), we need to convert them into an array,
    // so that we can then use all of the available Array methods.
    // Using the from() method we're creating an array from a certain structure,
    // and are then mapping it as we wish, using the callback function
    // as the 2nd argument of the Array.from() method.
    const tranUI1 = Array.from(document.querySelectorAll(".transaction_amount"), (domEl) =>
        Number(domEl.textContent.slice(1))
    );

    console.log(tranUI1);
});


// Array Methods Practice
// Exercise #1
const bankDepositSum = accounts
    .flatMap((acc) => acc.transactions)
    .filter((v) => v > 0)
    .reduce((a, v) => a + v, 0);
console.log(bankDepositSum);

// Exercise #2
// Using the array's length.
const atLeast1 = accounts.flatMap((acc) => acc.transactions).filter((v) => v >= 1000).length;
console.log(atLeast1);

// Using the reduce() method.
// const atLeast2 = accounts.flatMap((acc) => acc.transactions).reduce((a, v) => (v >= 1000 ? a + 1 : a), 0);

// We can use the prefixed ++ operator.
const atLeast2 = accounts.flatMap((acc) => acc.transactions).reduce((a, v) => (v >= 1000 ? ++a : a), 0);
console.log(atLeast2);

// let a = 10;
// console.log(a++);

// Exercise #3
// const accObj = {
//     sumDeposits: accounts.flatMap((acc) => acc.transactions).reduce((a, v) => (v > 0 ? a + v : a), 0),
//     sumWithdrawals: accounts.flatMap((acc) => acc.transactions).reduce((a, v) => (v < 0 ? a + v : a), 0),
// };

// Or
const { dep, withD } = accounts
    .flatMap((acc) => acc.transactions)
    .reduce(
        (a, v) => {
            // v > 0 ? (a.dep += v) : (a.withD += v);

            // Could be done as...
            // using bracket notation.
            // Great choice! :)
            a[v >= 0 ? "dep" : "withD"] += v;

            // And as...
            // let typeOfSum;
            // v > 0 ? (typeOfSum = a.dep) : (typeOfSum = a.withD);
            // typeOfSum += v;
            return a;
        },
        { dep: 0, withD: 0 }
    );
console.log(dep, withD);

// const reducedArr = accounts.reduce((a, acc) => {
//     a.push(...acc.transactions);
//     return a;
// }, []);
// console.log(reducedArr);

// Exercise #4
// this is a nice title -> This Is a Nice Title
const convertTitleCase = (word) => {
    const capitalize = (str) => str[0].toUpperCase() + str.slice(1);

    const exceptions = ["a", "an", "the", "and", "but", "or", "on", "in", "with"];

    // Must always convert
    // input Strings into
    // lower case String(s)
    const newTitle = word
        .toLowerCase()
        .split(" ")
        .map((w) => {
            if (exceptions.includes(w)) return w;
            else return capitalize(w);
        })
        .join(" ");

    return capitalize(newTitle);
};

console.log(convertTitleCase("this is a nice title"));
console.log(convertTitleCase("this is a long title, but not too long"));
console.log(convertTitleCase("and here is another title with an EXAMPLE"));
*/
