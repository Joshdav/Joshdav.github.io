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
      if (cookiearr[i].trim() == "voidrobeclick=true") {
        $('.voidrobe').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voideliterobeclick=true") {
        $('.voideliterobe').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "voidknightglovesclick=true") {
        $('.voidknightgloves').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulhoodclick=true") {
        $('.gracefulhood').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulhoodclick=purple") {
        $('.gracefulhood').attr("src", "images/Graceful_hood_purple.png");
        $('.gracefulhood').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulhoodclick=blue") {
        $('.gracefulhood').attr("src", "images/Graceful_hood_blue.png");
        $('.gracefulhood').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulhoodclick=orange") {
        $('.gracefulhood').attr("src", "images/Graceful_hood_orange.png");
        $('.gracefulhood').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulhoodclick=red") {
        $('.gracefulhood').attr("src", "images/Graceful_hood_red.png");
        $('.gracefulhood').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulhoodclick=green") {
        $('.gracefulhood').attr("src", "images/Graceful_hood_green.png");
        $('.gracefulhood').css('opacity', '1');
      }
   	}
}

var main = function() {

  /*sets a cookie to expire in a year*/
  var d = new Date();
  d.setTime(d.getTime() + (24*60*60*1000*365));
  var expires = "expires="+d.toUTCString();

	$('.firecape').click(function(){
		transparency($(this), expires);
	});

	$('.questcape').click(function(){
		transparency($(this), expires);
	});

	$('.achievementcape').click(function(){
		transparency($(this), expires);
	});

  $('.musiccape').click(function(){
    transparency($(this), expires);
  });

	$('.maxcape').click(function(){
		transparency($(this), expires);
	});

  $('.dragonfullhelm').click(function(){
    transparency($(this), expires);
  });

  $('.dragonchainbody').click(function(){
    transparency($(this), expires);
  });

  $('.dragonplatelegs').click(function(){
    transparency($(this), expires);
  });

  $('.dragonplateskirt').click(function(){
    transparency($(this), expires);
  });

  $('.dragonsqshield').click(function(){
    transparency($(this), expires);
  });

  $('.dragon2hsword').click(function(){
    transparency($(this), expires);
  });

  $('.dragonspear').click(function(){
    transparency($(this), expires);
  });

  $('.dragonwarhammer').click(function(){
    transparency($(this), expires);
  });

  $('.dragondefender').click(function(){
    transparency($(this), expires);
  });

  $('.dragonpickaxe').click(function(){
    transparency($(this), expires);
  });

  $('.dragonaxe').click(function(){
    transparency($(this), expires);
  });

  $('.berserkerring').click(function(){
    transparency($(this), expires);
  });

  $('.seersring').click(function(){
    transparency($(this), expires);
  });

  $('.archersring').click(function(){
    transparency($(this), expires);
  });

  $('.warriorring').click(function(){
    transparency($(this), expires);
  });

  $('.seercull').click(function(){
    transparency($(this), expires);
  });

  $('.mudbattlestaff').click(function(){
    transparency($(this), expires);
  });

  $('.treasonousring').click(function(){
    transparency($(this), expires);
  });

  $('.tyrannicalring').click(function(){
    transparency($(this), expires);
  });

  $('.ringofthegods').click(function(){
    transparency($(this), expires);
  });

  $('.voidrange').click(function(){
    transparency($(this), expires);
  });

  $('.voidmelee').click(function(){
    transparency($(this), expires);
  });

  $('.voidmage').click(function(){
    transparency($(this), expires);
  });

  $('.voidtop').click(function(){
    transparency($(this), expires);
  });

  $('.voidelitetop').click(function(){
    transparency($(this), expires);
  });

  $('.voidmace').click(function(){
    transparency($(this), expires);
  });

  $('.voidrobe').click(function(){
    transparency($(this), expires);
  });

  $('.voideliterobe').click(function(){
    transparency($(this), expires);
  });

  $('.voidknightgloves').click(function() {
    transparency($(this), expires);
  });

  /*This is the first function to include changing images for recolours*/

  $('.gracefulhood').click(function(){
    if ($(this).css('opacity') == '1') {
      if ($(this).attr("src") == "images/Graceful_hood.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_hood_purple.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulhoodclick=purple;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_hood_purple.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_hood_blue.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulhoodclick=blue;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_hood_blue.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_hood_orange.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulhoodclick=orange;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_hood_orange.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_hood_red.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulhoodclick=red;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_hood_red.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_hood_green.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulhoodclick=green;" + expires + ";";
      } else {
          $(this).animate({'opacity':0.4}, 175);
          $(this).attr("src", "images/Graceful_hood.png");
          document.cookie = "gracefulhoodclick=false;" + expires + ";";
      }
    }
        else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "gracefulhoodclick=true;" + expires + ";";
        }
  });

}

function transparency(currentitem, expires) {
    if (currentitem.css('opacity') == '1') {
        currentitem.animate({'opacity':0.4}, 175);
        document.cookie = currentitem.attr('class') + "click=false;" + expires + ";";
    } else {
        currentitem.animate({'opacity':1}, 175);
        document.cookie = currentitem.attr('class') + "click=true;" + expires + ";";
    }
}

/*Waits for the document to load before starting the js*/

$(document).ready(main);