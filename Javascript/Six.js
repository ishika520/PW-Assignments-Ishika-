function reverseString(str) {
       // Convert the string to an array of characters
       const charArray = str.split('');
     
       // Reverse the array using the reverse() method
       charArray.reverse();
     
       // Convert the array back to a string
       const reversedStr = charArray.join('');
     
       return reversedStr;
     }
     
     // Example usage:
     const originalString = "hello world";
     const reversedString = reverseString(originalString);
     console.log(reversedString); // Output: "dlrow olleh"
     