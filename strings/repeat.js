// Example 1: Basic String Repeat
const dogSound = "Woof! ";
console.log("Normal: " + dogSound.repeat(3)); 
// Output: Woof! Woof! Woof! 

// Example 2: Creating a Visual Divider
const line = "=".repeat(15);
console.log(line);
console.log("  HOTDOG  ");
console.log(line);
/* 
Output:
===============
  HOTDOG  
===============
*/

// Example 3: Edge Case (Repeat 0)
const ghost = "Boo!".repeat(0);
console.log("Ghost says: '" + ghost + "'"); 
// Output: Ghost says: '' (Empty string)