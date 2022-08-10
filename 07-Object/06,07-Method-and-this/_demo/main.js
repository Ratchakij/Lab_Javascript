
// /// Method
// const cat = {
//     age : 2,
//     name : "ChaYen",

//     roar : function() {alert("Meow")},
//     roar() {alert("Meow")}, // Short Hand 
    
//     sleep : () => {alert("Don't bother me !!")}
// }

// Function Declaration
function a(){
    console.log(this)
 }
 a(); // this === window object
 window.a() // this === window object
 
 // Function Expression
 let b = function () {
    console.log(this)
 }
 
 b(); // this === window object
 window.b() // Error window.b is not a function
 
