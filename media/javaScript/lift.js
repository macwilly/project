/*Mackenzie Willard
* this will slide the meme that comes at the end of the list up from the bottom of the page 
*/

function lift(){
	var $$ = document.getElementsByTagName('img')[0];
	var $ = document.getElementById('sourceInfo');
	console.log($$.style.top);
	
	if(parseInt($$.style.top)>50){
		$$.style.top=parseInt($$.style.top)-50+'px';
		setTimeout( function(){lift();},10);
	}

	if(parseInt($.style.top)>560){
		$.style.top=parseInt($.style.top)-50+'px';
			setTimeout( function(){lift();},10);
	}

}
	