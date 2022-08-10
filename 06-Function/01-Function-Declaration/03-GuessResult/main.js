// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // * "Hello everybody" // Scope in Local
}

logMessage(message);
console.log(message); // ** "Welcome to Thailand" // Scope out Global

let name = "John";

function sayHi(input) {
  console.log(name); // *** "John" // ฟังก์ชันสามารถเรียกใช้งานตัวแปรที่อยู่ภายนอกฟังก์ชันได้
  name = input;
}

sayHi();
console.log(name); // **** "undefined" // เพราะ Parameter 'input' ไม่ได้รับค่าจึงคืนค่ามาเป็น undefined
