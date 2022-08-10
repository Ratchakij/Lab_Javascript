let myfunc = function(a,b,c,d) {
    return a+b+c+d;
}

let x = myfunc(1,2,3,4)
console.log(`x : ${x}`)


///////// 1 Basic Syntax
let myArrowFunc = (a,b,c,d) => a+b+c+d

let y = myArrowFunc = (1,2,3,4) 
console.log(`y : ${y}`)


////////2 Single Parameter
let inCreaseByFive = num => num+5
console.log(inCreaseByFive(3))


///////// 3 Multiline Function Body !!! DON'T FORGET RETURN !!! 

let calcInterest = (balance,rate) => {

    let interest = balance*rate/100

    return interest; // !!!DON'T FORGET RETURN  
}
console.log(calcInterest(100,28))