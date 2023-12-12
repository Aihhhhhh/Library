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
        let bookInfo= `${title} by ${author} has ${pages} ${readStatus}`;
        return bookInfo
}
//function for adding new book objects to the array
function addBookToLibrary(input){
    myLibrary.push(input)
}