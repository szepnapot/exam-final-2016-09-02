// Create a function that counts the cars by colors
// With an output like: {red: 3, yellow: 2, white: 1, green: 1}


const cars = [{
    color: 'red',
    type: 'Volvo'
  }, {
    color: 'yellow',
    type: 'VW'
  }, {
    color: 'red',
    type: 'Ferrari'
  }, {
    color: 'white',
    type: 'Tesla'
  }, {
    color: 'yellow',
    type: 'Toyota'
  }, {
    color: 'red',
    type: 'Lada'
  }, {
    color: 'green',
    type: 'Trabant'
}];

function countColors(arr){
  'use strict';
  let output = {};
  arr.forEach((e) => output[e.color] = (output[e.color] || 0) + 1);
  return output;
}

console.log(countColors(cars));

function reducer(output, current){
  'use strict';
  output[current.color] = (output[current.color] || 0) + 1;
  return output;
}

console.log(cars.reduce(reducer, {}));
