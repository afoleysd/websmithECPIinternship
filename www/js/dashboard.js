progressEnum = {
	Missing: 1,
	InProgress: 2,
	Completed: 3
}

var timeStudy = {
	name: "Default Name",
	timestudy: "Default Time Study",
	periodStart: "5/23/2016",
	periodEnd: "5/28/2016",
	progress: progressEnum.Missing
}

var timeStudies = [];

document.addEventListener('DOMContentLoaded',function(){
	for(i = 0; i < 30; i++){
		var tmp = Object.create(timeStudy);
		tmp.name = "Name " + Math.floor((Math.random() * 9) + 1);
		tmp.timestudy  = "Time Study " + Math.floor((Math.random() * 9) + 1);
		tmp.periodStart = Math.floor((Math.random() * 12) + 1) + "/" + Math.floor((Math.random() * 31) + 1) + "/2016";
		tmp.periodEnd = Math.floor((Math.random() * 12) + 1) + "/" + Math.floor((Math.random() * 31) + 1) + "/2017";
		tmp.progress = Math.floor((Math.random() * 3) + 1);
		timeStudies.push(tmp);
	}
	missingTimeStudies();
	progressOfStudies();
}, false);

function missingTimeStudies(){
	var missingStudies = [];
	for(i = 0; i < timeStudies.length; i++){
		if(timeStudies[i].progress == progressEnum.Missing){
			missingStudies.push(timeStudies[i]);
		}
	}
	missingStudies.sort(function(a,b){
		var c = new Date(a.periodEnd);
		var d = new Date(b.periodEnd);
		return c-d;
	});
	for(i = 0; i < missingStudies.length; i++){
		document.getElementById("missingStudies").innerHTML = document.getElementById("missingStudies").innerHTML + '<a href="#"><div class="missingStudy' + (i%2==0?"Even":"Odd") + '"><div class="missingNames"><div class="studyName">' + missingStudies[i].name + '</div><div class="studyTimestudy">' + missingStudies[i].timestudy + '</div></div><div class="missingDates"><div class="studyPeriodStart">' + missingStudies[i].periodStart + '</div><div class="studyPeriodEnd">' + missingStudies[i].periodEnd + '</div></div></div></a>';	
	}
}

function progressOfStudies(){
	var missing = 0;
	var inProgress = 0;
	var completed = 0;
	for(i = 0; i < timeStudies.length; i++){
		switch(timeStudies[i].progress){
			case progressEnum.Missing:
				missing++;
				break;
			case progressEnum.InProgress:
				inProgress++;
				break;
			case progressEnum.Completed:
				completed++;
				break;
			default:
				break;
		}
	}
	
	document.getElementById("progressMissing").style.flex = missing;
	document.getElementById("progressInProgress").style.flex = inProgress;
	document.getElementById("progressCompleted").style.flex = completed;

	document.getElementById("progressMissing").innerHTML = missing;
	document.getElementById("progressInProgress").innerHTML = inProgress;
    document.getElementById("progressCompleted").innerHTML = completed;
}
