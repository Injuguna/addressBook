// Business logic
var Contact=function(firstname,lastname){
  this.firstname=firstname;
  this.lastname=lastname;
}

Contact.prototype.fullName = function () {
  return this.firstname + " " + this.lastname;


};

// User interface logic
