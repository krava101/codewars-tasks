// const countSmileys = arr => arr.map(e => e.replace(/[)D]/g, "s")).filter(e => e.includes("s"));

// const countSmileys = arr =>
// // arr.map(e => e.replace(/[:;]/g, "e").replace(/[-~]/g, "n").replace(/[)D]/g, "s"))
//     //     .filter(e => e[0] == "e" && e[1] == "s" || e[0] == "e" && e[1] == "n" && e[2] == "s").length;

//     //or best
//     arr.filter(e => /[:;][-~]?[)D]$/.test(e)).length// ? це "-" або "~" , але це не обов'язковий парам
//                                                     // $: вказує на те, що "е" закінчується на ")" або "D"
// console.log(countSmileys([":---)" , "))" , ";~" , ":D"]));

///////////////////////////////////////////////////////////////////////////////////////

// const solution = (str, ending)=> str.endsWith(ending);

// console.log(solution("dfe", "e"))

//////////////////////////////////////////////////////////////////////////////////


// const solution = string => string.replace(/[A-Z]/g, ' $&');

// console.log(solution("camelCasingTest"));

//////////////////////////////////////////////////////////////////////////////////

// const getCount = str => str.replace(/[^aeiou]/gi, '').length;

// console.log(getCount("AbracAdabra"));

/////////////////////////////////////////////////////////////////

// function high(x) {
//     const arrOfNums = x.split(" ").map(e => e.split("").map(l => l.charCodeAt(0) - 96)).map(e => e.reduce((acc, i) => acc += i, 0))
//     return x.split(" ")[arrOfNums.indexOf(arrOfNums.reduce((acc, e) => acc < e ? acc = e : acc, 0))]
// }

// console.log(high('man i need a taxi up to ubud'));

///////////////////////////////////////////////////////////////////////////////////////

// function toCamelCase(str) {
//     if (str == "") return str;
//     const res = str.replace(/[-_]/, " ").split("/[-_]/").map(e => e[0].toUpperCase() + e.slice(1)).join("");
//     return str[0] !== str[0].toLowerCase() ? res : res[0].toLowerCase() + res.slice(1)
// }

// console.log(toCamelCase(""));

//////////////////////////////////////////////////////////////////////////////////////

// const solution = str => {
//     const alph = "abcdefghijklmnopqrtsuvwxyz"
//     return str.split(" ").map(e => alph.includes(e[0].toLowerCase()) ? e.slice(1) + e[0] + "ay" : e[0]).join(" ")
// };

// // or best
// function pigIt(str){
//   return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
// }

// console.log(solution('O tempora o mores!'));
// console.log(pigIt('O tempora o mores !'));

////////////////////////////////////////////////////////////////////////////////////////

// function zero(fn) {return fn ? fn(0) : 0}
// function one(fn) {return fn ? fn(1) : 1}
// function two(fn) {return fn ? fn(2) : 2}
// function three(fn) {return fn ? fn(3) : 3}
// function four(fn) {return fn ? fn(4) : 4}
// function five(fn) {return fn ? fn(5): 5}
// function six(fn) {return fn ? fn(6) : 6}
// function seven(fn) {return fn ? fn(7) : 7}
// function eight(fn) {return fn ? fn(8) : 8}
// function nine(fn) {return fn ? fn(9) : 9}

// function plus(b) {return function (a) {return a + b }}
// function minus(b) {return function (a) {return a - b }}
// function times(b) { return function (a) {return a * b }}
// function dividedBy(b) {return function (a) {return b / a } }

// console.log(seven(dividedBy(five)))

///////////////////////////////////////////////////////////////////////////////////

// const likes = names => {
//     switch (names.length){
//         case 0: return 'no one likes this';
//         case 1: return `${names[0]} like this`;
//         case 2: return `${names[0]} and ${names[1]} like this`;
//         case 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`;
//         default:return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;}}

// console.log(likes(["Alex", "Jacob", "Mark", "Max"]));

// //["Alex", "Jacob", "Mark", "Max"]

/////////////////////////////////////////////////////////////////////////////////////

// const oddOrrEven = num => num % 2 ? "Odd" : "Even";

//////////////////////////////////////////////////////////////////