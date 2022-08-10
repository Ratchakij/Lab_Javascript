// function แบบไม่รับค่า
function message() {
  alert("แจ้งเตือนเงินเข้า");
}
// message(); // เรียกใช้ function

function userName() {
  document.write("Ratchakij");
}

////////////////////////////////////////////////////////////////
// function แบบรับค่า
function plusNumber(x) {
  console.log(x);
}
plusNumber(5);

let name = "Ratchakij";
plusNumber(name);

function fullName(fname, lname) {
  console.log(fname, lname);
}
fullName("Ratchakij", "Pradit");

function sumNumber(x, y) {
  total = x + y;
  console.log("Total =", total);
}
sumNumber(3, 5);

let names = prompt("Your Name");
function sayHelloUser(user) {
  alert("Hello " + names);
}
sayHelloUser(names);
