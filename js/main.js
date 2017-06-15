// Business logic
var Contact=function(firstname,lastname){
  this.firstname=firstname;
  this.lastname=lastname;
}

Contact.prototype.fullName = function () {
  return this.firstname + " " + this.lastname;
};

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

});
