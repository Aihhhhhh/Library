//store all book objects in an array
const myLibrary =[];

//the book object constructor
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;

    this.info= function(){
        let readStatus = read? 'read': 'not yet read';
        let bookInfo= `${title} by ${author} has ${pages} pages and is ${readStatus}`;
        return bookInfo
    }
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
console.log(bookPages)
//function for creating book object
function createBook(){
    let title = bookTitle.value;
    let author = bookAuthor.value;
    let pages = bookPages.value;
    
    let newBook = new Book(title,author,pages);
    console.log(newBook)
    return newBook;
}
createBook()

//function for adding new book objects to the array
function addBook(){
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
})
//add a click event listener to the submit burron
const submit = document.querySelector("#confirm")
submit.addEventListener("click",(event)=>{
    createBook()
    addBook()
    event.preventDefault()
    dialogShow.close()
})
//display table on a close event occuring

