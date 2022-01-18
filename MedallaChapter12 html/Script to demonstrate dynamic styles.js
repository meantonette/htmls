// JavaScript Document
// Fig.12.16: dynamicstyle.js
//Script to demonstrate ddynamic styles
function start()
{
	var inputColor = prompt("Enter a color name for the" +
	"background of this page", "");
	document.body.setAttribute("style", 
	"background-color: " + inputColor);
}//end of function start

window.addEventListener("load", start, false);
// JavaScript Document