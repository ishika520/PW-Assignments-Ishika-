async function fetchPosts() {
       const url = "https://jsonplaceholder.typicode.com/posts";
     
       try {
         const response = await fetch(url);
         if (!response.ok) {
           throw new Error(`HTTP error! status: ${response.status}`);
         }
         const data = await response.json();
         console.log(data);
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     }
     
     fetchPosts();
     