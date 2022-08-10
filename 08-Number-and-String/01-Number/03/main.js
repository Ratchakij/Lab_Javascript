// จงเขียนฟังก์ชันในการคำนวณแต้มจากยอดซื้อขาย โดยทุกยอดซื้อ 100 บาท จะได้ 1 แต้ม หากคำนวณแล้วได้แต้มไม่เป็นจำนวนเต็มให้ปัดเศษลง

function calPoint1(sell) {
  let point1 = Math.floor(sell / 100);
  return point1;
}
console.log(calPoint1(199));

////////////////////////////////
let calPoint2 = (sell) => {
  let point2 = Math.floor(sell / 100);
  return point2;
};
console.log(calPoint2(199));
