// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

// INPUT null
// OUTPUT Object

function createFruit() {
  const result = {};

  let key;
  let value;

  do {
    key = prompt("Fruit Name");
    value = +prompt("Fruit Amount");

    if (value > 1) {
      key += "s";
    }

    if (key !== "stop" && value !== "stop") {
      result[key] = value;
    }
  } while (key !== "stop" && value !== "stop");

  return result;
}
let inputFruit = createFruit();
console.log(inputFruit);
