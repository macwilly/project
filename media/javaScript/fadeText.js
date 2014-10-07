/*Mackenzie Willard
* this fuction will make the text fade in 
*/

//this is the starting hex color
var opacity= 0;

// this will slowly decrease the hex value to 0 where it will be black
function fadeIn(){
	if(opacity<1){
		opacity += 0.1;
		document.getElementById('wrapper').lastChild.style.opacity=(opacity);
		//will get the second to last child of the wrapper
		var chil=document.getElementById('wrapper').childNodes.length;
		document.getElementById('wrapper').childNodes[chil-2].style.opacity=(opacity);
		//console.log(document.getElementById('wrapper').childNodes.length);
		setTimeout(function(){fadeIn();},500);
	}else opacity = 0;
}

