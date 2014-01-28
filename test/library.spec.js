var Library = require('../src/library');
var Book = require('../src/book');
var assert = require('assert');

describe("Library", function(){
  it("adds a new book", function(){
    // Arrange
    var library = new Library();
    var book = new Book('Catching Fire', 'Suzanne Collins');

    // Act
    library.addBook(book);

    // Assert
    assert.equal(library.books[0], book,
      "Library has the book");
  });
});
