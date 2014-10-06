/*Mackenzie Willard
* this fuction will make the text fade in 
*/

//this is the starting hex color
var hex = ffffff;

// this will slowly decrease the hex value to 0 where it will be black
function fadeIn(){
	if(hex>=0){
		hex -=5;
		document.getElementById('label').style.color=(hex);
		//setting the amount of time for inbetween calls
		setTimeOut(fuction(){fadeIn();},6);
	}else hex = ffffff;
}

