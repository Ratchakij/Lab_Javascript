// - จงสร้าง Set เก็บไว้ในตัวแปรชื่อ set
// - เพิ่ม value เข้าไปใน set ตามลำดับดังนี้ Thailand, Japan, Thailand, China, India, Thailand, China, Singapore, Japan
// - ลบ india ออกจาก set
// - หาจำนวนของข้อมูลใน set
// - สร้างตัวแปร array โดยมี element เป็นข้อมูลใน set ทั้งหมด

let set = new Set();

set.add("Thailand");
set.add("Japan");
set.add("Thailand");
set.add("China");
set.add("India");
set.add("Thailand");
set.add("China");
set.add("Singapore");
set.add("Japan");
set.delete("India");
set.size;

const array = Array.from(set);
console.log(array);
