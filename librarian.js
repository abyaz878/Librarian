var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" },
  { title: "Lord of the Rings", year: "2004", author: "J.K.Tolkien", publisher: "Scribles " }
  /* Task 2 */
];

/* Task 1 */
function getBookTitle( index ){
  return library[index].title 
}

console.log(getBookTitle(3));

/* Task 3 */
function addBook( book ){
  
   library.push(book);
   return library;

}

var newBook = {
	
		title: "The Passion of the Mind", year: "1971", author: "Sigmund Freud", publisher: "Scribles "

	
};
console.log(addBook(newBook));

/* Task 4 */
function bookByAuthor(){
  
  

console.log(library);

}

console.log(bookByAuthor());


/* Task 5 */
function findByTitle( title ){
  //add code
}

console.log(findByTitle("man"));
console.log(findByTitle("myth"));
