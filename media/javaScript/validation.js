function validation(){
	//start with form passing so that it does not start red
	var nameOk = true;
	var emailOk = true;
	var isValid = true;

	//getting the position of the @  in email
	var atSign = document.getElementById('email').value.indexOf('@');

	//getting the position of the . in email
	var theDot = document.getElementById('email').value.indexOf('.');
	//this will set the color back to normal when passed
	document.getElementById('name').style.backgroundColor='';
	document.getElementById('email').style.backgroundColor='';


	// check to make sure name has been filled in
	if (document.getElementById('name').value<2){
		//nameOk=false;
		isValid=false;
		document.getElementById('name').style.backgroundColor='red';
	}
	// check to see if email has been filled in
	if (atSign<1||theDot<atSign+2||theDot+2>=document.getElementById('email').length){
		isValid=false;
		document.getElementById('email').style.backgroundColor='red';
		
	}
	if(isValid){
		setStorage();
	}
	return isValid;
}

//the checking email was adapted from w3 school http://www.w3schools.com/js/js_form_validation.asp