function myNormalFN () {
    return 5;
}

//when Excute

let result = myNormalFN



// ### Constructor Function

function MyConstructorFN () {

}

let instance = new MyConstructorFN()




// #### Demo 1

function User(name) {

    this.name = name;
    this.isAdmin = true;
  }

  let user = new User('john');
  alert(user.name); // john
  alert(user.isAdmin); // true


  ////////////// Constructor function //////////////

  function CodeCampStudent() {
    
    this.name = name;
    this.age = age;

  }

  let user1 = new CodeCampStudent('game',25)
  console.log(user1)

  let user2 = new CodeCampStudent('Yun',32)
  console.log(user2)

  //////// Method in Constructor ////////////

  function User(name) {

    this.name = name;
    this.sayHi = function () {
      alert('My name is: ' + this.name);
    };
  }
  
  let john = new User('John');
  john.sayHi(); // My name is: John
  