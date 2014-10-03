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
*  doncument.getElementsByTagName('select')
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
	if(which.value !== undefined){
		temp=which.value;

	}

	if(data[temp][0]!='DYEL'){
		var lable= document.createElement('p');
		var question=document.createTextNode('Do you '+data[temp][0]+'?');
		lable.appendChild(question);

		//create the new select with an id and name
			var select=document.createElement('select');
			select.setAttribute('id', obj[selected][0]);
			select.setAttribute('name', 'selects');
		
		//make it work in ie7 yayyyy
		if(!ie7){
				sel.setAttribute('onchange', 'selectBuild(this)');
			}else{
				sel.setAttribute('onchange', function(){selectBuild(this);});
			}

		//creat and empty option for the first option in the select
		var option=document.createElement('option');
				var text=document.createTextNode("--Pick your activity--");
				option.appendChild(text);
				//append
				select.appendChild(option);

		//tking the information from the data source and using it to populate the options 		
		for(var i=0, l=obj[selected].length; i<l; i++){
				var optionN=document.createElement('option');
				optionN.setAttribute('value', obj[selected][i]);
				var dataInfo=document.createTextNode(obj[selected][i]);
				optionN.appendChild(dataInfo);
				select.appendChild(optionN);
			}
	}
	
	select.setAttribute('value','good');
}