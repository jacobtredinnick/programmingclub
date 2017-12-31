// not much in here yet...

// allows HTML to be hidden / shown
function toggle() {
	var ele = document.getElementById("toggleText");
	var text = document.getElementById("displayText");
	if(ele.style.display == "block") {
    		ele.style.display = "none";
		text.innerHTML = "(Show)";
  	}
	else {
		ele.style.display = "block";
		text.innerHTML = "(Hide)";
	}
} 
