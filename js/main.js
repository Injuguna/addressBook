// Business logic
var Contact=function(firstname,lastname){
  this.firstname=firstname;
  this.lastname=lastname;
  this.addresses=[];

}
var Address=function(street, city, county){
  this.street=street;
  this.city=city;
  this.county=county;
}

Contact.prototype.fullName = function () {
  return this.firstname + " " + this.lastname;
};

//function to generate address objects and store them in an array;
var createAddresses=function(streetArray, cityArray, countyArray){
  var groupAddressArray=[];

  for(var i=0; i<=streetArray.length; i++){
    var newAddress=new Address(streetArray[i],cityArray[i],countyArray[i]);
    groupAddressArray.push(newAddress);
  }
  return groupAddressArray;

}

// User interface logic
$(document).ready(function(){



  // handling the add addresses click function
  $("#addAddress").click(function(){
    $("#address").append(
      `
      <h2>Another address</h2>
      <div class="form-group">
          <label for="street">Street</label>
          <input type="text" placeholder="street" class="form-control street" required="">
      </div>
      <!-- city -->
      <div class="form-group">
          <label for="city">City</label>
          <input type="text" placeholder="city" class="form-control city" required="">
      </div>
      <!-- county -->
      <div class="form-group">
          <label for="county">County</label>
          <input type="text" placeholder="county" class="form-control county" required="">
      </div>

      `
    );
    // end of the append method
  });
  var contacts=[];
  //getting input from the usr
  $(".contacts").submit(function(){
    event.preventDefault();
    contacts=[];


    var groupAddress;
    // streets city and county array
    var streets=[];
    var cities=[];
    var counties=[];

    // getting user personal details
    var firstname = $("#fname").val();
    var lastname = $("#lname").val();

    //new contact
    var newContact= new Contact(firstname,lastname);
    //contacts.push(newContact);
    contacts.push(newContact);

    // looping through the streets
    $(".street").each(function(){
      streets.push($(this).val());
    });
    // looping through the cities
    $(".city").each(function(){
      cities.push($(this).val());
    });
    // looping through the counties
    $(".county").each(function(){
      counties.push($(this).val());
    });

    groupAddress=createAddresses(streets,cities,counties);
    newContact.addresses.push(groupAddress);


    //displaying contacts
    contacts.forEach(function (singleContact) {
      $("#contactList").append("<li>"+singleContact.fullName()+"</li>")

    });


    $("li").click(function(){

      console.log(contacts[$("li").index(this)]);
    });



  });





});
