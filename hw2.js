function hasProperty(obj, propName) {
  return propName in obj;
}

const myObj = {name: "Dmitry", age: 19};
console.log(hasProperty(myObj, "name"));
console.log(hasProperty(myObj, "address"));
