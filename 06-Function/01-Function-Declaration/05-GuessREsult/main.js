// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

const sender = "Matt";

function sendTo(from, to) {
  console.log(`From ${from} to ${to}`);
}

sendTo(sender, "Sarah"); // * From Matt to Sarah
sendTo(null); // ** From null to undefined // to  ไม่ได้รับค่าตัวแปรขึ้น undefined

const sender2 = "Matt";

function sendTo(to, from = "CC") {
  console.log(`From ${from} to ${to}`);
}

sendTo("Max"); // *** From CC to Max // from ไม่ได้กำหนดตัวแปรจึงเป็นค่า default = CC
sendTo("Ben", "Jay"); // ****  From Jay to Bec // กำหนดค่า parameter ครบ from จึงใช้ค่า Jay แทน default
