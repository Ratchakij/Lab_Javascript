// ให้เขียนโค้ดเพื่อรับค่าจากผู้ใช้งาน 3 ค่า และเก็บไว้ในตัวแปร username, email และ password
// ให้สร้าง object user ที่มี property 3 อันคือ username, email และ password โดยให้แต่ละ property มีค่าตามตัวแปรที่รับมา

let username = prompt("Username");
let email = prompt("your email");
let password = prompt("password");

//short hand
const user = {
  username,
  email,
  password,
};
console.log(user);

// Type 1
// const user = {
//   username: username,
//   email: email,
//   password: password,
// };
