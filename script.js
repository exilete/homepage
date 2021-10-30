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

var icons = [".content-youtube", ".content-spotify", ".content-reddit", ".content-chan", ".content-mega", ".content-github", ".content-duolingo"];

$(".content-title").html( 
		verbs[Math.floor(Math.random() * verbs.length)] + " &#11832 DEMONOLOGY");
		

$("document").ready(function() {
	$(".bg").removeClass("hidden");
	$(".bg").hide().fadeIn(3000);
	setTimeout(function() {
		$(".content-title").removeClass("hidden");
		$(".content").hide().fadeIn(3000);
		}, 500);
});

for (var iconCount = 0; iconCount < icons.length; iconCount++) {
	delay(iconCount);	
}

function delay(iconCount) {
	setTimeout(function() {
	$(icons[iconCount]).removeClass("hidden");
	$(icons[iconCount]).hide().fadeIn(3000);
	}, 1000 + (500 * iconCount));
}
		

/* OLD SCRIPT

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
	setTimeout(function() {
	$(".content-duolingo").removeClass("hidden");
	$(".content-duolingo").hide().fadeIn(3000);
	}, 4000);

});

*/
