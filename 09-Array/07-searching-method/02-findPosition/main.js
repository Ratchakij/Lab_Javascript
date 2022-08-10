// จงหา array ของตำแหน่ง (index) ของ 'a' ใน alphabets

const alphabets = ["a", "b", "a", "c", "a", "d"];
// expexted result: [0, 2, 4]

// // #1 for in
// let result = []
// for (let index in alphabets) {

//     if (alphabets[index] === 'a') {
//         result.push(index)
//     }
// }
// console.log(result)
// console.log(alphabets)

// #2 Index of

let result = [];
let foundIndex = alphabets.indexOf("a");

do {
  foundIndex;

  if (foundIndex !== -1) {
    result.push(foundIndex);
    foundIndex = alphabets.indexOf("a", foundIndex + 1);
  }
} while (foundIndex !== -1);

console.log(result);
