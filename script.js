"use strict";

var verbs = ["Abdicate", "Adjudicate", "Alienate", "Amplify", "Ascend", "Assimilate", "Avert", 
"Bleed", 
"Cripple", 
"Decompose", "Demolish", "Desecrate", "Disintegrate", "Disobey", 
"Eliminate", "Emancipate", "Empower", "Eradicate", "Evade", "Eviscerate", "Evolve", "Exile", "Exterminate",
"Hallucinate",  
"Illuminate", "Initiate", "Instigate", "Invigorate", 
"Lacerate", "Liberate",  
"Maim", "Manipulate", 
"Obliterate", "Oppress", "Orchestrate",
"Pray", "Protect", "Putrefy",  
"Redefine", "Renounce", "Radiate", "Retaliate", 
"Self-destruct", "Shimmer", 
"Terminate", "Transgress", 
"Violate", 
"Worship"];

$(".content-title").html( 
		verbs[Math.floor(Math.random() * verbs.length)] + " &#11832 DEMONOLOGY");
		


$("document").ready(function() {
	$(".content-title").removeClass("hidden");
	$(".content").hide().fadeIn(3000);
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
	$(".content-mega").removeClass("hidden");
	$(".content-mega").hide().fadeIn(3000);
	}, 2500);
	setTimeout(function() {
	$(".content-github").removeClass("hidden");
	$(".content-github").hide().fadeIn(3000);
	}, 3000);
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