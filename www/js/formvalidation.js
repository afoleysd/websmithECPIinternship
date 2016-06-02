document.addEventListener('DOMContentLoaded',function(){
	var email = document.getElementById("email");
	var password = document.getElementById("password");
	var emailRegex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
	var passwordMaxLen = 24;
	var passwordMinLen = 6;

	email.addEventListener("keyup", function(event){
		if(emailRegex.test(email.value)){
			email.setCustomValidity("");
			email.style.boxShadow = "0px 0px 1px 0px #000000";
		} else {
		    email.setCustomValidity("Invalid field");
			email.style.boxShadow = "0px 0px 1px 0px #AA0000";
		}
	}, false);

	password.addEventListener("keyup", function(event){
		if(password.value.length <= passwordMaxLen && password.value.length >= passwordMinLen){
			password.setCustomValidity("");
			password.style.boxShadow = "0px 0px 1px 0px #000000";
		} else {
			password.setCustomValidity("Invalid field");
			password.style.boxShadow = "0px 0px 1px 0px #AA0000";
		}
	}, false);

},false);

function validateForm(){
	var email = document.getElementById("email");
	window.localStorage.setItem("username",email.innerHTML);
	return true;
}
