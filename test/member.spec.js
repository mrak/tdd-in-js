var Library = require('../src/library');
var Book = require('../src/book');
var Member = require('../src/member');
var assert = require('assert');

describe("Member", function(){
  it("can mark a book as checked out by them", function(){
    var library = new Library();
    var book = new Book('The Agile Samurai', 'translated by Bonna Choi');
    var member = new Member();
    library.addBook(book);

    member.checkout(library.findBookByTitle('The Agile Samurai'));

    assert.equal(book.heldBy, member, "Book isn't held by member!");
  });
});
