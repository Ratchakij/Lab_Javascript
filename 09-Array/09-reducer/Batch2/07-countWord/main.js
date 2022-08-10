// จงนับชื่อที่ปรากฏใน names

let names = ["Jack", "John", "Bill", "John", "Rick", "Bill", "John"];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

let result = names.reduce(function (acc, item, index, array) {
  if (!acc[item]) {
    acc[item] = 1;
  } else {
    acc[item] = acc[item] + 1;
  }
  return acc;
}, {});
