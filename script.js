//store all book objects in an array
const myLibrary =[];

//the book object constructor
function book(title,author,pages){
    this.title=title;
    this.author=author;
    this.pages=pages;
}
//function for adding new book objects to the array
function addBookToLibrary(input){
    myLibrary.push(input)
}