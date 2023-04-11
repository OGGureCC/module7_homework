function printOwnProperties(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key}: ${obj[key]}`);
    }
  }
}

let obj = {
  name: "Dmitry",
  tea: "black",
  price: 1000,
};

printOwnProperties(obj);
