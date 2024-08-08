function manipulateString(str) {
       const upperCaseStr = str.toUpperCase();
     
       const logString = () => {
         console.log("The manipulated string is:", upperCaseStr);
       };
     
       return logString;
     }
     
     // Example usage:
     const myString = "hello world";
     const logFunction = manipulateString(myString);
     logFunction(); // Output: The manipulated string is: HELLO WORLD
     