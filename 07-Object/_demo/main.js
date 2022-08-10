
// // // Object Declaration 
// // const myObj = new Object

// // console.log(muObj)


// // Object Literal ใช้บ่อย

// const person = {
//     firstName : "John", 
//     lastName : "Doe",
//     age : 27,
//     isAdmin : true,
//     child : null,
//     address : {
//         road : "Sukhumvit",
//         province : "Bangkok"
//     },
//     //Method = Function in object
//     sayHi : function () {
//         alert("Hello")
//     }
// }

// console.log(person.firstName)
// console.log(person.address.road)

// // UPDATE
// person.firstName = "Michael"
// person.age = person.age + 1
// person.address.road = "Asia" 

// console.log(person.firstName)

// // DELETE
// delete person.age;

// //ADD
// person.salary = 5000;
// console.log(person)

// /////// ACCESS BY SUARE BRACKET []

// //GET
// console.log(person['firstName']) // จะเข้าถึง object ต้อง เป็น string
// console.log(person[firstName]) //Reference Error

// //ADD
// person[`graduate school`] = 'CodeCamp'
// console.log(person)

// ////// Property Short Hand ////////
// let username = "CC12"
// let password = "1234"
// let role = "ADMIN"

// /// Normal
// const user = { 
//     username : username,
//     password : password,
//     role : role
// }
// /// Short Hand
// const user = { 
//     username,
//     password,
//     role
// }
// console.log(user)

// ////// In Operator
// const user = {
//     name: 'John',
//     age: 27
//   };
  
//   console.log('name' in user); // true user.name exists
//   console.log('birthDate' in user); // false user.birthDate doesn't exist

//   ///// OPTIONAL CHAINING
//   let user = {};

 
// console.log(user.address.province); // Error
// console.log(user.address ? user.address.province : undefined); // Fixed#1
// console.log(user.address && user.address.province); // Fixed#2


// console.log(user.address?.province); // Short and clean

  