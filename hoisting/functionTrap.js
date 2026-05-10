sayHi(); // TypeError: sayHi is not a function (if using var)
         // ReferenceError (if using let/const)

var sayHi = function() {
  console.log("Hi!");
};