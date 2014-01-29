module.exports = function(title, author){
  var borrower;
  this.title = title;
  this.author = author;

  this.isAvailable = function(){
    return borrower == null;
  };

  this.checkout = function(name) {
    borrower = name;
  };

  return this;
};
