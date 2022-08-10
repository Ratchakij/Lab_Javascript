// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let phrase = "Hello";
if (true) {
  let user = "John";
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi(); // * Hello John // Outer variable / ฟังก์ชันสามารถเรียกใช้งานตัวแปรที่อยู่ภายนอกฟังก์ชันได้
