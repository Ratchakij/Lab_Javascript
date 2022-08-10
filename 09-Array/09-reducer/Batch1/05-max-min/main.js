// จงหาค่ามากสุดและน้อยสุดใน arr

let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

const initialValue = {
  max: arr[0],
  min: arr[0],
};

let summary = arr.reduce((acc, item) => {
  if (acc.max < item) {
    acc.max = item;
  }
  if (acc.min > item) {
    acc.min = item;
  }
  return acc;
}, initialValue);

console.log(summary);
