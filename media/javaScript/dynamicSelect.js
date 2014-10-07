/* Mackenzie Willard
* this is the script that is used to make the 
* dynamic select menue for the first project in
* client side programming*/

/*This will get the element of a certian id as well as return it 
*       document.getElementByI('select').action();
*/
function $(id){
	return document.getElementById(id);
}

/*This will get the element using tag name and return it 
*  document.getElementsByTagName('select')
*/
function $$(name){
		//document.getElementsByTagName('body')[0];
		return document.getElementsByTagName(name);
	}
/*This will build the different selects that will populate the page
*
*/
function selectBuild(which){

	var temp;
	//used to remove last child element.
	if(which.value != undefined){
		var temp=which.value;
		var last = $('wrapper').lastChild;
		//var pic = $('dyelMemeArea').firstChild;

		/*This looks to see if the current selected  select menu is the last one
		* if not it will remove the other menus till it is the last
		*/
		while(which != which.parentNode.lastChild){
			which.parentNode.removeChild(which.parentNode.lastChild);

		}
		
	}else{
			temp = which;
		}
		
	if(data[temp][0]!='dyel'){
		
		//This will create the label that goes above the options 
		var label= document.createElement('p');
		label.setAttribute('id', 'label');
		var question=document.createTextNode(data[temp][0]+' ?');
		label.appendChild(question);

		//create the new select with an id and name
		var selectEle=document.createElement('select');
		
		selectEle.setAttribute('id', data[temp][0]);
		selectEle.setAttribute('name', 'selects');
		
		//make it work in ie7 yayyyy
		if(!ie7){
				selectEle.setAttribute('onchange', 'selectBuild(this)');
			}else{
				selectEle.setAttribute('onchange', function(){selectBuild(this);});
			}

		//creat and empty option for the first option in the select
		var option=document.createElement('option');
			var text=document.createTextNode("--Do you even lift !?--");
			option.appendChild(text);
			//append
			selectEle.appendChild(option);

		//taking the information from the data source and using it to populate the options 		
		for(var i=1, l=data[temp].length; i<l; i++){
				var optionN=document.createElement('option');
				optionN.setAttribute('value', data[temp][i]);
				var dataInfo=document.createTextNode(data[temp][i]);
				optionN.appendChild(dataInfo);
				selectEle.appendChild(optionN);
		}
		var div = document.createElement('div');
		//Add the selects to the page
		//fadeIn();
		$('wrapper').appendChild(label);
		$('wrapper').appendChild(selectEle);
		//fadeIn();
		/*div.appendChild(label);
		div.appendChild(selectEle);
		$('wrapper').appendChild(div);*/
		fadeIn();
	}else{
		dyelImage(temp);
		liftImg();
		liftText();
		formMake();
	}
	

	
}

function dyelImage(which){
	
	//setting the data
	var meme = data[which][1];
	
	//will become the image
	var img;
	
	// set that we are not at the end of the data 
	var dataEnd = false;
	
	//test to make sure that we are at the end of data set
	if(data[which][0]=='dyel'){
		dataEnd = true;
	}
	
	//this will make the image
	var img = document.createElement('img');
	img.setAttribute('src','media/images/'+meme);
	img.setAttribute('alt',data[which][2]);
	img.setAttribute('style','top:1200px;');

	//this will make the caption for the source of the image
	var caption= document.createElement('p');
	var imgSourceInfo=document.createTextNode(data[which][3]);
	caption.setAttribute('id','sourceInfo');
	caption.appendChild(imgSourceInfo);
	caption.setAttribute('style','top:1200px;');


	$('wrapper').appendChild(img);
	$('wrapper').appendChild(caption);

}

// This makes the form 
function formMake(){
	//making the form
	var form = document.createElement('form');
	var newLine1 = document.createElement('br');
	var newLine2 = document.createElement('br');
	var newLine3 = document.createElement('br');
	var newLine4 = document.createElement('br');
	var inputName = document.createElement('input');
	var inputEmail = document.createElement('input');
	var commentBox = document.createElement('textarea');
	var submitButton = document.createElement('input');
	var header = document.createElement('h4');

	//form
	form.setAttribute('name','form');
	form.setAttribute('action','#');
	form.setAttribute('method','');
	form.setAttribute('onsubmit','return validation()');
	//Name input
	inputName.setAttribute('type','text');
	inputName.setAttribute('name','name');
	inputName.setAttribute('id','name');
	inputName.setAttribute('size','40');
	inputName.setAttribute('maxlength','40');
	inputName.setAttribute('placeholder','Your Name');
	inputName.setAttribute('value','');
	//email input
	inputEmail.setAttribute('type','text');
	inputEmail.setAttribute('size','40');
	inputEmail.setAttribute('name','email');
	inputEmail.setAttribute('id','email');
	inputEmail.setAttribute('maxlength','40');
	inputEmail.setAttribute('placeholder','example@example.com');
	inputEmail.setAttribute('value','');
	//comment input
	commentBox.setAttribute('maxlength','6000');
	commentBox.setAttribute('name','commentBox');
	commentBox.setAttribute('id','commentBox');
	commentBox.setAttribute('placeholder','Please enter comment max of 6000 characters.');
	//submit button
	submitButton.setAttribute('type','submit');
	submitButton.setAttribute('value','submit');
	submitButton.setAttribute('name','submit');
	submitButton.setAttribute('id','submit');
	//header
	var headerInfo = document.createTextNode('Send a comment to Dom to ask him how you can lift!!!');
	header.appendChild(headerInfo);

	form.appendChild(header);
	form.appendChild(inputName);
	form.appendChild(newLine1);
	form.appendChild(inputEmail);
	form.appendChild(newLine2);
	form.appendChild(commentBox);
	form.appendChild(newLine3);
	form.appendChild(submitButton);


	$('wrapper').appendChild(form);

	//this will se the value of name to the local storage
	if(localStorage.getItem('name')!=null){
		document.getElementById('name').value=localStorage.getItem('name');
	}else{
		document.getElementById('name').value='';
	}

	//will set the value of the email to local storage
	if(localStorage.getItem('email')!='undefined'){
		document.getElementById('email').value=localStorage.getItem('email');
	}else{
		document.getElementById('email').value='';
	}


}
