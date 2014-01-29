module.exports = function(title, author){
  this.title = title;
  this.author = author;

  this.isAvailable = function(){
    return this.borrower == null;
  };

  this.checkout = function(borrower) {
    this.borrower = borrower;
  };

  return this;
};
