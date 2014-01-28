Library = function(name){
  this.books = [];
  this.addBook = function(book){
    this.books.push(book);
  };
  this.findBookByTitle = function(title) {
    for(var i in this.book){
      var book = this.books[i];

      if(book.title === title){
        return books;
      }
    }
  };

  return this;
};

module.exports = Library;
