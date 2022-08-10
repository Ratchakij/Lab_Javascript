// - จงเขียนโค้ดเพื่อรับ input ที่เป็นตัวเลขเข้ามา 2 ค่า
// - ให้โชว์ข้อความผลบวกของตัวเลขทั้ง 2
// - หากมี input อันนึงไม่ใช่ตัวเลข ให้โชว์ข้อความ “Invalid number”



let Num1 = prompt("Put Number 1")
let Num2 = prompt("Put Number 2")

if (isNaN(Num1)){
    alert("Invalid Number")
} else if (isNaN(Num2)) {
        alert("Invalid Number")
}
else {
    alert(+Num1 + +Num2)
}