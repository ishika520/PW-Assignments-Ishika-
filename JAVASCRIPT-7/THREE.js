function ageInDays(person) {
       const fullName = `${person.firstName} ${person.lastName}`;
       const ageInDays = person.age * 365;
     
       const logMessage = () => {
         console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}`);
       };
     
       return logMessage;
     }
     
     // Example usage:
     const person = {
       firstName: 'Mithun',
       lastName: 'S',
       age: 20
     };
     
     const logPersonInfo = ageInDays(person);
     logPersonInfo(); // Output: The person's full name is Mithun S and their age in days is 7300