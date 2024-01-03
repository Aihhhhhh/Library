//store all book objects in an array
const myLibrary =[];

//the book object constructor
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
    }

Book.prototype.info= function(){
    let readStatus = read? 'read': 'not yet read';
    let bookInfo= `${title} by ${author} has ${pages} pages and is ${read}`;
    return bookInfo
}


//get the whole form
const dialogShow = document.querySelector("#enquiry");
//get the book title
const bookTitle = dialogShow.querySelector("#title");
console.log(bookTitle);
//get the book author
const bookAuthor = dialogShow.querySelector("#author");
console.log(bookAuthor);
//get number of pages
const bookPages = dialogShow.querySelector("#pages");
console.log(bookPages);
//get the read status
const bookRead = dialogShow.querySelectorAll("[name='book-read']");
console.log(bookRead);
//loop though the nodelist and get selected value
let answer = () =>document.querySelector('input[name="book-read"]:checked').value
console.log(answer())//target the selected value by the user
bookRead.forEach(function(book){
    book.addEventListener("change",()=>{
        console.log(answer())
    })
})

//function for creating book object
function createBook(){
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    let read = answer();
    
    let newBook = new Book(title,author,pages,read);
    console.log(newBook);
    return newBook;
}
createBook()

//function for adding new book objects to the array
function addBook(){
    createBook();
    myLibrary.push(createBook())
    console.log(myLibrary)
    return myLibrary
    
}
addBook()
//function that loops through the array and returns each book
function getBook(){
    for (let i =0;i< myLibrary.length;i++){
        console.log(myLibrary[i])
        return myLibrary[i];
    }
}
getBook()
//display form on button click
const addButton = document.querySelector(".add-book");
console.log(addButton);
//function for displaying the modal
addButton.addEventListener("click",()=>{
    dialogShow.showModal();
})
//function for preventing submissions
const cancel = document.querySelector("#cancel")
cancel.addEventListener("click",(event)=>{
    event.preventDefault();
    dialogShow.close()
    displayTable()
})
//add a click event listener to the submit button
const submit = document.querySelector("#confirm")
submit.addEventListener("click",(event)=>{
    addBook();
    event.preventDefault();
    dialogShow.close();
})
//display table on a close event occuring

for(let i=0;i<myLibrary.length;i++){
    const card =`<div class="book-card" data-index=${i}>
                    <div class="card-info">
                        <h2>${bookTitle}</h2>
                        <h3>${bookAuthor}</h3>
                        <h4>${bookPages}</h4>
                        <p>${answer()}</p>
                        <div class="button">Remove Book</div>
                    </div>
                </div>`
    const books = document.createElement("div");
    books.append(card);
}
