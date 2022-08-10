// จงสร้างฟังก์ชัน clone(arr) เพื่อ return ค่า Array ที่มี element เหมือน arr ทุกตัว

let arr = ["a", "b", "c", "d", "e"];

function clone(arr) {
  return arr.slice();
}

let newArr = clone(arr);

console.log(newArr);
