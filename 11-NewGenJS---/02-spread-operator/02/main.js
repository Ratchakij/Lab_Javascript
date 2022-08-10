// จงเขียนฟังก์ชันที่ใช้คุณสมบัติของ Spread operator เพื่อรับค่า array1
// แล้วคืนค่าเป็น array ที่มีการเปลี่ยนแปลงค่าของ index ที่ 3 ให้มีค่าเท่ากับ ค่าเดิมยกกำลัง 2 โดยที่ array1 ไม่เกิดการเปลี่ยนแปลง

const array1 = [10, 20, 30, 40, 50];
function spreadOperator(sum) {
  let num3 = [array1];

  num3[3] = array1[3] ** 2;

  return num3;
}
console.log(spreadOperator(array1));
