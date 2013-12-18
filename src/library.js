Library = function(name){
  this.books = [];
  this.addBook = function(book){
    this.books.push(book);
  };

  return this;
};

module.exports = Library;
