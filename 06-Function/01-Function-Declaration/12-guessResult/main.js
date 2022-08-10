// บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

/////////////
function getLongText() {
  return;
  ("Lorem Ipsum is simply dummy text of the printing and typesetting industry.");
}
console.log(getLongText()); // * undefined // หลัง return; หากโค้ดในฟังก์ชันรันคำสั่ง return เสร็จแล้ว โค้ดในฟังก์ชันบอดี้ จะจบการทำงานทันที (ถึงแม้ว่าจะมีโค้ดที่อยู่ใต้บรรทัดคำสั่ง return ก็ตาม โค้ดชุดนั้นก็ไม่ทำงาน)

/////////////
function getLongText() {
  return "Lorem Ipsum is simply dummy text of the printing and typesetting industry.";
}

console.log(getLongText()); // * ขึ้นข้อความ Lorem Ipsum is simply dummy text of the printing and typesetting industry.
