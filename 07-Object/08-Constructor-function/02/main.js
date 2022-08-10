// ให้สร้าง Constructor Function: Accumulator(startingValue)
// - มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// -  มี method  read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// -  มี method  show() ให้ alert ค่า currentValue

function Accumulator(startingValue) {
  this.currentValue = startingValue;
  this.show = function () {
    alert(this.currentValue);
  };
  this.read = function () {
    let newInput = +prompt("Enter Number");
    this.currentValue += newInput;
  };
}

const acc1 = new Accumulator(0);
const acc2 = new Accumulator(5);
const acc3 = new Accumulator(10);

acc1.read();

console.log(acc1);
console.log(acc2);
console.log(acc3);
