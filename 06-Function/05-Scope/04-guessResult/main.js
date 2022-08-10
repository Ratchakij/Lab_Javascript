// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let x = 1;
function func() {
  console.log(x); // <-- ต้องประกาศก่อนใช้ // Error! The variable is local to the function
  let x = 2;
}
func();
