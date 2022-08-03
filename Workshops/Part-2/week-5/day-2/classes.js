class Book {
  constructor(title, ISBN, author) {
    this.title = title;
    this.ISBN = ISBN;
    this.author = author;
    this.isAvailable = true;
    this.currentOwner = null;
    console.log(this);
  }
}

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
    this.books = [];
  }
  updateUsername(newUserName, password) {
    if (password === this.password) {
      this.username = newUserName;
      console.log('Username successfuly updated!');
    } else {
      console.log('The password is incorrect.');
    }
  }
  checkoutBook(book) {
    if (book.isAvailable) {
      this.books.push(book);
      book.currentOwner = this.username;
      book.isAvailable = false;
    }
  }
  returnBook(book) {
    if (this.books.includes(book)) {
      let index = this.books.indexOf(book);
      this.books.splice(index, 1);
      book.currentOwner = null;
      book.isAvailable = true;
    }
  }
}

let myNewBook = new Book('myTitle', 123456, 'theAuthor');
