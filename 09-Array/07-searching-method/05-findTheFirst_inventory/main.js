// จงหา element ตัวแรก ใน inventory ที่มี name เท่ากับ cherries

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 5 },
];
// expected result: { name: 'cherries', quantity: 5 }

// Type 1
let matchIndex = inventory.findIndex((item) => item.name === "cherries");
console.log(matchIndex);

// Type 2
let foundObj = inventory.find((item) => item.name === "cherries");
console.log(foundObj);
