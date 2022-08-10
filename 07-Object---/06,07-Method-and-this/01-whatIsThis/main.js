// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

let user = {
  name: "John",
  sayHi: function () {
    console.log(this.name);
  },
};

user.sayHi(); // * John // The value of this is the object “before dot”
