// จงเขียนฟังก์ชัน ucFirst(str) เพื่อแปลงตัวอักษรตัวแรกของ str ให้เป็นตัวพิมพ์ใหญ่ ส่วนตัวอักษรที่เหลือให้มีขนาดเหมือนเดิม

function ucFirst(str) {
  let firstChar = str[0];
  let leftString = str.slice(1);

  return firstChar.toUpperCase() + leftString;
}
console.log(ucFirst("hello"));
