// จงเขียนฟังก์ชันที่รับค่า ชื่อ นามสกุล และ งานอดิเรก ซึ่งงานอดิเรกอาจมี 1 หรือมากกว่า 1 ก็ได้ แล้วคืนค่าเป็น ชื่อ, นามสกุล, งานอดิเรก และจำนวนงานอดิเรก โดยใช้คุณสมบัติของ rest operator
function getPerson(firstName, lastName, ...hobbies) {
  return {
    firstName,
    lastName,
    hobbies,
    numHobbies: hobbies.length,
  };
}

const getPerson = (firstName, lastName, ...hobbies) => ({
  firstName,
  lastName,
  hobbies,
  numHobbies: hobbies.length,
});
