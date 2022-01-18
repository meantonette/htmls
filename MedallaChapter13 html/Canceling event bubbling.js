// JavaScript Document
// Fig. 13.12: bubbling.js
// Canceling event bubbling.
function documentClick()
{
	alert( "You clicked in the document." );
} // end function documentClick

function bubble( e )
{
	alert( "This will bubble." );
	e.cancelBubble = false;
} // end function bubble

function noBubble( e )
{
	alert( "This will not bubble." );
	e.cancelBubble = true;
} // end function noBubble

function registerEvents()
{
	document.addEventListener( "click", documentClick, false );
	document.getElementById( "bubble" ).addEventListener(
		"click", bubble, false );
	document.getElementById( "noBubble" ).addEventListener(
		"click", noBubble, false );
} // end function registerEvents

window.addEventListener( "load", registerEvents, false );
// JavaScript Document