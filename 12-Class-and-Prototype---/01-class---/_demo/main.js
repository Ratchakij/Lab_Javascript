class User {
  name;
  password;
  role;

  constructor(name, password, role) {
    console.log(constructor);
    this.name = name;
    this.password = password;
    this.role = role || "Guest";
  }

  login(password) {
    console.log("login");
  }
  changePassword(newpassword) {
    console.log("changePassword");
  }
  logingName() {
    console.log("this.name");
  }
}

const a = new User("AAA", "123", "Admin");
const b = new User("BBB", "456");
const c = new User("CCC", "789");

console.log(a);
console.log(c);
console.log(b);

////////////////////////////////////////////////////////////////
class Admin extends User {
  createAccount(name, email, password) {
    console.log(createAccount);
  }
}

////////////////////////////////////////////////////////////////
class Customer extends User {
  constructor(rank, ...args) {
    super(...args);
    this.rank = rank;
  }

  createOrder(cart) {
    console.log("createOrder");
  }
  login(phoneNumber) {
    console.log("Customer Login");
  }
  logCustName() {
    super.logingName();
  }
}

const cust = new Customer("Cust", "12", "customer");
cust.login();
