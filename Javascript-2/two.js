// Trying to call the function before it's declared will result in an error
// console.log(multiplyNumbers(2, 3)); // Uncaught ReferenceError: Cannot access 'multiplyNumbers' before initialization

// Function expression
const multiplyNumbers = function(a, b) {
       return a * b;
   };
   
   // Calling the function after it's declared
   console.log(multiplyNumbers(2, 3)); // Output: 6
   