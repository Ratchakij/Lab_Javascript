// - จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id
// - execute deleteTask(1)

const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];

function deleteTask(id) {
  let FoundIndex = tasks.splice((item) => item.id === id);

  if (FoundIndex !== -1) {
    tasks.splice(FoundIndex, 1);
  }
}
deleteTask(2);
console.log(tasks);
deleteTask(3);
console.log(tasks);
