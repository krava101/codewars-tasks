// function getEvenNumbers(start, end) {
//   const array = [];
//   if(start % 2 === 0){
//     for (let i = start; i <= end; i += 2){
//       array.push(i);
//     }
//   } else {
//     for (let i = start + 1; i <= end; i += 2){
//       array.push(i);
//     }
//   }
//   return array;
// }

// console.log(getEvenNumbers(6, 12));

// function reverse(str) {
//   const arrayToRev = [];
//   arrayToRev.join
// }

///////////////////////////////////////////////////////////////////////////////////

// function getAllPropValues1(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const allProdVal = [];

//   for (const product of products) {
//     for (const key of Object.keys(product)) {
//       if (key == propName) {
//         allProdVal.push(product[propName]);
//         }
//       }
//   }

//   return allProdVal;
// }

// // OR

// function getAllPropValues2(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const allProdVal = [];

//   for (const product of products) {
//     if (product[propName]) {
//       allProdVal.push(product[propName]);
//     }
//   }

//   return allProdVal;
// }

// console.log(getAllPropValues1("price"));
// console.log(getAllPropValues2("price"));

//////////////////////////////////////////////////////////////////////////

// function addOverNum(firsNum, ...args) {
//   let sumArgs = 0;
//   for (const arg of args){
//     if(arg > firsNum){
//       sumArgs += arg;
//     }
//   }
//   return sumArgs;
// }

// console.log(addOverNum(15, 32, 6, 13, 19, 8));

//////////////////////////////////////////////////////////////////////////

// const array = [14, -4, 25, 18, 11];

// const stringOfArr = array.join(" ");

// const maxNum =  Math.max(4, 5, 8, 2)

// console.log(Math.max(...array));

//////////////////////////////////////////////////////////////////////

// ДВА НАЙМЕНЬЩІ ЧИСЛА В МАСИВІ

// const nums = [5, 8, 80, 6, 7, 9, 3, 50]

// let minNum = nums[0];

// let superMinNum = nums[1];

// if (superMinNum > minNum) {
//     superMinNum = nums[0];
//     minNum = nums[1];
// }

// for (const num of nums) {
//     if (superMinNum > num) {
//         superMinNum = num;
//     }
// }

// console.log(superMinNum, minNum);

///////////////////////////////////////////////////////////////////////