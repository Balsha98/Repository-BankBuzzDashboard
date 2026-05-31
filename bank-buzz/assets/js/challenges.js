"use strict";

// Challenge #1
// const checkDogs = function (dogsJulia, dogsKate) {
//     // Could have been done using splice(), as well.
//     const juliaCopy = dogsJulia.slice(1, dogsJulia.length - 2);

//     // Could have been done using concat(), as well.
//     [...juliaCopy, ...dogsKate].forEach(function (age, i) {
//         if (age >= 3) {
//             console.log(`Dog #${i + 1} is an adult, and is ${age} years old.`);
//         } else {
//             console.log(`Dog #${i + 1}, is still a puppy. 🐶`);
//         }
//     });
// };

// Test Data
// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// Challenge #2
// What works for me: a as the "accumulator,"
// and v as "value."
// const calcAverageHumanAge = function (ageArray) {
//     const toHumanAgeArr = ageArray.map((age) => (age <= 2 ? age * 2 : 16 + age * 4)).filter((age) => age >= 18);

//     // reduce() returns the sum of the toHumanAgeArr.
//     const avg = toHumanAgeArr.reduce((a, v) => a + v, 0) / toHumanAgeArr.length;

//     // Directly calculating the average within the reduce() method.
//     // const avg = toHumanAgeArr.reduce((a, v, i, arr) => a + v / arr.length, 0);

//     console.log(avg);
// };

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

// Challenge #3
// const calcAverageHumanAge = (ageArray) => {
//     const toHumanAgeAvg = ageArray
//         .map((age) => (age <= 2 ? age * 2 : 16 + age * 4))
//         .filter((age) => age >= 18)
//         .reduce((a, v, i, arr) => a + v / arr.length, 0);

//     return toHumanAgeAvg;
// };

// console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));
// console.log(calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]));

// Challenge #4
// const dogs = [
//     { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
//     { weight: 8, curFood: 200, owners: ["Matilda"] },
//     { weight: 13, curFood: 275, owners: ["Sarah", "John"] },
//     { weight: 32, curFood: 340, owners: ["Michael"] },
// ];

// console.log(dogs);

// // Task Functions
// const okayAmount1 = (curr, rec) => (curr >= rec * 0.9 && curr <= rec * 1.1 ? true : false);

// const muchOrLittle = (curr, rec) => {
//     if (curr > rec) return true;
//     else if (curr < rec) return false;
// };

// // Task #1
// dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

// // Task #2
// // Option #1
// dogs.forEach(({ owners, curFood, recFood }) => {
//     if (owners.includes("Sarah")) {
//         let tooMuchLittle;

//         if (muchOrLittle(curFood, recFood)) tooMuchLittle = "too much";
//         else tooMuchLittle = "too little";

//         console.log(`${owners[owners.indexOf("Sarah")]}'s dog eats ${tooMuchLittle} food.`);
//     }
// });

// // Option #2 (Jonas)
// // The find() returns the first found value.
// const { curFood: curr, recFood: rec } = dogs.find(({ owners }) => owners.includes("Sarah"));
// console.log(`Sarah's dog eats ${muchOrLittle(curr, rec) ? "too much" : "too little"} food.`);

// // Task #3
// // Option #1
// let ownersEatTooMuch1 = [];
// let ownersEatTooLittle1 = [];

// dogs.forEach(({ owners, curFood: curr, recFood: rec }) => {
//     muchOrLittle(curr, rec) ? ownersEatTooMuch1.push(...owners) : ownersEatTooLittle1.push(...owners);
// });

// console.log(ownersEatTooMuch1, ownersEatTooLittle1);

// // Option #2
// const reduceObject = (arr, muchLittle) => {
//     return arr.reduce((acc, { curFood: curr, recFood: rec, owners }) => {
//         if (muchLittle) {
//             if (muchOrLittle(curr, rec)) acc.push(...owners);
//         } else {
//             if (!muchOrLittle(curr, rec)) acc.push(...owners);
//         }

//         return acc;
//     }, []);
// };

// const ownersEatTooMuch2 = reduceObject(dogs, true);
// const ownersEatTooLittle2 = reduceObject(dogs, false);

// console.log(ownersEatTooMuch2, ownersEatTooLittle2);

// // Option #3 (Jonas)
// // const filterObject = (arr, muchLittle) => {
// //     return arr
// //         .filter(({ curFood: curr, recFood: rec }) => {
// //             if (muchLittle) {
// //                 return muchOrLittle(curr, rec);
// //             } else {
// //                 return !muchOrLittle(curr, rec);
// //             }
// //         })
// //         .flatMap((d) => d.owners);
// // };

// // Option #3 (Me)
// const filterObject = (arr, muchLittle) => {
//     return arr
//         .filter(({ curFood: curr, recFood: rec }) => {
//             if (muchLittle) {
//                 return muchOrLittle(curr, rec);
//             } else {
//                 return !muchOrLittle(curr, rec);
//             }
//         })
//         .reduce((a, d) => {
//             a.push(...d.owners);
//             return a;
//         }, []);
// };

