/*Mackenzie Willard
*	This code looks to see if the user is in a browser that will not support the functionality 
*/

// what does the browser understand?
	if(document.getElementById && document.all){
		//I know I'm in modern IE
	}else if (document.getElementById){
		//I know I am in modern Gecko
	}else{
		//send to another page telling them that the browser is old
		alert('You are using an old browser, that does not support the fuctionality of the page. Please upgrade your brower.');
		window.location.assign("https://www.google.com/chrome/browser/#brand=CHMB&utm_campaign=en&utm_source=en-ha-na-us-sk&utm_medium=ha");
	}