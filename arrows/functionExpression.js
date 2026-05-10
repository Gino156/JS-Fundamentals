// var squares = arr.map(function (x) { return x * x }); // Function Expression
const arr = [1, 2, 3, 4, 5];
const squares = arr.map(x => x * x); // Arrow Function for terser implementation

console.log(squares)