// const ownersEatTooMuch3 = filterObject(dogs, true);
// const ownersEatTooLittle3 = filterObject(dogs, false);

// console.log(ownersEatTooMuch3, ownersEatTooLittle3);

// // Task #4
// console.log(`${ownersEatTooMuch1.join(" and ")}'s dogs eat too much food.`);
// console.log(`${ownersEatTooLittle1.join(" and ")}'s dogs eat too little food.`);

// console.log(`${ownersEatTooMuch2.join(" and ")}'s dogs eat too much food.`);
// console.log(`${ownersEatTooLittle2.join(" and ")}'s dogs eat too little food.`);

// console.log(`${ownersEatTooMuch3.join(" and ")}'s dogs eat too much food.`);
// console.log(`${ownersEatTooLittle3.join(" and ")}'s dogs eat too little food.`);

// // Task #5
// // Option #1
// dogs.forEach(({ curFood: curr, recFood: rec }) => {
//     console.log(`EXACTLY the same: ${curr === rec ? true : false}`);
// });

// // Option #2 (Jonas)
// console.log(dogs.some(({ curFood: curr, recFood: rec }) => curr === rec));

// // Task #6
// // Option #1
// dogs.forEach(({ curFood: curr, recFood: rec }) => {
//     console.log(`An OKAY amount: ${okayAmount1(curr, rec) ? true : false}`);
// });

// // Option #2 (Jonas)
// console.log(dogs.some(({ curFood: curr, recFood: rec }) => okayAmount1(curr, rec)));

// // Task #7
// // Option #1
// const okayArray1 = dogs.reduce((acc, dog) => {
//     if (okayAmount1(dog.curFood, dog.recFood)) {
//         acc.push(dog);
//     }

//     return acc;
// }, []);
// console.log(okayArray1);

// // Option #2
// const okayArray2 = dogs.filter((dog) => okayAmount1(dog.curFood, dog.recFood));
// console.log(okayArray2);

// // Option #3 (Jonas)
// const okayAmount2 = (dog) => (dog.curFood >= dog.recFood * 0.9 && dog.curFood <= dog.recFood * 1.1 ? true : false);

// console.log(dogs.some(okayAmount2));

// const okayArray3 = dogs.filter(okayAmount2);
// console.log(okayArray3);

// // Task #8
// // Option #1
// const dogsCopySorted1 = dogs.slice().sort(({ recFood: r1 }, { recFood: r2 }) => r1 - r2);
// console.log(dogsCopySorted1);

// // Option #2
// const dogsCopySorted2 = dogs.map((dog) => dog).sort(({ recFood: r1 }, { recFood: r2 }) => r1 - r2);
// console.log(dogsCopySorted2);

// Challenge #4 (Latest Update)
// const breeds = [
//     {
//         breed: "German Shepard",
//         averageWeight: 32,
//         activities: ["fetch", "swimming"],
//     },
//     {
//         breed: "Dalmatian",
//         averageWeight: 24,
//         activities: ["running", "fetch", "swimming"],
//     },
//     {
//         breed: "Labrador",
//         averageWeight: 28,
//         activities: ["swimming", "fetch"],
//     },
//     {
//         breed: "Beagle",
//         averageWeight: 12,
//         activities: ["digging", "fetch"],
//     },
//     {
//         breed: "Husky",
//         averageWeight: 26,
//         activities: ["running", "agility", "swimming"],
//     },
//     {
//         breed: "Bulldog",
//         averageWeight: 36,
//         activities: ["sleeping"],
//     },
//     {
//         breed: "Poodle",
//         averageWeight: 18,
//         activities: ["agility", "fetch"],
//     },
// ];

// // Task #1
// const huskyWeight = breeds.find((breed) => breed.breed === "Husky").averageWeight;
// console.log(huskyWeight);

// // Task #2
// const dogBothActivities = breeds.find((breed) => {
//     let counter = 0;
//     const bothActivities = ["running", "fetch"];
//     bothActivities.forEach((activity) => (breed.activities.includes(activity) ? ++counter : 0));
//     return counter === bothActivities.length;
// }).breed;

// console.log(dogBothActivities);

// // Task #3
// const allActivities = breeds.flatMap((breed) => breed.activities);
// console.log(allActivities);

// // Task #4
// const uniqueActivities = [...new Set(allActivities)];
// console.log(uniqueActivities);

// // Task #5
// const swimmingAdjacent = [
//     ...new Set(
//         breeds
//             .filter((breed) => breed.activities.includes("swimming"))
//             .flatMap((breed) => breed.activities)
//             .filter((activity) => activity !== "swimming")
//     ),
// ];

// console.log(swimmingAdjacent);

// // Task #6
// console.log(breeds.every((breed) => breed.averageWeight >= 10));

// // Task #7
// console.log(breeds.some((breed) => breed.activities.length >= 3));

// // Task #8 (BONUS)
// const heaviestBreed = breeds.find(
//     (breed) =>
//         breed.averageWeight ===
//         Math.max(...breeds.filter((breed) => breed.activities.includes("fetch")).map((breed) => breed.averageWeight))
// ).breed;

// console.log(heaviestBreed);
