function changeStuff(event) {
	if(getComputedStyle(document.getElementsByClassName("textSection")[0], null).display == "none") {
		document.getElementsByClassName("textSection")[0].style.display = "block"
	} else {
		document.getElementsByClassName("textSection")[0].style.display = "none";
	}
}