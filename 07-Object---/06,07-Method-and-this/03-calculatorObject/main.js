// - ให้สร้าง Object calculator ซึ่งมี 3 method
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

let calculator = {
  // ... your code ...
  number1: 0,
  number2: 0,
  read() {
    this.number1 = +prompt("Enter number 1");
    this.number2 = +prompt("Enter number 2");
  },
  sum() {
    return this.number1 + this.number2;
  },
  mul() {
    return this.number1 * this.number2;
  },
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
