// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าเป็นจำนวนเฉพาะหรือไม่ในรูปแบบ Arrow Function




const checkPrime = num => {
    isPrime = true;

    for (let i = 2; i<num; i++){
        if(num%i ===0)
        isPrime = false;
        break;
    }
    return isPrime
}
console.log(checkPrime(10))