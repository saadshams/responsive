// JavaScript Document

document.querySelector('nav#listNav > ul').onclick = function(event) { 
	document.querySelector("#listTitle").innerText = event.target.innerText;
	document.querySelector('#listCheckbox').checked = false;
	document.querySelector('main').classList.remove("list", "create", "analytics");
	document.querySelector('main').classList.add(event.target.getAttribute("data-id").toLowerCase());
	console.log("in")
}

document.querySelector('nav#createNav > ul').onclick = function(event) { // click on the popup, not the checkbox
	document.querySelector("#createTitle").innerText = event.target.innerText;
	document.querySelector('#createCheckbox').checked = false;
	document.querySelector('#select').classList.remove("my", "global");
	document.querySelector('#select').classList.add(event.target.getAttribute("data-id").toLowerCase());
}

document.querySelector("#listCheckbox").onclick = function(event) {
	if(document.querySelector("#createCheckbox").checked) {
		document.querySelector("#createCheckbox").checked = false;
	}
}