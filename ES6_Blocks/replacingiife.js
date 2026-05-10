(function () {
    var food = 'Meow Mix';
}());

console.log(food); // Reference Error

/* Using ES6 Blocks: */

{
    let food = 'Meow Mix';
};

console.log(food); // Reference Error