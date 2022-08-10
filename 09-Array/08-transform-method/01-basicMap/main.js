// ให้สร้าง array result จาก array ที่กำหนด โดยใช้ arr.map(fn)

const arrayInt = [1, 2, 30, 400];
// result: [2, 4, 60, 800]
const resultInt = arrayInt.map(function (item, index, arr) {
  return item * 2;
});
resultInt;

const arrayNum = [1, 2, 3, 4];
// result: ["1", "2", "3", "4"]
const resultNum = arrayNum.map((item) => String(item));
resultNum;

const arrayType = [1, "1", 2, {}];
// result: ["number", "string", "number", "object"]
const resultType = arrayType.map((item) => typeof item);
resultType;

const arrayUpper = ["apple", "banana", "orange"];
// result: ["APPLE", "BANANA", "ORANGE"]
const resultUpper = arrayUpper.map((item) => item.toUpperCase());
resultUpper;

const arrayEvenOdd = [1, 3, 4, 5, 6, 7, 8];
// result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
const resultEvenOdd = arrayInt.map(function (item, index, arr) {
  if (item % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
});
resultEvenOdd; //?

const arrayOddEven = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
const resultOddEven = arrayOddEven.map((item) => Math.abs(item));
console.log(resultOddEven);

const arrayDecimal = [100, 200.25, 300.84, 400.3];
// result: ["100.00", "200.25", "300.84", "400.30"]
const resultDecimal = arrayDecimal.map((item) => item.toFixed(2));
console.log(resultDecimal);

const MONTH = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const arrayMonth = [0, 5, 10, 7, 6, 5, 0];
// result: ["Jan", "Jun", "Nov", "Aug", "Jul", "Jun", "Jan"]
const resultMonth = arrayMonth.map((index) => MONTH[index]);
console.log(resultMonth);

const arrayQuad = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
const resultQuad = arrayQuad.map((item) => item ** (1 / 4));
console.log(resultQuad);

const arrayObjectFruit = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
// result: ["apple", "banana", "watermelon"]
const resultObjectFruit = arrayObjectFruit.map((item) => item.name);
console.log(resultObjectFruit);

const arrayAgeFruit = [
  { name: "apple", age: 14 },
  { name: "banana", age: 18 },
  { name: "watermelon", age: 32 },
];
// result: [14, 18, 32]
const resultAgeFruit = arrayAgeFruit.map((item) => item.age);
console.log(resultAgeFruit);

const arrayUser = [
  { name: "apple", surname: "London" },
  { name: "banana", surname: "Bangkok" },
  { name: "watermelon", surname: "Singapore" },
];
// result: ["apple London", "banana Bangkok", "watermelon Singapore"]
const resultUser = arrayUser.map((item) => {
  const items = `${item.name} ${item.surname}`;
  return items;
});
console.log(resultUser);

const arrayOfObjectFruitBirth = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-01" },
  { name: "watermelon", birth: "1985-12-01" },
];
// result: [
//   { name: "apple", birth: "2000-01-01", age: 21 },
//   { name: "banana", birth: "1990-10-01", age: 31 },
//   { name: "watermelon", birth: "1985-12-01", age: 36 },
// ]
const CURRENT_YEAR = "2021";
const resultArrayOfObjectFruitBirth = arrayOfObjectFruitBirth.map((item) => {
  let age = CURRENT_YEAR - item.birth.slice(0, 4);
  return { ...item, age: age };
});
console.log(resultArrayOfObjectFruitBirth); //?

const array = [
  { name: "apple", birth: "2000-01-01" },
  { name: "banana", birth: "1990-10-10" },
  { name: "watermelon", birth: "1985-12-30" },
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
const display = array.map(function (item, index, arr) {
  // item ==  { name: 'apple', birth: '2000-01-01' }

  let name = item.name;
  let date = item.birth.slice(-2);
  let month = item.birth.slice(5, 7);
  let monthName = MONTH[month - 1].toLowerCase();
  let year = item.birth.slice(0, 4);

  return `<tr><td>${name}</td><td>${date} ${monthName} ${year}</td></tr>`;
});
console.log(display);
