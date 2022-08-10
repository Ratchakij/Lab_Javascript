// ให้ใช้ Array destructuring ในการสลับค่าตัวแปร guest กับ admin

let guest = "Jane";
let admin = "Pete";
let names = [guest, admin];

[names[0], names[1]] = [names[1], names[0]];

console.log(names);
