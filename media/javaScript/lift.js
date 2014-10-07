/*Mackenzie Willard
* this will slide the meme that comes at the end of the list up from the bottom of the page 
*/

function liftImg(){
	var $$ = document.getElementsByTagName('img')[0];
	var $ = document.getElementById('sourceInfo');
	console.log($$.style.top);
	
	if(parseInt($$.style.top)>90){
		$$.style.top=parseInt($$.style.top)-25+'px';
		setTimeout( function(){liftImg();},10);
	}

}

function liftText(){
	var $ = document.getElementById('sourceInfo');
		if(parseInt($.style.top)>570){
			$.style.top=parseInt($.style.top)-24+'px';
			setTimeout( function(){liftText();},6);
		}
	}
