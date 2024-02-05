
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

// Arrays
const values = ['a', 'b', 'c'];
// Push
values.push('d', 'e', 'f');
// Pop
let last = values.pop();
// Shift
let first = values.shift();
// Unshift
values.unshift('hello', 'world')
// Slice
let newValues = values.slice(1, 3);
// Splice for deleting
let newNewValues = values.splice(1, 3);
// Splice for inserting
values.splice(2, 0, 'hello');

console.log( first, values, last, newValues, newNewValues );

