// จงเขียนฟังก์ชันในการแปลงคำที่อยู่ในรูปแบบ dash-separated เช่น background-color ให้อยู่ในรูปแบบ camelCase เช่น backgroundColor
let text = "background-color";
function transFrom(value) {
  let first = value.slice(0, 10);
  let second = value.slice(11, 12);
  let third = value.slice(12);
  let transF = second.toUpperCase();
  let all = `${first}${transF}${third}`;

  return all;
}
console.log(transFrom(text));
