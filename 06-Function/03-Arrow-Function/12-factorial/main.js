// ให้เขียนฟังก์ชันคำนวณค่า factorial


const calFac = (num) => {
    let result = 1;

    for(let i = 1; i <= num ; i++) {

        result *= i;
    }
    return result;
}

console.log(calFac(7))