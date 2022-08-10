function setSalary(salary) {
  let bonus = 100000;
  return salary + bonus;
}
let user = setSalary(15000);
user -= 500;
console.log(user);

////////////////////////////////
function sum(x, y) {
  return x + y;
}
let total = sum(100, 200);
console.log(total);

////////////////////////////////
function getName(name, city) {
  return name + " " + city;
}
console.log(getName("Ratchakij", "Bangkok"));
