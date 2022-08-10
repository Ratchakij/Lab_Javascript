// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

let name = prompt("Enter Name");
let amount = +prompt("Enter Amount");
let price = +prompt("Enter Price");
let discount = prompt("Enter Discount");

products = { discount: 0 };
products = { ...products, name, amount, price, discount };
console.log(products);

const calPrices = (obj) => {
  let discountPrice = obj.amount * obj.price * (obj.discount / 100);
  let totalPrice = obj.amount * obj.price * discountPrice;
  return totalPrice;
};

console.log(calPrices(products));
alert(`Net Total: ${calPrices(products)}`);
