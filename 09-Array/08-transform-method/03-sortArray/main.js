// จงเรียงข้อมูลใน arr จากมากไปหาน้อย

const arr = [11, 17, 23, 13, 7, 19];

function compareFN(a, b) {
  return a < b ? 1 : -1;
}
console.log(arr.sort(compareFN));
