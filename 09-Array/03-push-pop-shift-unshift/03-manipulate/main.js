// - จงสร้างตัวแปร Array ชื่อ animals โดยมี element 3 ตัว คือ Dog, Cat, Rat
// - ให้เพิ่ม Fish ต่อท้ายเข้าไปใน animals
// - ให้เพิ่ม Horse เข้าไปข้างหน้า animals
// - ให้เพิ่ม Giraffe และ Snake ต่อท้าย animals โดยต้องเพิ่มเข้าไปพร้อมกัน
// - ให้เอา Horse ออกจาก animals
// - ให้เอา Snake ออกจาก animals
// - ให้เอา Dog ออกจาก animals
// - ผลลัพธ์สุดท้ายของ animals คืออะไร

const animal = ["Dog", "Cat", "Rat"];

animal.push("Fish");
animal.unshift("Horse");
animal.push("Giraffe", "Snake");
animal.shift();
animal.pop();
animal.shift();

console.log(animal); // [ 'Cat', 'Rat', 'Fish', 'Giraffe' ]
