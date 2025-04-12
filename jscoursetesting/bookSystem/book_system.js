let books =[];

function addBook(){

    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName:authorName,
            bookDescription:bookDescription,
            pagesNumber:pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
        } else {
            alert('Please fill in all fields correctly.');
        }
    }
    function showbooks(){
        const booksDiv = books.map((book, index)=>`<h>Book Number : ${index+1}</h>
                         <p>Book Name   : ${book.name}</p>
                         <p>Author Name : ${book.authorName}</p>
                         <p>Book Description : ${book.bookDescription}</p>
                         <p>No. of Pages : ${book.pagesNumber}</p>
                         <button onclick = "editbook(${index})">Edit Books</button>`);
        document.getElementById('books').innerHTML = booksDiv.join('');
    }

    function editbook(index) {
    const book = books[index];
    document.getElementById('bookName').value = book.name;
    document.getElementById('authorName').value = book.authorName;
    document.getElementById('bookDescription').value = book.bookDescription;
    document.getElementById('pagesNumber').value = book.pagesNumber;
    books.splice(index, 1); // Remove old entry
    showbooks(); // Refresh list
  }

 function clearInputs() {
            document.getElementById('bookName').value = '';
            document.getElementById('authorName').value = '';
            document.getElementById('bookDescription').value = '';
            document.getElementById('pagesNumber').value = '';
 }