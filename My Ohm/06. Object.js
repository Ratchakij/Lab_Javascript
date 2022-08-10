// DECLARATION
let user = {
  name: "Ratchakij",
  age: "32",
};

let product = {
  name: "Mango",
  Price: "50",
  color: "Yellow",
  category: "Fruits",
};
console.log(product.name); // ใช้.แทน bracket ในการเข้าถึงข้อมูล
console.log(product["category"]); // ใช้ bracket "" ในการเข้าถึงข้อมูล

////////////////////////////////////////////////////////////////
//Object Method

let productA = {
  car: "Honda",
  Price: "100000",
  color: "Green",
  category: "Vehicle",
  displayProduct: function () {
    return "Brand = " + this.car + ", Price = " + this.Price;
  },
  discount: function () {
    return this.Price - 40000;
  },
};
productA.displayProduct(); // การเรียกใช้ Method
// การเรียกใช้ Method และให้แสดงผลผ่าน log
console.log(productA.displayProduct());
console.log(productA.discount());
