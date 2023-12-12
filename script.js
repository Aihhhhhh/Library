//store all book objects in an array
const myLibrary =[];

//the book object constructor
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}
    this.info= function(){
        let readStatus = read? 'read': 'not yet read';
        let bookInfo= `${title} by ${author} has ${pages} pages and is ${readStatus}`;
        return bookInfo
    }
const bone = new Book("Bnture","bivinya",265,false);
const king =new Book("king","Queen",900,true);
//function for adding new book objects to the array
function addBook(book){
    myLibrary.push(book)
    return myLibrary
}
addBook()
//function that loops through the array and returns each book
function getBook(){
    for (let i =0;i< myLibrary.length;i++){
        console.table(myLibrary[i])
    }
}
getBook()