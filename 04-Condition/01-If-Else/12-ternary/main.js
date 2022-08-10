// - จงเขียนโค้ดเพื่อรับคะแนนมาคำนวณเกรดในรูปแบบ Ternary Operator
// - ถ้าคะแนน มากกว่าเท่ากับ 80 ได้ A
// - ถ้าคะแนน อยู่ระหว่าง 70 - 79 ได้ B
// - ถ้าคะแนน อยู่ระหว่าง 60 - 69 ได้ C
// - ถ้าคะแนน อยู่ระหว่าง 50 - 59 ได้ D
// - ถ้าคะแนน น้อยกว่า 50 ได้ F



    
var score = prompt("Your Score");

var result = score == "" ? "Input Score"
: score < 50 ? "Your Grade : F" 
: score < 60 ? "Your Grade : D" 
: score < 70 ? "Your Grade : C" 
: score < 80 ? "Your Grade : B" 
: score < 101 ? "Your Grade : A"
: score == ""

alert(result)