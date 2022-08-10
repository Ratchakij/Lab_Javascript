// จงสร้างฟังก์ชัน getAverageAge(arr) เพื่อหาอายุเฉลี่ยของ array

let john = { name: "John", age: 27 };
let jo = { name: "Jo", age: 21 };
let jin = { name: "Jin", age: 25 };

let arr = [john, jo, jin];

console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33

function getAverageAge(array) {
  let sumAge = array.reduce(function (acc, item) {
    let age = item.age;

    return acc + age;
  }, 0);

  let averageAge = sumAge / array.length;
  return averageAge;
}
console.log(getAverageAge(arr));

// const nums = [-3, 2, 11, -7, 4, 6];

// let result = nums.reducae((num,current) => num * current, 1);

// console.log(result)
