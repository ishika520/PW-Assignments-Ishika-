async function fetchCombinedData() {
       const todoUrl = "https://jsonplaceholder.typicode.com/todos/1";
       const postUrl = "https://jsonplaceholder.typicode.com/posts/1";
     
       try {
         const [todoResponse, postResponse] = await Promise.all([
           fetch(todoUrl),
           fetch(postUrl)
         ]);
     
         if (!todoResponse.ok || !postResponse.ok) {
           throw new Error("One or both API requests failed");
         }
     
         const todoData = await todoResponse.json();
         const postData = await postResponse.json();
     
         const combinedData = {
           todo: todoData,
           post: postData
         };
     
         console.log(combinedData);
       } catch (error) {
         console.error("Error fetching data:", error);
       }
     }
     
     fetchCombinedData();
     