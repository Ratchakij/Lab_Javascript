// - จงเขียนโค้ดเพื่อรับ input เข้ามา 2 ค่า คือ username และ password
// - หาก username หรือ password เป็นค่าว่างให้ โชว์ข้อความ “username is required” หรือ “password is required”
// - หาก username = “admin” และ password = “1234” หรือ username = “john” และ password = “qwerty” ให้โชว์ข้อความ “Hello” ตามด้วยชื่อ username
// - หาก username และ password ไม่ตรงตามเงื่อนไขที่กล่าวมาให้ โชว์ข้อความ “invalid username or password”



let username = prompt("Enter Username");
let password = prompt("Enter Password");

if (username === null || username.trim() === '') {
    alert('username is required')
    // ไม่ใส่ username
    if(password === null || password.trim()=== ''){
        alert('password is required')
    }

} else if (password === null || password.trim() === '') {
    // ใส่ username แต่ ไม่ใส่ password
    alert('password is required')

} else {
    // ใส่ทั้ง username และ password
    if ((username === 'admin' && password === '1234') || (username === 'john' && password === 'qwerty')) {
    alert('Hello' + ' ' + username); 
    }
    else {
        alert('invalid username or password');
    }
}


