document.addEventListener("deviceready",onDeviceReady,false);

function onDeviceReady(){
	var db = window.openDatabase("test","1.0","TestDB",1000000);

	var username = window.localStorage.getItem("username");
	var email = document.getElementById("email");
	email.innerHTML = username;
}
