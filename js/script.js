// // preloader

window.onload = function fadeOutEffect() {
	var fadeTarget = document.getElementById("preloader");
	var fadeEffect = setInterval(function () {
		fadeTarget.style.display = "none"
	}, 500);
}

var myNav = document.getElementById('navbar');
window.onscroll = function () { 
    "use strict";
    if (document.documentElement.scrollTop >= 480 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
    }
	if(document.documentElement.scrollTop < 480 ){
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
	}

};

