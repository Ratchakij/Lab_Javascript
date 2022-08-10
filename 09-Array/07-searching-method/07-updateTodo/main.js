// - จงเขียนฟังก์ชัน updateTask(id, newName) เพื่อแก้ไขค่า element ใน tasks ที่มี property ชื่อ id เท่ากับ id โดยแก้ไข name ให้มีค่าเป็น newName
// - execute updateTask(2, 'Travelling')

const tasks = [
  { id: 1, name: "Fishing" },
  { id: 2, name: "Shopping" },
  { id: 3, name: "Swimming" },
];
// expexted result: 1

const updateTask = (id, newName) => {
  tasks.forEach((item) => {
    if (item.id === id) {
      item.name = newName;
    }
  });
};
updateTask(2, "Travelling");
console.log(tasks);
