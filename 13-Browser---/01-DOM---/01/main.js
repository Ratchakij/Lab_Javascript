// จงเขียนคำสั่งเพื่อ access \<div>, \<ul>, \<li> ตัวแรก และ \<li> ตัวที่สอง
// const div = document.querySelector("div");
// const ul = document.querySelector("ul");
// const li1 = document.querySelector("li");
// const li2 = document.querySelector("ul li:last-child");

// console.log(div);
// console.log(ul);
// console.log(li1);
// console.log(li2);

////////////////////////////////////////////////////////////////
for (let access of document.body.children) {
  console.log(access);
}
