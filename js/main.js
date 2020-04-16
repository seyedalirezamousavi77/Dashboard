
function navbarScroll() {
	var navbar = document.getElementById("my-navbar");
	var sticky = navbar.offsetTop + 10;
	if (window.pageYOffset > sticky) {
		navbar.classList.add("sticky");
		navbar.style.display = "flex";
	} else {
		navbar.classList.remove("sticky");
		navbar.style.display = "none";
	}
}


