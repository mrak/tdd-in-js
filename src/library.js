Library = function(name){
  this.books = [];
  this.addBook = function(book){
    this.books.push(book);
  };
  this.findBookByTitle = function(title) {
    for(var i in this.books){
      var book = this.books[i];

      if(book.title === title){
        return book;
      }
    }
  };

  return this;
};

module.exports = Library;
