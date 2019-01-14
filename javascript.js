// FryPup 2019
var x = 50;
var dir = "down";
setInterval(function() {
	var pug = document.getElementById('pug');
	pug.style.top = x + "px";

	if (x == 200) {
		dir = "up"
	} else if (x == 50) {
		dir = "down";
	}

	if (dir == "up") {
		x--;
	} else {
		x++;
	}
},10);