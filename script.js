const grid = document.querySelector(".books");
const addBook = document.querySelector(".add-book");

//Book constructor
function Book(title,author,pages,read){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.read=read;
}


//Function to create a card with the inputted data
function createCard(book) {
    const title = document.createElement("p");
    const author = document.createElement("p");
    const pages = document.createElement("p");
    title.textContent = book.title;
    author.textContent = book.author;
    pages.textContent = book.pages + " Pages";

    const read = document.createElement("button");
    if(book.read===true){
        read.classList.add('read');
        read.textContent = "Read"
    }
    else{
        read.classList.add("unread")
        read.textContent = "Unread"
    }
    read.classList.add('read-button');

    //Read button functionality
    read.addEventListener('click', () =>{
        if(read.classList.contains('read')){
            read.classList.remove('read');
            read.classList.add('unread');
            read.innerHTML = "unread";
        }
        else{
            read.classList.remove('unread');
            read.classList.add('read');
            read.innerHTML = "read";
        }
    });


    const del = document.createElement("button");
    del.textContent = "Delete";
    del.classList.add('delete-button');
    
    //Delete button functionality
     del.addEventListener('click', () =>{
        del.parentElement.remove();
     });

    const card = document.createElement("div");
    card.classList.add("card");
    card.appendChild(title);
    card.appendChild(author);
    card.appendChild(pages);
    card.appendChild(read);
    card.appendChild(del);

    grid.appendChild(card);
}



//Fetching data from the form
const form = document.querySelector(".form");
function getInput(){
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let read = document.getElementById('read').checked;
    return new Book(title, author, pages, read);

}

form.addEventListener('submit', () =>{
    let book = getInput();
    createCard(book);
    //Resets the form
    form.reset(); 
});



// Modal functionality
const modal = document.querySelector("#modal");
 
addBook.addEventListener('click', () =>{
    modal.showModal();
});

