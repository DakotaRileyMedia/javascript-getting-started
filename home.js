
let person = {
  name: 'John',
  age: 32,
  partTime: false
};

function incrementAge(p) {
  p.age++;
}

incrementAge( person );

showMessage(person.age);
