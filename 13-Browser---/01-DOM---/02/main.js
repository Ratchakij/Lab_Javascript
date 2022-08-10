// จงเขียนคำสั่งเพื่อ access \<h2> โดยใช้วิธีต่อไปนี้
// - querySelector
// - querySelectorAll
// - getElementsByClassName
// - getElementsByTagName

let access = document.querySelector(h2);

const access1 = document.querySelector("title-1");
const access2 = document.querySelectorAll("title-1");
const access3 = document.getElementsByClassName("title-1");
const access4 = document.getElementsByTagName("title-1");

console.log(access1);
console.log(access2);
console.log(access3);
console.log(access4);
