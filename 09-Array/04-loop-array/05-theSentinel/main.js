// - ให้ใช้ฟังก์ชัน prompt เพื่อรับค่าตัวเลข แล้วเก็บไว้ในตัวแปร Array
// - รับค่าตัวเลขไปเรื่อยๆจนกว่าผู้ใช้จะพิมพ์ข้อความที่ไม่ใช่ตัวเลขหรือกด cancel
// - ให้หาผลรวมของตัวเลขที่เก็บไว้ในตัวแปร Array

const THE_SENTINEL = "stop";

function createArrayFromUser() {
  const result = [];
  let key;
  do {
    key = prompt("Enter Key");
    if (key !== null && key !== "" && key !== THE_SENTINEL) {
      result.push(key);
    }
  } while (key !== THE_SENTINEL);
  {
    return result;
  }
  let user = createArrayFromUser();
}
console.log(user);
