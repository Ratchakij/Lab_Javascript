let age = 15;

let result = age == 15;

if (result) {
  console.log("Your age 15");
}

if (age >= 15 && age <= 21) {
  console.log("Teen");
}

////////////////////////////////
let balance = 10000;
let withDraw = 5000;

if (withDraw <= balance) {
  console.log("Process withdraw");

  balance -= withDraw;

  console.log("Total =", balance);
} else {
  console.log("Your money not enough");
}

////////////////////////////////
let score = 50;
let pass;

if (score > 50) {
  pass = "Pass";
} else {
  pass = "Fail";
}

// Ternary Operator
pass = score > 50 ? "Pass" : "Fail";
console.log(pass);

////////////////////////////////
let old = 15;

if (old <= 15) {
  // if ด้านนอกเป็นจริง if ด้านในจะทำงาน
  if (old == 15) {
    console.log("M3");
  } else if (old == 14) {
    console.log("M2");
  } else if (old == 13) {
    console.log("M1");
  } else {
    console.log("ประถม");
  }
} else {
  // if ด้านนอกไม่ป็นจริง else ด้านนอกจะทำงาน
  console.log("ม.ปลาย / ปริญญา");
}

///// Switch Case //////
let status = 0;
let light;

if (status == 0) {
  light = "Open";
} else if (status == 1) {
  light = "Close";
} else {
  light = "No Data";
}

switch (status) {
  case 0:
    light = "Close";
    break;
  case 1:
    light = "Open";
    break;
  default:
    light = "No Data";
}
console.log(light);

////////////////////////////////
let month = -1;
let name;

switch (month) {
  case 1:
    name = "Jan";
    break;
  case 2:
    name = "Feb";
    break;
  case 3:
    name = "Mar";
    break;
  case 4:
    name = "Apr";
    break;
  default:
    name = "No Data";
}
console.log(name);

///// Check Eve Odd /////
let x = 50;

if (x % 2 == 0) {
  console.log("Even Number");
} else {
  console.log("Odd Number");
}
// Ternary
x % 2 == 0 ? console.log("Even Number") : console.log("Odd Number");

///// Compare Number /////
let a = 50;
let b = 80;

if (a > b) {
  console.log("a");
} else if (a < b) {
  console.log("b");
} else {
  console.log("Equals");
}
