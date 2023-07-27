let myLibrary = [];
const grid = document.querySelector(".books");
const addBook = document.querySelector(".add-book");

function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}

function addBookToLibrary() {
}


//Fetching data from the form
const form = document.querySelector(".form");
function getInput(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').value;
    return new Book(title, author, pages, read);
}


// Modal functionality
const modal = document.querySelector("#modal");
 
addBook.addEventListener('click', () =>{
    modal.showModal();
});
