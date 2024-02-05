
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


const values = ['a', 'b', 'c'];
values.push('d', 'e', 'f');
let last = values.pop();
let first = values.shift();
values.unshift('hello', 'world')
console.log( first, values, last );

