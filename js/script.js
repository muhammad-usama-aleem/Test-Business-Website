// // preloader

window.onload = function fadeOutEffect() {
	var fadeTarget = document.getElementById("preloader");
	var fadeEffect = setInterval(function () {
		fadeTarget.style.display = "none"
	}, 500);
}
 
var myNav = document.getElementById('navbar');
var navlink = document.getElementById("nav-link");
window.onscroll = function () { 
    "use strict";
    if (document.documentElement.scrollTop >= 480 ) {
        myNav.classList.add("nav-colored");
        myNav.classList.remove("nav-transparent");
        navlink.style.borderTop = "1px solid black";
    }
	if(document.documentElement.scrollTop < 480 ){
        myNav.classList.add("nav-transparent");
        myNav.classList.remove("nav-colored");
        navlink.style.borderTop = "1px solid #ed8936";
	}

};
window.scroll({
     
  behavior: 'smooth'
});

