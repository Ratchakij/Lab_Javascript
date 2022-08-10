// - ให้เขียนโค้ดเพื่อรับ input มาเป็นตัวเลข
// - โดยให้รับมาเรื่อยๆ จนกว่า ผู้ใช้จะพิมพ์ 0, เลขลบ, String ว่าง, กด cancel หรือ esc จึงหยุดรับตัวเลข
// - ให้หาผลรวมและค่าเฉลี่ยของเลขที่ผู้ใช้งานกรอกเข้ามา

let input;
let sum = 0;
let count = 0;

do {
    input = prompt("Number")
    if (!(input === null || input.trim() === '' || input == 0 || isNaN(input)))
        sum += +input;
        count++;

} while (!(input === null || input.trim() === '' || input == 0 || isNaN(input)))

if (count > 0) {
    console.log(sum)
    console.log(sum / count)
}