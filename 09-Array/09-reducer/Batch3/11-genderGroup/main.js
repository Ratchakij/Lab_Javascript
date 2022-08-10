// จง Group คนที่มีเพศเดียวกันเข้าด้วยกัน

const persons = [
  { name: "John", sex: "M" },
  { name: "Jody", sex: "M" },
  { name: "Susan", sex: "F" },
  { name: "Kate", sex: "F" },
  { name: "Sid", sex: "M" },
];
// expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }

const groupPerson = (arr, key) => {
  const result = arr.reduce((acc, item) => {
    const property = item[key];
    if (property in acc) {
      return { ...acc, [property]: acc[property].concat(item.name) };
    } else {
      return { ...acc, [property]: [item.name] };
    }
  }, {});
  return result;
};
console.log(groupPerson(persons, "sex"));
