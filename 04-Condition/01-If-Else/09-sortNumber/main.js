// - เขียนโปรแกรมสำหรับรับตัวเลขจากผู้ใช้งาน 3 ตัวเลข
// - แสดงผลลัพธ์เป็นตัวเลขที่เรียงกันจากมากไปน้อย  
//   เช่นรับค่าเป็น -1 ,4, 0 ให้แสดงผลเป็น 4, 0, -1

// let a = +prompt("Put Number 1")
// let b = +prompt("Put Number 2")
// let c = +prompt("Put Number 3")


// if (a>b && b>c) {console.log(a,b,c);}
// else if (a>c && c>b) {console.log(a,c,b);}   
// else if (b>c && c>a) {console.log(b,c,a);}
// else if (b>a && a>c) {console.log(b,a,c);}  
// else if (c>a && a>b) {console.log(c,a,b);}    
// else if (c>b && b>c) {console.log(c,b,a);}  


///////////////////////////////////////////
let x = +prompt("Put Number 1")
let y = +prompt("Put Number 2")
let z = +prompt("Put Number 3")

if (x>y && x>z) {
    if (y>z) {
        console.log(`${x}:${y}:${z}`)
    } else if (z>y) {
        console.log(`${x}:${z}:${y}`)
    }
}
    else if (y>x && y>z) {
    if (x>z) {
        console.log(`${y}:${x}:${z}`)
    } else  {
        console.log(`${y}:${z}:${x}`)
    }
}
    else  {
        if(x>y){
            console.log(`${z}:${x}:${y}`)
        }
        else {
        console.log(`${z}:${y}:${x}`)
    }
}
