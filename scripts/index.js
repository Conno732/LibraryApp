let myLibrary = [];

let testBook = new Book();

testBook.id = "123Book321Author";
testBook.author = "321Author";
testBook.title = "123Book";
testBook.totalPages = 48;

myLibrary.push(testBook);
displayLibrary();

document.getElementById("add-new").addEventListener("click", () => {
  addBookOverlayOn();
});

document.getElementById("submit").addEventListener("click", () => {
  addBookOverlayOff();
  addBookToLibrary();
});

document.getElementById("exit-button").addEventListener("click", () => {
  addBookOverlayOff();
  clearForm();
});

document.getElementById("book-cards").addEventListener("click", (e) => {
  if (e.target.classList.value !== "card-remove") return;
  const target = e.target.parentElement.id;
  console.log(target);
  myLibrary = myLibrary.filter((e) => {
    console.log(e.title + e.author !== target);
    return e.title + e.author !== target;
  });
  console.log(myLibrary);
  displayLibrary();
});

function Book() {
  this.author;
  this.title;
  this.totalPages;
  this.read;
}

function addBookToLibrary() {
  const book = submitBook();
  myLibrary.push(book);
  displayCard(book);
}

function displayLibrary() {
  const listed = document.getElementById("book-cards");
  while (listed.firstChild) {
    listed.removeChild(listed.firstChild);
  }
  myLibrary.forEach((e) => {
    displayCard(e);
  });
}

function displayCard(e) {
  const bookCards = document.querySelector(".book-cards");
  const card = document.createElement("div");
  card.classList += "card";
  card.id = e.title + e.author;
  let title = document.createElement("span");
  title.innerText = e.title;
  let author = document.createElement("span");
  author.innerText = e.author;
  let pages = document.createElement("span");
  pages.innerText = e.totalPages;
  let read = document.createElement("input");
  read.type = "checkbox";
  let button = document.createElement("button");
  button.innerText = "X";
  button.classList = "card-remove";
  card.appendChild(button);
  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(pages);
  card.appendChild(read);
  bookCards.appendChild(card);
}

function submitBook() {
  let newBook = new Book();
  newBook.title = document.getElementById("book-title").value;
  newBook.author = document.getElementById("author-name").value;
  newBook.totalPages = document.getElementById("total-pages").value;
  newBook.read = document.getElementById("read").value;
  clearForm();
  return newBook;
}

function addBookOverlayOn() {
  document.getElementById("add-book-overlay").style.display = "flex";
}

function addBookOverlayOff() {
  document.getElementById("add-book-overlay").style.display = "none";
}

function clearForm() {
  document.getElementById("book-title").value = "";
  document.getElementById("author-name").value = "";
  document.getElementById("total-pages").value = null;
  document.getElementById("read").checked = false;
}
