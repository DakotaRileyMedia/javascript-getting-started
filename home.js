
'use strict';

let productId = 1234;

console.log(productId);

const button = document.getElementById('see-review');

button.addEventListener('click', function () {

  const review = document.getElementById('review');

  if (review.classList.contains('d-none')) {
    review.classList.remove('d-none');
    button.textContent = 'CLOSE REVIEW';
  }
  else {
    review.classList.add('d-none');
    button.textContent = 'SEE REVIEW';
  }

});

/* 
// arrays
const values = ['a', 'b', 'c'];
// push
values.push('d', 'e', 'f');
// pop
let last = values.pop();
// shift
let first = values.shift();
// unshift
values.unshift('hello', 'world')
// slice
let newValues = values.slice(1, 3);
// splice for deleting
let newNewValues = values.splice(1, 3);
// splice for inserting
values.splice(2, 0, 'hello');

console.log( first, values, last, newValues, newNewValues );

const values2 = [ 'a', 'bbb', 'c', 'd', 'z' ];

// indexOf
console.log(values2.indexOf('c'));

// filter
const set = values2.filter(function(item) {
  return item > 'b';
});

console.log( set );

// find
const found = values2.find(function(item) {
  return item.length > 1;
});

console.log( found) ;

// forEach
values2.forEach(function(item) {
  console.log(item);
});

// Using arrays in the DOM
// const containers = document.getElementsByClassName('container');
// containers[0].classList.add('d-none');
// console.log(containers);


let productId = 12345;

const app = {
  userName: 'Joe',
  orderNumbe: 789
};

function showProductId() {


  function fix() {

    console.log('in fix: ', productId);
  }

  fix();

  console.log('in showProductId: ', productId);
}

showProductId();

// Do Not DO THis:

//productId = 456;

//console.log(productId);

//let productId = 123;

// Hoisting
showProductId();

function showProductId() {
  console.log(123);
}


*/

