/*Mackenzie Willard
*
*/

function setStorage(){
	if(window.localStorage){// test to see if browser understands
		if(arguments[0]!='undefined'){ //could also look at the length
			// set in localStorage
			localStorage.setItem('name', document.getElementById('name').value);	
			localStorage.setItem('email', document.getElementById('email').value);
		}
		if(localStorage.getItem('name')){
			//change the background can forget first case
			document.getElementsByTagName('')[1].style.backgroundColor=localStorage.getItem('bgColor');
		}else{//this is for ie7
			SetCookie('name', document.getElementById('name').value);	
			SetCookie('email', document.getElementById('email').value);
		}
	}
}
