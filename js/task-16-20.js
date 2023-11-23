// const disemvowel = str => str.split("").filter(e => !"aeuioAEUIO".includes(e)).join("");

//OR

// const disemvowelTop = str => str.replace(/[aeuio]/gi,''); //g - global, (not 1 word), i - without register

// console.log(disemvowel("This website is for losers LOL!"));

////////////////////////////////////////////////////////////////////////////

// const alphabetPosition=text=>{
//     const alphabet = "abcdefghijklmnopqrstuvwxyz";
//     // const newArr = [];
//     // for (let letter of text.toLowerCase().split("")) alphabet.includes(letter) ? newArr.push(alphabet.indexOf(letter) + 1) : null;
//     // return newArr.join(" ");

//     //best
//     return text.toLowerCase().replace(/[^a-z]/g, '').split("").map(l => alphabet.indexOf(l) + 1).join(" ");
    

// }
//or best
// const alphabetPosition = (text) => text.toLowerCase().replace(/[^a-z]/g, '').split('').map(ch => ch.charCodeAt(0) - 96).join(' ');


// console.log(alphabetPosition("The sunset2 sets at twelve o'c11lock."));
/////////////////////////////////////////////////////////////////////////////////////////

// A WORD WHICH ALPHABETICAL SUM OF LETTERS IS THE HIGHEST IN THE STRING

// function high(x){
//     let higherWordIndex = 0;
//     const xArr = x.split(" "),
//         numArr = xArr.map(e => e.split('')
//             .map(num => num.charCodeAt(0) - 96))
//             .map(e => e.reduce((acc, num) => acc += num, 0))
//     numArr.forEach(num => higherWordIndex < num ? higherWordIndex = num : higherWordIndex);
//     return xArr[numArr.indexOf(higherWordIndex)];
// }
// console.log(high('man i need a taxi up to ubud'))

///////////////////////////////////////////////////////////////////////

// function solution(string){
//     let a = "ABCDEFGHIJKLMNOPQRTSUVWXYZ";
//     const indexOfLetter = [];
//     stringArr = string.split("").filter(e => a.includes(e) ? indexOfLetter.push(e) : e)
//     for (let i = 0; i <= indexOfLetter.length-1; i++) stringArr[stringArr.indexOf(indexOfLetter[i])] = " " + indexOfLetter[i]
//     return stringArr.join("");
// }

// const solution = string => string.replace(/[A-Z]/g, ' $&'); //best

// console.log(solution("camelCasingTest"))

/////////////////////////////////////////////////////////////////////////

// function primeInteger(int) {
//     // const ints = [];
//     // let count = 0;
//     // for (let i = 2; i <= int; i++)ints.push(i)
//     // if (int <= 0)return false;
//     // for (num of ints)
//     //     if (int % num === 0) count++;
//     // return count > 2 ? false : true;

//     // or

//     // const ints = Array.from({ length: int }, (e, i)=>i+1).filter(i => int % i === 0?count++:null)
//     // return int <= 1 ? false : count > 2 ? false : true;
    
//     //or best
//     // for (let i = 2; i <= int**.5; i++) //int**.5  == Math.sqrt(int)
//     //     if (int % i === 0) { return false };
//     // return int > 1;
// }

// console.log(primeInteger(2))

//////////////////////////////////////////////////////////////////////
