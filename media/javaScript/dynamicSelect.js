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
	/* sets the */
	if(which.value != undefined){
		var temp=which.value;
		var last = $('selects').lastChild;

		/*This looks to see if the current selected  select menu is the last one
		* if not it will remove the other menus till it is the last
		*/
		while(which != last){
			$('selects').removeChild(last);
			last = $('select').lastChild;
		}

	}
	else{
			temp = which;
		}
		
	if(data[temp][0]!='DYEL'){
		
		//This will create the label that goes above the options 
		var label= document.createElement('p');
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

		//Add the selects to the page
		$('selects').appendChild(label);
		$('selects').appendChild(selectEle);
	}else{
		dyelImage(temp);
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
	if(data[which][1]=='dyel'){
		dataEnd = true;
	}
	
	img = document.createElement('img');
	img.setAttribute('src','media/images/'+meme);
	img.setAttribute('alt',data[which][2]);

	$('dyelMemeArea').appendChild(img);

}

/*//bring up the meme
if(data[which][0]=='dyel'){
	dyelImage(temp);
}*/