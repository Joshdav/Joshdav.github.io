window.onload = function() {
	var d = new Date();
    d.setTime(d.getTime() + (24*60*60*1000));
   	var expires = "expires="+d.toUTCString();
   	var cookiearr = document.cookie.split(';');


   	/*cookie checker*/
   	for (var i = 0; i < cookiearr.length; i++) {
   		if (cookiearr[i].trim() == "firecapeclick=true") {
   			$('.firecape').css('opacity', '1');
   		} 
   		if (cookiearr[i].trim() == "questcapeclick=true") {
   			$('.questcape').css('opacity', '1');
   		}
   		if (cookiearr[i].trim() == "achievementcapeclick=true") {
   			$('.achievementcape').css('opacity', '1');
   		}
   		if (cookiearr[i].trim() == "maxcapeclick=true") {
   			$('.maxcape').css('opacity', '1');
   		}
   	}
}

var main = function() {

	$('.firecape').click(function(){
		if ($(this).css('opacity') == '1') {
        	$(this).animate({'opacity':0.4}, 175);
        	var d = new Date();
        	d.setTime(d.getTime() + (24*60*60*1000));
   			var expires = "expires="+d.toUTCString();
        	document.cookie = "firecapeclick=false;" + expires + ";";
		}
      	else {
        	$(this).animate({'opacity':1}, 175);
        	var d = new Date();
        	d.setTime(d.getTime() + (24*60*60*1000));
   			var expires = "expires="+d.toUTCString();
        	document.cookie = "firecapeclick=true;" + expires + ";";
        }
	});

	$('.questcape').click(function(){
		if ($(this).css('opacity') == '1') {
        	$(this).animate({'opacity':0.4}, 175);
        	var d = new Date();
        	d.setTime(d.getTime() + (24*60*60*1000));
   			var expires = "expires="+d.toUTCString();
        	document.cookie = "questcapeclick=false;" + expires + ";";
        }
      	else {
        	$(this).animate({'opacity':1}, 175);
        	var d = new Date();
        	d.setTime(d.getTime() + (24*60*60*1000));
   			var expires = "expires="+d.toUTCString();
        	document.cookie = "questcapeclick=true;" + expires + ";";
        }
	});

	$('.achievementcape').click(function(){
		if ($(this).css('opacity') == '1') {
        	$(this).animate({'opacity':0.4}, 175);
        	var d = new Date();
        	d.setTime(d.getTime() + (24*60*60*1000));
   			var expires = "expires="+d.toUTCString();
        	document.cookie = "achievementcapeclick=false;" + expires + ";";
		}
      	else {
        	$(this).animate({'opacity':1}, 175);
        	var d = new Date();
        	d.setTime(d.getTime() + (24*60*60*1000));
   			var expires = "expires="+d.toUTCString();
        	document.cookie = "achievementcapeclick=true;" + expires + ";";
        }
	});

	$('.maxcape').click(function(){
		if ($(this).css('opacity') == '1') {
        	$(this).animate({'opacity':0.4}, 175);
        	var d = new Date();
        	d.setTime(d.getTime() + (24*60*60*1000));
   			var expires = "expires="+d.toUTCString();
        	document.cookie = "maxcapeclick=false;" + expires + ";";
		}
      	else {
        	$(this).animate({'opacity':1}, 175);
        	var d = new Date();
        	d.setTime(d.getTime() + (24*60*60*1000));
   			var expires = "expires="+d.toUTCString();
        	document.cookie = "maxcapeclick=true;" + expires + ";";
        }
	});
}
$(document).ready(main);