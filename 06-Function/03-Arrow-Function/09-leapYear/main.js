// ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year 
// - leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว 
// - ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว


// let isLeapYear = year => {

//     if(year % 100 === 0){

//         // if(yerar % 400 === 0)
//         //     return true;
//         // else{
//         //     return false;
//         // }

//         return year % 400 === 0
//     }
// }


let isLeapYear = year => {

    if(year % 100 === 0 && year % 400 ===0){
        return true;
    }
    return year % 4 === 0;
}
    // if(yerar % 400 === 0)
    //     return true;
    // else{
    //     return false;
    // }

    // return year % 400 === 0