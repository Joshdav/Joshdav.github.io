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
      if (cookiearr[i].trim() == "musiccapeclick=true") {
        $('.musiccape').css('opacity', '1');
      }
   		if (cookiearr[i].trim() == "maxcapeclick=true") {
   			$('.maxcape').css('opacity', '1');
   		}
      if (cookiearr[i].trim() == "dragonfullhelmclick=true") {
        $('.dragonfullhelm').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonchainbodyclick=true") {
        $('.dragonchainbody').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonplatelegsclick=true") {
        $('.dragonplatelegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonplateskirtclick=true") {
        $('.dragonplateskirt').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonsqshieldclick=true") {
        $('.dragonsqshield').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragon2hswordclick=true") {
        $('.dragon2hsword').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonspearclick=true") {
        $('.dragonspear').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonwarhammerclick=true") {
        $('.dragonwarhammer').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonpickaxeclick=true") {
        $('.dragonpickaxe').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonaxeclick=true") {
        $('.dragonaxe').css('opacity', '1');
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

  $('.musiccape').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "musiccapeclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "musiccapeclick=true;" + expires + ";";
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

  $('.dragonfullhelm').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonfullhelmclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonfullhelmclick=true;" + expires + ";";
        }
  });

  $('.dragonchainbody').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonchainbodyclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonchainbodyclick=true;" + expires + ";";
        }
  });

  $('.dragonplatelegs').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonplatelegsclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonplatelegsclick=true;" + expires + ";";
        }
  });

  $('.dragonplateskirt').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonplateskirtclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonplateskirtclick=true;" + expires + ";";
        }
  });

  $('.dragonsqshield').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonsqshieldclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonsqshieldclick=true;" + expires + ";";
        }
  });

  $('.dragon2hsword').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragon2hswordclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragon2hswordclick=true;" + expires + ";";
        }
  });

  $('.dragonspear').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonspearclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonspearclick=true;" + expires + ";";
        }
  });

  $('.dragonwarhammer').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonwarhammerclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonwarhammerclick=true;" + expires + ";";
        }
  });

  $('.dragonpickaxe').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonpickaxeclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonpickaxeclick=true;" + expires + ";";
        }
  });

  $('.dragonaxe').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonaxeclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          var d = new Date();
          d.setTime(d.getTime() + (24*60*60*1000));
        var expires = "expires="+d.toUTCString();
          document.cookie = "dragonaxeclick=true;" + expires + ";";
        }
  });
}
$(document).ready(main);