// ให้เขียนเกมส์ทายตัวเลขสำหรับผู้เล่นสองคน โดยมีเงื่อนไขดังนี้

// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนแรกพิมพ์เลข ที่อยู่ระหว่าง 1 ถึง 99 โดยไม่ให้ผู้เล่นคนที่สองรู้ว่าตัวเลขเป็นอะไร
// - ให้ใช้คำสั่ง prompt เพื่อให้ผู้เล่นคนที่สองทายเลข จนกว่าจะถูก
// - ถ้าไม่ถูก จะต้องบอกด้วยว่าเลขที่ผู้เล่นคนที่สองพิมพ์เข้ามา มากกว่า หรือ น้อยกว่าคำตอบนั้น
// - หากพิมพ์ถูกให้แสดงคำว่าถูกต้อง และให้แสดงจำนวนครั้งที่ทาย

let answer = prompt("Player A : Enter Number");

if (+answer < 1 || +answer > 99) {
  alert("Invalid Range");
} else {
  let count = 0;
  let guess;
  do {
    guess = prompt("Player 2");
    count++;

    if (guess == answer) {
      alert("Correct");
      alert(count);
    } else if (+guess < +answer) {
      alert("Less Than");
    } else if (+guess > +answer) {
      alert("More Than");
    } else {
      alert("Please input Number Between 1-99");
    }
  } while (guess !== answer);
}
