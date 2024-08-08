function processBooks(books, callback) {
       const titles = books.map(book => book.title);
       titles.sort();
       callback(titles);
     }
     
     // Example usage:
     const books = [
       { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 },
       { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
       { title: "1984", author: "George Orwell", year: 1949 }
     ];
     
     processBooks(books, titles => console.log(titles));
     