// - ให้รับข้อมูลเป็นชื่อพนักงาน
// - หากมีพนักงานที่ชื่อตรงกับคีย์ในอ็อบเจ็คด้านล่างให้แสดงข้อความว่า Name: john, salary: 1000, address: Ratchathewi, Bangkok หากไม่มีชื่อแสดงข้อความว่า Not Found

const employees = {
  john: {
    salary: 1000,
    address: { district: "Ratchathewi", province: "Bangkok" },
  },
  peter: {
    salary: 1500,
    address: { district: "Pathumwan", province: "Bangkok" },
  },
  mike: {
    salary: 800,
    address: { district: "Pakkret", province: "Nonthaburi" },
  },
  sarah: {
    salary: 2200,
    address: { district: "Sriraja", province: "Chonburi" },
  },
};

const getEmployees = (obj) => {
  let name = prompt("Enter employee name");
  if (!obj[name] || name === null || name === "" || name.trim() === "") {
    return alert("Note Found");
  } else {
    let salary = obj[name].salary;
    let district = obj[name].address.district;
    let province = obj[name].address.province;

    let result = alert(
      `Name: ${name}, salary:${salary}, address:${district}, ${province}`
    );
    return result;
  }
};
console.log(getEmployees(employees));
