// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

function sayHi(age) {
  if (age < 12) alert("Hi kid");
}
console.log(sayHi); // * //  ƒ sayHi(age) {if (age < 12) alert("Hi kid");}
console.log(sayHi(10)); // ** undefined ไม่มี return

function sayHi(name) {
  if (name) {
    alert("Hi " + name);
    return;
  } else {
    return "Who are you";
  }
}
console.log(sayHi("John")); // *** // return แบบไม่มีค่า คืนค่าเป็น undefined
console.log(sayHi()); // **** // return "Who are you"
