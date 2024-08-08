function greet(name) {
       return new Promise((resolve) => {
         const greeting = `Hello, ${name}!`;
         resolve(greeting);
       });
     }
     
     // Example usage:
     greet("Mithun")
       .then(greeting => console.log(greeting))
       .catch(error => console.error(error));
     