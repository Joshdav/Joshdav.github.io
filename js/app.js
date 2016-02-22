window.onload = function() {

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
      if (cookiearr[i].trim() == "dragondefenderclick=true") {
        $('.dragondefender').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonpickaxeclick=true") {
        $('.dragonpickaxe').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonaxeclick=true") {
        $('.dragonaxe').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "berserkerringclick=true") {
        $('.berserkerring').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "seersringclick=true") {
        $('.seersring').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "archersringclick=true") {
        $('.archersring').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "warriorringclick=true") {
        $('.warriorring').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "seercullclick=true") {
        $('.seercull').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "mudbattlestaffclick=true") {
        $('.mudbattlestaff').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "treasonousringclick=true") {
        $('.treasonousring').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "tyrannicalringclick=true") {
        $('.tyrannicalring').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "ringofthegodsclick=true") {
        $('.ringofthegods').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voidrangeclick=true") {
        $('.voidrange').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voidmeleeclick=true") {
        $('.voidmelee').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voidmageclick=true") {
        $('.voidmage').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voidtopclick=true") {
        $('.voidtop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voidelitetopclick=true") {
        $('.voidelitetop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voidmaceclick=true") {
        $('.voidmace').css('opacity', '1');
      }
   	}
}

var main = function() {

  var d = new Date();
  d.setTime(d.getTime() + (24*60*60*1000*365));
  var expires = "expires="+d.toUTCString();

	$('.firecape').click(function(){
		if ($(this).css('opacity') == '1') {
        	$(this).animate({'opacity':0.4}, 175);
        	document.cookie = "firecapeclick=false;" + expires + ";";
		}
      	else {
        	$(this).animate({'opacity':1}, 175);
        	document.cookie = "firecapeclick=true;" + expires + ";";
        }
	});

	$('.questcape').click(function(){
		if ($(this).css('opacity') == '1') {
        	$(this).animate({'opacity':0.4}, 175);
        	document.cookie = "questcapeclick=false;" + expires + ";";
        }
      	else {
        	$(this).animate({'opacity':1}, 175);
        	document.cookie = "questcapeclick=true;" + expires + ";";
        }
	});

	$('.achievementcape').click(function(){
		if ($(this).css('opacity') == '1') {
        	$(this).animate({'opacity':0.4}, 175);
        	document.cookie = "achievementcapeclick=false;" + expires + ";";
		}
      	else {
        	$(this).animate({'opacity':1}, 175);
        	document.cookie = "achievementcapeclick=true;" + expires + ";";
        }
	});

  $('.musiccape').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "musiccapeclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "musiccapeclick=true;" + expires + ";";
        }
  });

	$('.maxcape').click(function(){
		if ($(this).css('opacity') == '1') {
        	$(this).animate({'opacity':0.4}, 175);
        	document.cookie = "maxcapeclick=false;" + expires + ";";
		}
      	else {
        	$(this).animate({'opacity':1}, 175);
        	document.cookie = "maxcapeclick=true;" + expires + ";";
        }
	});

  $('.dragonfullhelm').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "dragonfullhelmclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "dragonfullhelmclick=true;" + expires + ";";
        }
  });

  $('.dragonchainbody').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "dragonchainbodyclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "dragonchainbodyclick=true;" + expires + ";";
        }
  });

  $('.dragonplatelegs').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "dragonplatelegsclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "dragonplatelegsclick=true;" + expires + ";";
        }
  });

  $('.dragonplateskirt').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "dragonplateskirtclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "dragonplateskirtclick=true;" + expires + ";";
        }
  });

  $('.dragonsqshield').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "dragonsqshieldclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "dragonsqshieldclick=true;" + expires + ";";
        }
  });

  $('.dragon2hsword').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "dragon2hswordclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "dragon2hswordclick=true;" + expires + ";";
        }
  });

  $('.dragonspear').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "dragonspearclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "dragonspearclick=true;" + expires + ";";
        }
  });

  $('.dragonwarhammer').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "dragonwarhammerclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "dragonwarhammerclick=true;" + expires + ";";
        }
  });

  $('.dragondefender').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "dragondefenderclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "dragondefenderclick=true;" + expires + ";";
        }
  });

  $('.dragonpickaxe').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "dragonpickaxeclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "dragonpickaxeclick=true;" + expires + ";";
        }
  });

  $('.dragonaxe').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "dragonaxeclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "dragonaxeclick=true;" + expires + ";";
        }
  });

  $('.berserkerring').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "berserkerringclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "berserkerringclick=true;" + expires + ";";
        }
  });

  $('.seersring').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "seersringclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "seersringclick=true;" + expires + ";";
        }
  });

  $('.archersring').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "archersringclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "archersringclick=true;" + expires + ";";
        }
  });

  $('.warriorring').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "warriorringclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "warriorringclick=true;" + expires + ";";
        }
  });

  $('.seercull').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "seercullclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "seercullclick=true;" + expires + ";";
        }
  });

  $('.mudbattlestaff').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "mudbattlestaffclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "mudbattlestaffclick=true;" + expires + ";";
        }
  });

  $('.treasonousring').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "treasonousringclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "treasonousringclick=true;" + expires + ";";
        }
  });

  $('.tyrannicalring').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "tyrannicalringclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "tyrannicalringclick=true;" + expires + ";";
        }
  });

  $('.ringofthegods').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "ringofthegodsclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "ringofthegodsclick=true;" + expires + ";";
        }
  });

  $('.voidrange').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "voidrangeclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "voidrangeclick=true;" + expires + ";";
        }
  });

  $('.voidmelee').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "voidmeleeclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "voidmeleeclick=true;" + expires + ";";
        }
  });

  $('.voidmage').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "voidmageclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "voidmageclick=true;" + expires + ";";
        }
  });

  $('.voidtop').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "voidtopclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "voidtopclick=true;" + expires + ";";
        }
  });

  $('.voidelitetop').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "voidelitetopclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "voidelitetopclick=true;" + expires + ";";
        }
  });

  $('.voidmace').click(function(){
    if ($(this).css('opacity') == '1') {
          $(this).animate({'opacity':0.4}, 175);
          document.cookie = "voidmaceclick=false;" + expires + ";";
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "voidmaceclick=true;" + expires + ";";
        }
  });

}
$(document).ready(main);