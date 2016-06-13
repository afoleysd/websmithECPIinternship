var app = {
	initialize: function() {
		this.bindEvents();
	},
	
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	},
	
	onDeviceReady: function() {
		var username = window.localStorage.getItem("username");
		var email = document.getElementById("email");
		email.value = username;
	}
};
