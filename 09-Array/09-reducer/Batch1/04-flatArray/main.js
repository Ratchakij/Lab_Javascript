// จงกระจาย element ที่ซ้อนกันอยู่ภายใน array ให้กระจายออกมาที่ element ชั้นนอกสุด

const flattened = [
  [0, 1],
  [2, 3],
  [4, 5],
];
// expected result: [0, 1, 2, 3, 4, 5]

function flatArray(array) {
  let flattedArray = array.reduce((acc, item, index) => {
    acc.push(...item);
    return acc;
  }, []);
  return flattedArray;
}
console.log(flatArray(flattened));
