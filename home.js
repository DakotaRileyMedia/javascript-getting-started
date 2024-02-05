
let mySymbol = Symbol();

let person = {
  name: 'John',
  age: 32,
  partTime: false,
  showInfo: function(realAge) {
    showMessage(this.name + ' is ' + realAge);
  }

};
showMessage( typeof person.showInfo );
