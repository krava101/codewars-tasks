// const descendingOrder = n => +(''+n).split('').sort((a, b) => b-a).join(''); //+ == parseInt()

// console.log(descendingOrder(7865));

/////////////////////////////////////////////////////////////////////////////////

// function sumTwoSmallestNumbers(numbers) {
//     // numbers.sort((a, b) => a - b)
//     // return numbers[0] + numbers[1]
    
//     //or

//     return numbers.sort((a, b) => a - b).slice(0, 2).reduce((a, b) => a + b, 0);
// }

// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]));

//////////////////////////////////////////////////////////////////////////////

// const order = w => w.split(' ').sort((a, b) => a.replace(/[a-z]/gi, '') - b.replace(/[a-z]/gi, '')).join(' ');
// //best
// const order = w => w.split(' ').sort((a, b) => /\d/.exec(a) - /\d/.exec(b)).join(' ')

// console.log(order("4of Fo1r pe6ople g3ood th5e the2"));

////////////////////////////////////////////////////////////////

// console.log(parseInt(Math.sqrt(16)) === Math.sqrt(16));

///////////////////////////////////////////////////////////////

// const litres = time => ~~(time / 2);

// console.log(litres(11.8));

///////////////////////////////////////////////////////////

// function solution(x) {
//    return !!/(?=.*[a-z])(?=.*\d).{6,}$/g.test(x);
// }

// console.log(solution("DSJKHD23"));

/////////////////////////////////////////////////////////

//const zeros = n => ~~(n/5) + ~~(n/5**2) + ~~(n/5**3) + ~~(n/5**4) + ~~(n/5**5) + ~~(n/5**6) + ~~(n/5**7) + ~~(n/5**8) + ~~(n/5**9) + ~~(n/5**10) + ~~(n/5**11) + ~~(n/5**12);

// const zeros = n => {
//     let count = 0;
//     for (let i = 1; i <= 100; i++) count += ~~(n/5**i);
//     return count;
// }

// console.log(600);

//////////////////////////////////////////////////////

// const rot13 = str => str.replace(/[a-z]/g, e => (e.charCodeAt(0) - 96) < 14 ? String.fromCharCode(e.charCodeAt(0) + 13) : String.fromCharCode(e.charCodeAt(0) - 13))
//     .replace(/[A-Z]/g, e => (e.charCodeAt(0) - 64) < 14 ? String.fromCharCode(e.charCodeAt(0) + 13) : String.fromCharCode(e.charCodeAt(0) - 13));

// console.log(rot13("Test"));

/////////////////////////////////////////////////////

// function moveZeros(arr) {
//     // newArr = arr.filter(e => e!== 0)
//     // arr.forEach(e => e === 0 ? newArr.push(0):1)
//     // return newArr;

//     //or best
//     return arr.filter(e => e!== 0).concat(arr.filter(e => e === 0))
// }

// const moveZeros = arr => [...(arr.filter(n => n !== 0)), ...(arr.filter(n => n === 0))];

// console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))

/////////////////////////////////////////////////////////////////