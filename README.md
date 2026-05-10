# JS-Fundamentals

## Hoisting Practice ##

In this experiment, I observed how var is initialized as undefined due to hoisting, while let remain in the TDZ(Temporal Dead Zone). This is why we prefer const/let in our modern projects.

### Function Hoisting ###
- Yung buong function body namomove sa top.
- You can call function before you define it.

### Variable Hoisting ###
- Var is a function-scoped, meaning, even if you declare it inside if block or for loop, it can be visible in the whole function. 
- Declaration lang yung hoisted, hindi yung initialization(value)
- Alam ng Javascript na nag eexist yung variable pero naka default sya as undefined.
- var is hoisted at the top of their enclosing scope
- function-scoped.

### Let/Const Hoisting ###
- These are two new identifiers for storing values
- Referencing block-scoped identifiers before they are defined will produce a ReferenceError.
- block-scoped

When to use let and const:
(let)
- Use let for variables that will change their value overtime
- reassignable.

(const)
- Use const for variables which cannot be reassigned.
- constant
- default

## Replacing IIFEs with Blocks ##
- A common use of Immediately Invoked Function Expressions is to enclose values within its scope
- The concept of IIFE is Scope Management
- It makes the code cleaner and more readable because we eliminate the boilerplate syntax of a function just to create a scope.

## Arrow Function ##

- Arrow functions provide a more concise syntax and, more importantly, they lexically bind the this value.
- Unlike regular functions, arrow functions do not create their own this context. They inherit this from the parent scope. This eliminates the need for var self = this or .bind(this), making the code cleaner and less prone to errors when dealing with callbacks or nested functions.
- Regular Function: May sariling this. (Dynamic scope)
- Arrow Function: Nakikihati sa this ng magulang. (Lexical scope)
- Gamitin ang Arrow Function sa mga callbacks (map, filter, setTimeout) para hindi mawala ang context ng this.

## Strings ##

### .includes() ###
- Return value ay boolean
- case sensitive
### .repeat() ###
- pangpalit sa manual for loop