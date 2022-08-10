// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าหาร 7 ลงตัวหรือไม่


const divideSeven = num => {

    if(num % 7 === 0) {
        return true;
    } else {
        return false
    }
    // return num%7 ===0 ? true : false // Ternary Type
}
console.log(divideSeven(10))










