function forgot(){
	var fadeoutContainer = document.getElementById('fadeoutContainer');
	fadeoutContainer.style.opacity = 0;
	fadeoutContainer.style.display = "block";

	(function fade() {
		var val = parseFloat( fadeoutContainer.style.opacity );
		if(!((val += .05) > 1)) {
			fadeoutContainer.style.opacity = val;
			requestAnimationFrame(fade);
		}
	})();
}

function leaveForgot(){
	var fadeoutContainer = document.getElementById('fadeoutContainer');
	fadeoutContainer.style.opacity = 1;
	fadeoutContainer.style.display = "block";

	(function fade() {
		var val = parseFloat( fadeoutContainer.style.opacity );
		if(((val -= .05) < 0)) {
			fadeoutContainer.style.display = "none";
		}
		else
		{	
			fadeoutContainer.style.opacity = val;
			requestAnimationFrame(fade);
		}   
	})();
}
