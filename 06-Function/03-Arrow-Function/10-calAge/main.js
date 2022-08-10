// ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)  
// ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020




let isLeapYear = year => {

    if(year % 100 === 0 && year % 400 ===0){
        return true;
    }
    return year % 4 === 0;
}

let calDayFromBirthYear = (birthyear) => {
    let day = 0;

    for(let i = birthyear; i <= 2020; i++) {

            if(isLeapYear(i)){
            day += 365;
        } else  {
            day += 365;
        }
    }    
    return day;
}


console.log(calDayFromBirthYear(2020))