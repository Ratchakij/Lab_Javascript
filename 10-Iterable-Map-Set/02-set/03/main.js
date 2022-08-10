// จงเขียนฟังก์ชัน unique(arr) ให้คืนค่าเป็น array ที่มี element ไม่ซ้ำกัน โดยใช้ Set

const values = [1, 4, 8, 2, 1, 3, 3, 8];
console.log(unique(values)); // [1, 4, 8, 2, 3]

function unique(array) {
  const mySet = new Set(array);
  const newArray = Array.from(mySet);

  return newArray;
}
