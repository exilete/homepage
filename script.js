"use strict";

var verbs = ["Abdicate", "Adjudicate", "Alienate", "Amplify", "Arise", "Ascend", "Assimilate", "Avert", "Awaken", 
"Bleed", 
"Cripple", "Cruficy", 
"Decompose", "Defy", "Delete", "Demolish", "Desecrate", "Deviate", "Disintegrate", "Disobey", "Divide",
"Eliminate", "Emancipate", "Empower", "Eradicate", "Erase", "Evade", "Eviscerate", "Evolve", "Exile", "Exterminate",
"Hallucinate", "Howl",  
"Illuminate", "Initiate", "Instigate", "Invigorate", 
"Lacerate", "Liberate",  
"Maim", "Manipulate", 
"Obliterate", "Oppress", "Orchestrate",
"Pray", "Protect", "Pulverise", "Putrefy",  
"Radiate", "Reap", "Redefine", "Rejuvenate", "Relinquish", "Renounce", "Resonate", "Retaliate", "Reverberate", 
"Self-destruct", "Sever", "Shatter", "Shimmer", "Sunder",
"Terminate", "Transgress", 
"Violate", 
"Worship"];

$(".content-title").html( 
		verbs[Math.floor(Math.random() * verbs.length)] + " &#11832 DEMONOLOGY");
		


$("document").ready(function() {
	$(".bg").removeClass("hidden");
	$(".bg").hide().fadeIn(3000);
	setTimeout(function() {
	$(".content-title").removeClass("hidden");
	$(".content").hide().fadeIn(3000);
	}, 500);
	setTimeout(function() {
	$(".content-youtube").removeClass("hidden");
	$(".content-youtube").hide().fadeIn(3000);
	}, 1000);
	setTimeout(function() {
	$(".content-spotify").removeClass("hidden");
	$(".content-spotify").hide().fadeIn(3000);
	}, 1500);
	setTimeout(function() {
	$(".content-reddit").removeClass("hidden");
	$(".content-reddit").hide().fadeIn(3000);
	}, 2000);
	setTimeout(function() {
	$(".content-chan").removeClass("hidden");
	$(".content-chan").hide().fadeIn(3000);
	}, 2500);
	setTimeout(function() {
	$(".content-mega").removeClass("hidden");
	$(".content-mega").hide().fadeIn(3000);
	}, 3000);
	setTimeout(function() {
	$(".content-github").removeClass("hidden");
	$(".content-github").hide().fadeIn(3000);
	}, 3500);
});

/*

$("document").ready(function() {
	$(".content-title").removeClass("hidden");
	$(".content").hide().fadeIn(3000);
	iconFade();	
});


function iconFade() {
	var timeIn = 1000;
	for (var i=0; i<$(".channels span").length; i++) {
		$(".channels span")[i].removeClass("hidden");
		$(".channels span")[i].hide().fadeIn(3000).delay("timeIn");
		timeIn += 500;
	}
}


$("document").ready(function() {
	$(".content-title").removeClass("hidden");
	$(".content").hide().fadeIn(3000);
	$(".content-youtube").removeClass("hidden");
	$(".content-youtube").hide().fadeIn(3000).delay(1000);
	$(".content-spotify").removeClass("hidden");
	$(".content-spotify").hide().fadeIn(3000).delay(1500);
	$(".content-reddit").removeClass("hidden");
	$(".content-reddit").hide().fadeIn(3000).delay(2000);
	$(".content-mega").removeClass("hidden");
	$(".content-mega").hide().fadeIn(3000).delay(2500);
	$(".content-github").removeClass("hidden");
	$(".content-github").hide().fadeIn(3000).delay(3000);
});

*/
