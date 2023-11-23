// const digitize = n => `${n}`.split("").map(e => +e).reverse()
// console.log(digitize(2134));

//////////////////////////////////////////////////////////////////////

// const betterThanAverage = (classPoints, yourPoints)=> classPoints.reduce((acc, e)=> acc+=e, 0) / classPoints.length < yourPoints;
// console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));

////////////////////////////////////////////////////////////////////

// const uniqueInOrder = str => {
//   let current = str[0];
//   const newArr = [str[0]];
//   for (let i = 0; i <= str.length; i++)
//   if (str[i] && str[i] !== current){newArr.push(str[i]); current = str[i];}
//   return str.length > 0 ? newArr : []

//   // or best
//   return [...str].filter((e, i) => e !== str[i-1])
// }

// console.log(uniqueInOrder('A'));

/////////////////////////////////////////////////////////////////

// const highAndLow = str =>{
//   //const arr = str.split(" ").sort((a, b) => a - b)
//   //return arr[arr.length - 1] + " " + arr[0]
  
//   //or
//   const arr = str.split(" ")
//   return `${Math.max(...arr)} ${Math.min(...arr)}`
// }

// console.log(highAndLow("1 9 3 4 -5"));

///////////////////////////////////////////////////////////