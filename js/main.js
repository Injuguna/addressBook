$.ajax({
method: 'GET',
url: 'http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=3943eeb5a4c109f4da80636740ea193',
statusCode :{
  401:function () {
    alert("You have no access");
  }
},
success:function(data){
console.log(data);
},
failure:function(error){
	console.log(Error)
}
});
