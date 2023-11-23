// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//         title: "The Dreams in the Witch House",
//         author: "Howard Lovecraft",
//         rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books.filter(book => book.rating > MIN_BOOK_RATING).toSorted((a , b) => a.author.localeCompare(b.author)).map(book => book.author);

// console.log(names);

/////////////////////////////////////////////////////////////////////////////////

// const comp = {
//     alex: 100,
//     poul: 200,
//     tim: 120,
//     cot: 40,
// }

// const sum = Object.values(comp).reduce((acc, cur) => acc + cur, 0)
// console.log(sum);

////////////////////////////////////////////////////////////////////////////

// function solution(str, ending) {
//   return str.split("").reverse().slice(0, ending.length).reverse().join("") === ending
// }

// console.log(solution("adcdve", "abc"));


////////////////////////////////////////////////////////////////////

// function getCount(str){
//     const vowels = "aeiou";
//     let count = 0;
//     for (const e of str) {
//         if (vowels.includes(e)) count++
//     }
//     return count;
// }

//or

// const getCount = str => str.split("").filter(e => "aeiouAEIOU".includes(e)).length;

// console.log(getCount("abracadabra"));

//////////////////////////////////////////////////////////////////////

// const isTriangle = (a, b, c) => a + b > c && a + c > b && c + b > a;

// console.log(isTriangle(1,2,2))

///////////////////////////////////////////////////////////////////