// - ให้เขียนฟังก์ชัน squareArr(arr) เพื่อคืนค่า Array ที่มี element เป็นเลขยกกำลังสองของแต่ละ element ใน arr
// - ตัวอย่างผลลัพธ์

/*
INPUT : arr 
OUTPUT : newArr SQUARE !!
*/

function squareArr(arr) {
  const resultArr = [];

  // Logic ==> LOOP every item

  arr.forEach((item, index) => {
    resultArr[index] = item ** 2;
  });
  return resultArr;
}
const arr = [2, 3, 5, 7, 11];
console.log(squareArr(arr));
