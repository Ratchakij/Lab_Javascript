// - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลข
// - ถ้า input หารด้วย 2 ลงตัว ให้โชว์ข้อความ “Even number”
// - ถ้า input หารด้วย 2 ไม่ลงตัว ให้โชว์ข้อความ “Odd number”



let num = prompt("Put Number")

if(num % 2 == 0){
    alert("Even number")
}
else {
    alert("Odd number")
}

// else if(num % 2 != 0){
//     alert("Odd number")
// }