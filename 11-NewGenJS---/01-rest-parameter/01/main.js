// จงเขียนฟังก์ชันหาค่าผลคูณของตัวเลข โดยพารามิเตอร์ของฟังก์ชันสามารถรับตัวเลขได้ไม่จำกัด

// function mulitply(...num) {
//   let result = 1;

//   for (let item of num) {
//     result *= item;
//   }

//   return result;
// }
// console.log(multiply(2, 4, 6, 8, 10));

let obj = { a: 1, b: 2, c: 3 };
// spread the object into a list of parameters
// then return the result in a new object
let objCopy = { ...obj };
// are the objects equal?
console.log(objCopy); // {a: 1, b: 2, c: 3}
console.log(obj === objCopy); // false (not same reference)
