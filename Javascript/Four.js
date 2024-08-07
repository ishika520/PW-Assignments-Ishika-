function hasProperty(obj, prop) {
       return obj.hasOwnProperty(prop);
   }
   
   // Example usage:
   const myObject = {
       name: 'Alice',
       age: 25,
       city: 'Wonderland'
   };
   
   console.log(hasProperty(myObject, 'age')); // true
   console.log(hasProperty(myObject, 'country')); // false
   