async function fetchPost(url) {
       const errorMessageElement = document.getElementById("error-message");
     
       try {
         const response = await fetch(url);
         if (!response.ok) {
           throw new Error(`HTTP error! status: ${response.status}`);
         }
         const data = await response.json();
         console.log(data); // Log the data (for debugging)
       } catch (error) {
         errorMessageElement.textContent = "Error fetching data: " + error.message;
       }
     }
     
     const postUrl = "https://jsonplaceholder.typicode.com/posts/123456789"; // Simulate error with non-existent post
     
     fetchPost(postUrl);
     