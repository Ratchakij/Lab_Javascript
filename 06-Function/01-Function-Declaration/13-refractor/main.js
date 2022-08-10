// - ให้สร้างฟังก์ชันที่ทำงานได้เหมือนฟังก์ชันด้านล่าง โดยให้เขียน 3 แบบ
// - ใช้ if แต่ห้ามใช้ else
// - ใช้ ? แทน if
// - ใช้ || แทน if

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm("Did parents allow you?");
//     }
// }

// Type 1 Declaration
function checkAge(age) {
  if (age > 18) {
    return true;
  }
  if (age <= 18) {
    return confirm("Did parents allow you?");
  }
}
console.log(checkAge(18));

// Type 2 Ternary
function checkAge(age) {
  return age > 18 ? true : confirm("Did parents allow you?");
}
console.log(checkAge(20));

// Type 3
function checkAge(age) {
  return age > 18 || confirm("Did parents allow you?");
}
console.log(checkAge(20));
