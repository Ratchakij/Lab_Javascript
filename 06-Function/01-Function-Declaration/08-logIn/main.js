// - ให้สร้างฟังก์ชัน login ที่มีพารามิเตอร์ 2 ตัว คือ username และ password
// - ถ้า username = “admin” และ password = “P@ssw0rd” แสดงว่า login สำเร็จ แต่ถ้าไม่ใช่แสดงว่าไม่สำเร็จ

// let username = 'admin';
// let password = 'P@ssw0rd';

function login(username, password) {
  if (username === "admin" && password === "P@ssw0rd") {
    console.log("login สำเร็จ");
  } else {
    console.log("login ไม่สำเร็จ");
  }
}
login("admin", "P@ssw0rd"); // login สำเร็จ
login("AAA", "BBB"); // login ไม่สำเร็จ
