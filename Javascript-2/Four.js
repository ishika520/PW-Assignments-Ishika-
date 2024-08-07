{
       // Trying to log the variables before they are declared
       console.log(a); // undefined (due to hoisting)
       // console.log(b); // ReferenceError: Cannot access 'b' before initialization
       // console.log(c); // ReferenceError: Cannot access 'c' before initialization
   
       // Declaring the variables
       var a = 1;
       let b = 2;
       const c = 3;
   
       // Logging the variables after they are declared
       console.log(a); // 1
       console.log(b); // 2
       console.log(c); // 3
   }
   