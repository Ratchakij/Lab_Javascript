// จงเขียนฟังก์ชัน mergeObjects โดยพารามิเตอร์ของฟังก์ชันสามารถรับ Object ได้ไม่จำกัด และให้ return ค่าเป็น Object ที่เกิดจาก Object ในพารามิเตอร์มา merge กัน (ในกรณีที่ Object ในพารามิเตอร์มี key ซ้ำกันให้ยึดค่าพารามิเตอร์ตัวที่มาก่อนเป็นหลัก)

const mergeObjects = (...objs) => {
  let reObj = objs.reverse();
  let newObj = {};

  newObj = reObj.reduce((acc, item) => {
    Object.assign(acc, item);
    return acc;
  }, {});

  return newObj; //?
};

const obj1 = { num1: 1 };
const obj2 = {
  num2: 2,
  num3: 3,
  num1: 4,
};
mergeObjects(obj1, obj2);
