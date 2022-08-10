// ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่
// ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

function isEmptyObject(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
const user_1 = { name: "cc12" };
const user_2 = { name: "Codecamp", cohort: 12 };
const user_3 = {};

console.log(isEmptyObject(user_1)); // false
console.log(isEmptyObject({ name: "Codecamp", cohort: 12 })); // fales
console.log(isEmptyObject(user_3)); // true
