// บรรทัดที่มี \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

function magic() {
  return function (x) {
    return x * 42;
  };
}
const answer = magic();

console.log(answer); // * // ƒ (x) {return x * 42;}
console.log(answer(1337)); // ** // 5,6154

console.log(magic(1337)(42)); // *** // 1764 เพราะ magic() ในวงเล็บไม่ได้กำหนด parameter 1337 จึงไม่ได้คิดค่า
