function fetchAndLogTodo(url) {
       return fetch(url)
         .then(response => {
           if (!response.ok) {
             throw new Error(`HTTP error! status: ${response.status}`);
           }
           return response.json();
         })
         .then(data => console.log(data))
         .catch(error => console.error("Error fetching data:", error));
     }
     
     // Example usage:
     const todoUrl = "https://jsonplaceholder.typicode.com/todos/1";
     fetchAndLogTodo(todoUrl);
     