// ให้สร้าง Object calculator ซึ่งมี 3 method  (ให้ใช้วิธี Constructor Function)
// - read() ให้รับค่า input 2 ค่า
// - sum() ให้ return ค่าผลบวกของเลขทั้งสอง
// - mul() ให้ return ค่าผลคูณของเลขทั้งสอง

function Calculator() {
  this.number1 = 0;
  this.number2 = 0;

  this.read = function () {
    this.number1 = +prompt("Enter number 1");
    this.number2 = +prompt("Enter number 2");
  };

  this.sum = function () {
    return this.number1 + this.number2;
  };

  this.mul = function () {
    return this.number1 * this.number2;
  };
}
const calculator = new Calculator();

calculator.read();
alert(calculator.sum());
alert(calculator.mul());
