//business logic
var Contact=function(firstName,lastName){
  this.firstName=firstName;
  this.lastName=lastName;
  this.addresses=[];
}

var Address=function (street,city,county) {
  this.street=street;
  this.city=city;
  this.county=county;
}

Contact.prototype.fullName = function () {
  return this.firstName + " "+ this.lastName;
};

// User interface logic

$(document).ready(function () {
  var contactsList=[];
  $("#contacts").submit(function(){
    event.preventDefault();
    var firstname=$("#fname").val();
    var lastname=$("#lname").val();

    var newContact=new Contact(firstname,lastname);

    contactsList.push(newContact);




  })
})
