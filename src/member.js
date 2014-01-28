module.exports = function(){
  this.checkout = function(book){
    book.heldBy = this;
  };
  return this;
}
