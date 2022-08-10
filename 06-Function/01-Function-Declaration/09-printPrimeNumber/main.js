// - ให้สร้างฟังก์ชันเช็คตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่
// - ให้สร้างฟังก์ชันรับรับพารามิเตอร์เป็นตัวเลข และแสดงตัวเลขจำนวนเฉพาะทั้งหมดตั้งแต่ 2 ถึงตัวเลขที่รับมาเป็นพารามิเตอร์

function checkPrime(num) {
  let isPrime = true;

  // loop ตัวหาร
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}
console.log(checkPrime(13));

//console.log(checkPrime(7)) // isPrime == true
//console.log(checkPrime(20)) // isPrime == false

function printPrime(limit) {
  for (let i = 2; i <= limit; i++) {
    let isPrime = checkPrime(i);

    if (isPrime) {
      console.log(i);
    }
  }
}

printPrime(100);
