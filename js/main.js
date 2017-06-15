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
