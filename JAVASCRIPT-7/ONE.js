function doubleElementsWithCallback(arr, callback) {
       return arr.map(num => callback(num));
     }
     
     // Example usage:
     const numbers = [1, 2, 3, 4, 5];
     
     const doubledNumbers = doubleElementsWithCallback(numbers, num => num * 2);
     
     console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
     