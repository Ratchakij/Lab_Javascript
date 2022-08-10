// ให้สร้างฟังก์ชันชื่อ min มีพารามิเตอร์ 2 ตัว และให้ผลลัพธ์เป็นค่าที่น้อยกว่าของพารามิเตอร์ทั้งสอง

function min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

let total = min(2, 6);
console.log(total);
