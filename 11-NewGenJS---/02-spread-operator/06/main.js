// จงเขียนฟังก์ชัน cloneArray โดยรับพารามิเตอร์มาเป็น Array และ return ค่าเป็น Array ที่มี element เหมือนกับพารามิเตอร์ที่รับเข้ามาทุกตัวi

const testArr = [1, 2, 3, 4, 5];

const cloneArr = (arr) => {
  return [...arr];
};
console.log(cloneArr(testArr));
