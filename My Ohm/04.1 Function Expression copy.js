// A Function Declaration สามารถประกาศไว้ส่วนไหนของโค้ดก็ได้ และสามารถเรียกใช้ส่วนไหนของโค้ดก็ได้
// A Function Expression คือการประกาศฟังก์ชันแล้วเก็บไว้ในตัวแปร ดังนั้นจะเรียกใช้ฟังก์ชันได้ก็ต้องประกาศตัวแปรมาก่อน (เหมือนการใช้ตัวแปร)

const sum = function (a, b) {
  return a + b;
};

console.log(sum); // (*) จะแสดงโค้ดของฟังก์ชัน sum

console.log(sum(2, 5)); // ฟังก์ชัน sum ถูกเรียกใช้และ คืนค่า 7 ใน console จึงแสดงค่า 7

////////////////////////////////////////////////////////////////
//----- Copy Function -----
// (1) create
function sayHi() {
  console.log("Hello");
}
let func = sayHi; // (2) copy
func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    // this still works too (why wouldn't it)

////////////////////////////////////////////////////////////////
let sumNumber = function (x, y) {
  return x * y;
};
console.log(sumNumber(17, 7));
////////////////////////////////////////////////////////////////
function magic() {
  return function (x) {
    return x * 42;
  };
}
console.log(magic); // ***
const answer = magic();
console.log(answer); // *
console.log(answer(1337)); // **
