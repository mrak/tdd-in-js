var Book = require('../src/book');
var assert = require('assert');

describe("Book", function(){
  describe('isAvailable', function(){
    it('defaults to true', function(){
      var book = new Book('The Art of War', 'Sun Tzu');

      assert.equal(book.isAvailable(), true, "Book was not available!");
    });
  });

  describe("checkout", function(){
    it("marks it as unavailable", function(){
      var book = new Book('The Art of War', 'Sun Tzu');

      book.checkout('Mrak');

      assert.equal(book.isAvailable(), false, "Book was still available!");
    });
  });
});
