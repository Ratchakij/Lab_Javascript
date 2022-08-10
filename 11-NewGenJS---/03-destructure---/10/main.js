// - จงเขียนฟังก์ชัน topSalaries(salaries) เพื่อ return ชื่อคนที่มี salary สูงสุด
// - ถ้า salaries เป็น empty object ให้ return null
// - ถ้ามีคนที่ได้ salary มากสุดให้ return ชื่อคนใดคนหนึ่ง

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

const topSalaries = (salaries) => {
  const values = Object.values(salaries);
  const max = Math.max.apply(Math, values);
  for (key in salaries) {
    console.log(key);
    if (salaries[key] === max) {
      return { [key]: max };
    }
  }
};
console.log(topSalaries(salaries));
