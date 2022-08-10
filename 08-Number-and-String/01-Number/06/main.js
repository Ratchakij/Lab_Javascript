// จงเขียนฟังก์ชันในการสุ่มตัวเลข random(min, max) โดยให้ผลลัพธ์มีค่าเป็นจำนวนจริงตั้งแต่ min ถึง max (ไม่รวม max)

function makeRandom(min, max) {
  let Random_Number = Math.floor(Math.random() * (max - min));

  return min + Random_Number;
}
console.log(makeRandom(1, 6));
