// ให้เขียนโค้ดเพื่อหาผลรวมของเลขโดด  
//     - รับค่าตัวเลขจากผู้ใช้งาน  
//     - แสดงผลลัพธ์เป็นผลรวมของเลขแต่ละหลัก

// <!-- 4596 === 4+5+9+6 -->

let number = +prompt("EnterNumber")
let count = 0;

while(number){
    let remainder = number % 10 // 6
    number = (number - remainder) / 10 // 459
    count = (count + remainder) 
}
alert(count);

