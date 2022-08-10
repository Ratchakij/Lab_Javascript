const user = {
    name: 'John',
    age: 27,
    isMarried: false
  };
  
  for (let key in user) {
    console.log(key);
    console.log(user[key]);
  }
  