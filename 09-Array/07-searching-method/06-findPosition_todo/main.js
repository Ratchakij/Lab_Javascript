// จงหา index ใน tasks ที่มี id เท่ากับ 2

const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];
// expexted result: 1

let index = tasks.findIndex((item) => {
  if (item.id === 2) {
    return item;
  }
});
console.log(index);
