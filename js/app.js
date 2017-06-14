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
      if (cookiearr[i].trim() == "ahrimshoodclick=true") {
        $('.ahrimshood').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dharokshelmclick=true") {
        $('.dharokshelm').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "guthanshelmclick=true") {
        $('.guthanshelm').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "karilscoifclick=true") {
        $('.karilscoif').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "toragshelmclick=true") {
        $('.toragshelm').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "veracshelmclick=true") {
        $('.veracshelm').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "ahrimsrobetopclick=true") {
        $('.ahrimsrobetop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dharoksplatebodyclick=true") {
        $('.dharoksplatebody').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "guthansplatebodyclick=true") {
        $('.guthansplatebody').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "karilsleathertopclick=true") {
        $('.karilsleathertop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "toragsplatebodyclick=true") {
        $('.toragsplatebody').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "veracsbrassardclick=true") {
        $('.veracsbrassard').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "ahrimsrobeskirtclick=true") {
        $('.ahrimsrobeskirt').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dharoksplatelegsclick=true") {
        $('.dharoksplatelegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "guthanschainskirtclick=true") {
        $('.guthanschainskirt').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "karilsleatherskirtclick=true") {
        $('.karilsleatherskirt').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "toragsplatelegsclick=true") {
        $('.toragsplatelegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "veracsplateskirtclick=true") {
        $('.veracsplateskirt').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "ahrimsstaffclick=true") {
        $('.ahrimsstaff').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dharoksgreataxeclick=true") {
        $('.dharoksgreataxe').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "guthanswarspearclick=true") {
        $('.guthanswarspear').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "karilscrossbowclick=true") {
        $('.karilscrossbow').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "toragshammersclick=true") {
        $('.toragshammers').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "veracsflailclick=true") {
        $('.veracsflail').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "abbysalbludgeonclick=true") {
        $('.abbysalbludgeon').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "abbysaldaggerclick=true") {
        $('.abbysaldagger').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "abbysalwhipclick=true") {
        $('.abbysalwhip').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "darkbowclick=true") {
        $('.darkbow').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "tridentoftheseasclick=true") {
        $('.tridentoftheseas').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "occultnecklaceclick=true") {
        $('.occultnecklace').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "slayerhelmetclick=true") {
        $('.slayerhelmet').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "slayerringclick=true") {
        $('.slayerring').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "broadboltsclick=true") {
        $('.broadbolts').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "herbsackclick=true") {
        $('.herbsack').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "blackslayerhelmetclick=true") {
        $('.blackslayerhelmet').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "greenslayerhelmetclick=true") {
        $('.greenslayerhelmet').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "redslayerhelmetclick=true") {
        $('.redslayerhelmet').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "purpleslayerhelmetclick=true") {
        $('.purpleslayerhelmet').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "amuletoffuryclick=true") {
        $('.amuletoffury').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "berserkernecklaceclick=true") {
        $('.berserkernecklace').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "onyxringclick=true") {
        $('.onyxring').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "regenbraceletclick=true") {
        $('.regenbracelet').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "amuletoftortureclick=true") {
        $('.amuletoftorture').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "necklaceofanguishclick=true") {
        $('.necklaceofanguish').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "ringofsufferingclick=true") {
        $('.ringofsuffering').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "tormentedbraceletclick=true") {
        $('.tormentedbracelet').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "unholybookclick=true") {
        $('.unholybook').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "holybookclick=true") {
        $('.holybook').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "bookofbalanceclick=true") {
        $('.bookofbalance').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "bookofdarknessclick=true") {
        $('.bookofdarkness').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "bookoflawclick=true") {
        $('.bookoflaw').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "bookofwarclick=true") {
        $('.bookofwar').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "robinhoodhatclick=true") {
        $('.robinhoodhat').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "rangerstunicclick=true") {
        $('.rangerstunic').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "holysandalsclick=true") {
        $('.holysandals').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "wizardbootsclick=true") {
        $('.wizardboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonbootsclick=true") {
        $('.dragonboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "rangerbootsclick=true") {
        $('.dragonboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "infinitybootsclick=true") {
        $('.infinityboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "primordialbootsclick=true") {
        $('.primordialboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "pegasianbootsclick=true") {
        $('.pegasianboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "eternalbootsclick=true") {
        $('.eternalboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "toxicblowpipeclick=true") {
        $('.toxicblowpipe').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "magicfangclick=true") {
        $('.magicfang').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "serpentinehelmclick=true") {
        $('.serpentinehelm').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "tanzanitehelmclick=true") {
        $('.tanzanitehelm').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "magmahelmclick=true") {
        $('.magmahelm').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "bandosgodswordclick=true") {
        $('.bandosgodsword').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "bandoschestplateclick=true") {
        $('.bandoschestplate').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "bandostassetsclick=true") {
        $('.bandostassets').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "bandosbootsclick=true") {
        $('.bandosboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "zamorakgodswordclick=true") {
        $('.zamorakgodsword').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "zamorakianhastaclick=true") {
        $('.zamorakianhasta').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "zamorakianspearclick=true") {
        $('.zamorakianspear').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "staffofthedeadclick=true") {
        $('.staffofthedead').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "steambattlestaffclick=true") {
        $('.steambattlestaff').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "saradomingodswordclick=true") {
        $('.saradomingodsword').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "saradominswordclick=true") {
        $('.saradominsword').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "armadylcrossbowclick=true") {
        $('.armadylcrossbow').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "saradominslightclick=true") {
        $('.saradominslight').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "armadylgodswordclick=true") {
        $('.armadylgodswordclick').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "armadylhelmetclick=true") {
        $('.armadylhelmet').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "armadylchestplateclick=true") {
        $('.armadylchestplate').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "armadylchainskirtclick=true") {
        $('.armadylchainskirt').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "elysianclick=true") {
        $('.elysian').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "arcaneclick=true") {
        $('.arcane').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "spectralclick=true") {
        $('.spectral').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "odiumwardclick=true") {
        $('.odiumward').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "maledictionwardclick=true") {
        $('.maledictionward').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonfireshieldclick=true") {
        $('.dragonfireshield').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "infinityhatclick=true") {
        $('.infinityhat').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "infinitytopclick=true") {
        $('.infinitytop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "infinitybottomsclick=true") {
        $('.infinitybottoms').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "infinityglovesclick=true") {
        $('.infinitygloves').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "masterwandclick=true") {
        $('.masterwand').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "magesbookclick=true") {
        $('.magesbook').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "bonestopeachesclick=true") {
        $('.bonestopeaches').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thirdamagehatclick=true") {
        $('.thirdamagehat').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thirdarobetopclick=true") {
        $('.thirdarobetop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thirdarobeclick=true") {
        $('.thirdarobe').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thirdaamuletclick=true") {
        $('.thirdaamulet').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thirdawandclick=true") {
        $('.thirdawand').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thirdarangecoifclick=true") {
        $('.thirdarangecoif').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thirdarangetopclick=true") {
        $('.thirdarangetop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thirdarangelegsclick=true") {
        $('.thirdarangelegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thirdarangevambracesclick=true") {
        $('.thirdarangevambraces').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thirdabowclick=true") {
        $('.thirdabow').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thirdafullhelmetclick=true") {
        $('.thirdafullhelmet').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thirdaplatebodyclick=true") {
        $('.thirdaplatebody').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thirdaplatelegsclick=true") {
        $('.thirdaplatelegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thirdakiteshieldclick=true") {
        $('.thirdakiteshield').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thirdalongswordclick=true") {
        $('.thirdalongsword').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gildedfullhelmclick=true") {
        $('.gildedfullhelm').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gildedplatebodyclick=true") {
        $('.gildedplatebody').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gildedplatelegsclick=true") {
        $('.gildedplatelegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gildedplateskirtclick=true") {
        $('.gildedplateskirt').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gildedscimitarclick=true") {
        $('.gildedscimitar').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gildedbootsclick=true") {
        $('.gildedboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gildedkiteshieldclick=true") {
        $('.gildedkiteshield').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thirdacloakclick=true") {
        $('.thirdacloak').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "lavadragonmaskclick=true") {
        $('.lavadragonmask').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "furyornamentkitclick=true") {
        $('.furyornamentkit').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "darkinfinitycolourkitclick=true") {
        $('.darkinfinitycolourkit').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "lightinfinitycolourkitclick=true") {
        $('.lightinfinitycolourkit').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonchainbodyornamentkitclick=true") {
        $('.dragonchainbodyornamentkit').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonfullhelmornamentkitclick=true") {
        $('.dragonfullhelmornamentkit').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonplateskirtornamentkitclick=true") {
        $('.dragonplateskirtornamentkit').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonsqshieldornamentkitclick=true") {
        $('.dragonsqshieldornamentkit').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "chaoseleclick=true") {
        $('.chaosele').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "babymoleclick=true") {
        $('.babymole').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "kbdclick=true") {
        $('.kbd').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "snakelingclick=true") {
        $('.snakeling').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "rexclick=true") {
        $('.rex').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "primeclick=true") {
        $('.prime').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "supremeclick=true") {
        $('.supreme').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "kqclick=true") {
        $('.kq').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "zilyanaclick=true") {
        $('.zilyana').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "graardorclick=true") {
        $('.graardor').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "krilclick=true") {
        $('.kril').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "kreeclick=true") {
        $('.kree').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "abyssalorphanclick=true") {
        $('.abyssalorphan').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "krakenclick=true") {
        $('.kraken').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "hellpuppyclick=true") {
        $('.hellpuppy').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "smokedevilclick=true") {
        $('.smokedevil').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "spiderlingclick=true") {
        $('.spiderling').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "scorpiaoffspringclick=true") {
        $('.scorpiaoffspring').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "callistocubclick=true") {
        $('.callistocub').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "vetionjrclick=true") {
        $('.vetionjr').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "jadclick=true") {
        $('.jad').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "penancequeenclick=true") {
        $('.penancequeen').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "darkcoreclick=true") {
        $('.darkcore').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "chompychickclick=true") {
        $('.chompychick').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "rockgolemclick=true") {
        $('.rockgolem').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "heronclick=true") {
        $('.heron').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "beaverclick=true") {
        $('.beaver').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "chinchompaclick=true") {
        $('.chinchompa').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "attackclick=true") {
        $('.attack').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "strengthclick=true") {
        $('.strength').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "defenceclick=true") {
        $('.defence').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "hitpointsclick=true") {
        $('.hitpoints').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "rangeclick=true") {
        $('.range').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "magicclick=true") {
        $('.magic').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "prayerclick=true") {
        $('.prayer').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "slayerclick=true") {
        $('.slayer').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "runecraftingclick=true") {
        $('.runecrafting').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "constructionclick=true") {
        $('.construction').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "agilityclick=true") {
        $('.agility').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "herbloreclick=true") {
        $('.herblore').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "thievingclick=true") {
        $('.thieving').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "craftingclick=true") {
        $('.crafting').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "fletchingclick=true") {
        $('.fletching').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "hunterclick=true") {
        $('.hunter').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "miningclick=true") {
        $('.mining').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "smithingclick=true") {
        $('.smithing').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "fishingclick=true") {
        $('.fishing').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "cookingclick=true") {
        $('.cooking').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "woodcuttingclick=true") {
        $('.woodcutting').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "firemakingclick=true") {
        $('.firemaking').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "farmingclick=true") {
        $('.farming').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "prospectorhelmetclick=true") {
        $('.prospectorhelmet').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "prospectorjacketclick=true") {
        $('.prospectorjacket').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "prospectorlegsclick=true") {
        $('.prospectorlegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "prospectorbootsclick=true") {
        $('.prospectorboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "coalbagclick=true") {
        $('.coalbag').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gembagclick=true") {
        $('.gembag').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "rekclick=true") {
        $('.rek').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "olmletclick=true") {
        $('.olmlet').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "skotosclick=true") {
        $('.skotos').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "squirrelclick=true") {
        $('.squirrel').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "tanglerootclick=true") {
        $('.tangleroot').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "riftguardianclick=true") {
        $('.riftguardian').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "rockyclick=true") {
        $('.rocky').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "phoenixclick=true") {
        $('.phoenix').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "bloodhoundclick=true") {
        $('.bloodhound').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "farmersstrawhatclick=true") {
        $('.farmersstrawhat').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "farmersjacketclick=true") {
        $('.farmersjacket').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "farmerstrousersclick=true") {
        $('.farmerstrousers').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "farmersbootsclick=true") {
        $('.farmersboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gricollerscanclick=true") {
        $('.gricollerscan').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "seedboxclick=true") {
        $('.seedbox').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "lumberjackhatclick=true") {
        $('.lumberjackhat').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "lumberjacktopclick=true") {
        $('.lumberjacktop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "lumberjacklegsclick=true") {
        $('.lumberjacklegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "lumberjackbootsclick=true") {
        $('.lumberjackboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "anglerhatclick=true") {
        $('.anglerhat').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "anglertopclick=true") {
        $('.anglertop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "anglerwadersclick=true") {
        $('.anglerwaders').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "anglerbootsclick=true") {
        $('.anglerboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "pyromancerhoodclick=true") {
        $('.pyromancerhood').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "pyromancergarbclick=true") {
        $('.pyromancergarb').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "pyromancerrobeclick=true") {
        $('.pyromancerrobe').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "pyromancerbootsclick=true") {
        $('.pyromancerboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "roguemaskclick=true") {
        $('.roguemask').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "roguetopclick=true") {
        $('.roguetop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "rogueglovesclick=true") {
        $('.roguegloves').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "roguetrousersclick=true") {
        $('.roguetrousers').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "roguebootsclick=true") {
        $('.rogueboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "imbuedheartclick=true") {
        $('.imbuedheart').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "eternalgemclick=true") {
        $('.eternalgem').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dustbattlestaffclick=true") {
        $('.dustbattlestaff').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "mistbattlestaffclick=true") {
        $('.mistbattlestaff').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "eternalgloryclick=true") {
        $('.eternalglory').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "sceptreclick=true") {
        $('.sceptre').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "tornprayerscrollclick=true") {
        $('.tornprayerscroll').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dexterousprayerscrollclick=true") {
        $('.dexterousprayerscroll').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "arcaneprayerscrollclick=true") {
        $('.arcaneprayerscroll').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonswordclick=true") {
        $('.dragonsword').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonharpoonclick=true") {
        $('.dragonharpoon').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonthrownaxeclick=true") {
        $('.dragonthrownaxe').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "twistedbucklerclick=true") {
        $('.twistedbuckler').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonhuntercrossbowclick=true") {
        $('.dragonhuntercrossbow').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dinhsbulwarkclick=true") {
        $('.dinhsbulwark').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "ancestralhatclick=true") {
        $('.ancestralhat').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "ancestralrobetopclick=true") {
        $('.ancestralrobetop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "ancestralrobebottomclick=true") {
        $('.ancestralrobebottom').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "kodaiinsigniaclick=true") {
        $('.kodaiinsignia').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "dragonclawsclick=true") {
        $('.dragonclaws').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "eldermaulclick=true") {
        $('.eldermaul').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "twistedbowclick=true") {
        $('.twistedbow').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "largespadeclick=true") {
        $('.largespade').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "cluelessscrollclick=true") {
        $('.cluelessscroll').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "uritransformclick=true") {
        $('.uritransform').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "heavycasketclick=true") {
        $('.heavycasket').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "smoulderingstoneclick=true") {
        $('.smoulderingstone').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "eternalcrystalclick=true") {
        $('.eternalcrystal').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "pegasiancrystalclick=true") {
        $('.pegasiancrystal').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "primordialcrystalclick=true") {
        $('.primordialcrystal').css('opacity', '1');
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
      if (cookiearr[i].trim() == "gracefulcapeclick=true") {
        $('.gracefulcape').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulcapeclick=purple") {
        $('.gracefulcape').attr("src", "images/Graceful_cape_purple.png");
        $('.gracefulcape').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulcapeclick=blue") {
        $('.gracefulcape').attr("src", "images/Graceful_cape_blue.png");
        $('.gracefulcape').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulcapeclick=orange") {
        $('.gracefulcape').attr("src", "images/Graceful_cape_orange.png");
        $('.gracefulcape').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulcapeclick=red") {
        $('.gracefulcape').attr("src", "images/Graceful_cape_red.png");
        $('.gracefulcape').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulcapeclick=green") {
        $('.gracefulcape').attr("src", "images/Graceful_cape_green.png");
        $('.gracefulcape').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefultopclick=true") {
        $('.gracefultop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefultopclick=purple") {
        $('.gracefultop').attr("src", "images/Graceful_top_purple.png");
        $('.gracefultop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefultopclick=blue") {
        $('.gracefultop').attr("src", "images/Graceful_top_blue.png");
        $('.gracefultop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefultopclick=orange") {
        $('.gracefultop').attr("src", "images/Graceful_top_orange.png");
        $('.gracefultop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefultopclick=red") {
        $('.gracefultop').attr("src", "images/Graceful_top_red.png");
        $('.gracefultop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefultopclick=green") {
        $('.gracefultop').attr("src", "images/Graceful_top_green.png");
        $('.gracefultop').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulglovesclick=true") {
        $('.gracefulgloves').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulglovesclick=purple") {
        $('.gracefulgloves').attr("src", "images/Graceful_gloves_purple.png");
        $('.gracefulgloves').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulglovesclick=blue") {
        $('.gracefulgloves').attr("src", "images/Graceful_gloves_blue.png");
        $('.gracefulgloves').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulglovesclick=orange") {
        $('.gracefulgloves').attr("src", "images/Graceful_gloves_orange.png");
        $('.gracefulgloves').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulglovesclick=red") {
        $('.gracefulgloves').attr("src", "images/Graceful_gloves_red.png");
        $('.gracefulgloves').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulglovesclick=green") {
        $('.gracefulgloves').attr("src", "images/Graceful_gloves_green.png");
        $('.gracefulgloves').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefullegsclick=true") {
        $('.gracefullegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefullegsclick=purple") {
        $('.gracefullegs').attr("src", "images/Graceful_legs_purple.png");
        $('.gracefullegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefullegsclick=blue") {
        $('.gracefullegs').attr("src", "images/Graceful_legs_blue.png");
        $('.gracefullegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefullegsclick=orange") {
        $('.gracefullegs').attr("src", "images/Graceful_legs_orange.png");
        $('.gracefullegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefullegsclick=red") {
        $('.gracefullegs').attr("src", "images/Graceful_legs_red.png");
        $('.gracefullegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefullegsclick=green") {
        $('.gracefullegs').attr("src", "images/Graceful_legs_green.png");
        $('.gracefullegs').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulbootsclick=true") {
        $('.gracefulboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulbootsclick=purple") {
        $('.gracefulboots').attr("src", "images/Graceful_boots_purple.png");
        $('.gracefulboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulbootsclick=blue") {
        $('.gracefulboots').attr("src", "images/Graceful_boots_blue.png");
        $('.gracefulboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulbootsclick=orange") {
        $('.gracefulboots').attr("src", "images/Graceful_boots_orange.png");
        $('.gracefulboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulbootsclick=red") {
        $('.gracefulboots').attr("src", "images/Graceful_boots_red.png");
        $('.gracefulboots').css('opacity', '1');
      }
      if (cookiearr[i].trim() == "gracefulbootsclick=green") {
        $('.gracefulboots').attr("src", "images/Graceful_boots_green.png");
        $('.gracefulboots').css('opacity', '1');
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

  $('.ahrimshood').click(function() {
    transparency($(this), expires);
  });

  $('.dharokshelm').click(function() {
    transparency($(this), expires);
  });

  $('.guthanshelm').click(function() {
    transparency($(this), expires);
  });

  $('.karilscoif').click(function() {
    transparency($(this), expires);
  });

  $('.toragshelm').click(function() {
    transparency($(this), expires);
  });

  $('.veracshelm').click(function() {
    transparency($(this), expires);
  });

  $('.ahrimsrobetop').click(function() {
    transparency($(this), expires);
  });

  $('.dharoksplatebody').click(function() {
    transparency($(this), expires);
  });

  $('.guthansplatebody').click(function() {
    transparency($(this), expires);
  });

  $('.karilsleathertop').click(function() {
    transparency($(this), expires);
  });

  $('.toragsplatebody').click(function() {
    transparency($(this), expires);
  });

  $('.veracsbrassard').click(function() {
    transparency($(this), expires);
  });

  $('.ahrimsrobeskirt').click(function() {
    transparency($(this), expires);
  });

  $('.dharoksplatelegs').click(function() {
    transparency($(this), expires);
  });

  $('.guthanschainskirt').click(function() {
    transparency($(this), expires);
  });

  $('.karilsleatherskirt').click(function() {
    transparency($(this), expires);
  });

  $('.toragsplatelegs').click(function() {
    transparency($(this), expires);
  });

  $('.veracsplateskirt').click(function() {
    transparency($(this), expires);
  });

  $('.ahrimsstaff').click(function() {
    transparency($(this), expires);
  });

  $('.dharoksgreataxe').click(function() {
    transparency($(this), expires);
  });

  $('.guthanswarspear').click(function() {
    transparency($(this), expires);
  });

  $('.karilscrossbow').click(function() {
    transparency($(this), expires);
  });

  $('.toragshammers').click(function() {
    transparency($(this), expires);
  });

  $('.veracsflail').click(function() {
    transparency($(this), expires);
  });

  $('.abbysalbludgeon').click(function() {
    transparency($(this), expires);
  });

  $('.abbysaldagger').click(function() {
    transparency($(this), expires);
  });

  $('.abbysalwhip').click(function() {
    transparency($(this), expires);
  });

  $('.darkbow').click(function() {
    transparency($(this), expires);
  });

  $('.tridentoftheseas').click(function() {
    transparency($(this), expires);
  });

  $('.occultnecklace').click(function() {
    transparency($(this), expires);
  });

  $('.slayerhelmet').click(function() {
    transparency($(this), expires);
  });

  $('.slayerring').click(function() {
    transparency($(this), expires);
  });

  $('.broadbolts').click(function() {
    transparency($(this), expires);
  });

  $('.herbsack').click(function() {
    transparency($(this), expires);
  });

  $('.blackslayerhelmet').click(function() {
    transparency($(this), expires);
  });

  $('.greenslayerhelmet').click(function() {
    transparency($(this), expires);
  });

  $('.redslayerhelmet').click(function() {
    transparency($(this), expires);
  });

  $('.purpleslayerhelmet').click(function() {
    transparency($(this), expires);
  });

  $('.amuletoffury').click(function() {
    transparency($(this), expires);
  });

  $('.berserkernecklace').click(function() {
    transparency($(this), expires);
  });

  $('.onyxring').click(function() {
    transparency($(this), expires);
  });

  $('.regenbracelet').click(function() {
    transparency($(this), expires);
  });

  $('.amuletoftorture').click(function() {
    transparency($(this), expires);
  });

  $('.necklaceofanguish').click(function() {
    transparency($(this), expires);
  });

  $('.ringofsuffering').click(function() {
    transparency($(this), expires);
  });

  $('.tormentedbracelet').click(function() {
    transparency($(this), expires);
  });

  $('.unholybook').click(function() {
    transparency($(this), expires);
  });

  $('.holybook').click(function() {
    transparency($(this), expires);
  });

  $('.bookofbalance').click(function() {
    transparency($(this), expires);
  });

  $('.bookofdarkness').click(function() {
    transparency($(this), expires);
  });

  $('.bookoflaw').click(function() {
    transparency($(this), expires);
  });

  $('.bookofwar').click(function() {
    transparency($(this), expires);
  });

  $('.robinhoodhat').click(function() {
    transparency($(this), expires);
  });

  $('.rangerstunic').click(function() {
    transparency($(this), expires);
  });

  $('.holysandals').click(function() {
    transparency($(this), expires);
  });

  $('.wizardboots').click(function() {
    transparency($(this), expires);
  });

  $('.dragonboots').click(function() {
    transparency($(this), expires);
  });

  $('.rangerboots').click(function() {
    transparency($(this), expires);
  });

  $('.infinityboots').click(function() {
    transparency($(this), expires);
  });

  $('.primordialboots').click(function() {
    transparency($(this), expires);
  });

  $('.pegasianboots').click(function() {
    transparency($(this), expires);
  });

  $('.eternalboots').click(function() {
    transparency($(this), expires);
  });

  $('.toxicblowpipe').click(function() {
    transparency($(this), expires);
  });

  $('.magicfang').click(function() {
    transparency($(this), expires);
  });

  $('.serpentinehelm').click(function() {
    transparency($(this), expires);
  });

  $('.tanzanitehelm').click(function() {
    transparency($(this), expires);
  });

  $('.magmahelm').click(function() {
    transparency($(this), expires);
  });

  $('.bandosgodsword').click(function() {
    transparency($(this), expires);
  });

  $('.bandoschestplate').click(function() {
    transparency($(this), expires);
  });

  $('.bandostassets').click(function() {
    transparency($(this), expires);
  });

  $('.bandosboots').click(function() {
    transparency($(this), expires);
  });

  $('.zamorakgodsword').click(function() {
    transparency($(this), expires);
  });

  $('.zamorakianhasta').click(function() {
    transparency($(this), expires);
  });

  $('.zamorakianspear').click(function() {
    transparency($(this), expires);
  });

  $('.staffofthedead').click(function() {
    transparency($(this), expires);
  });

  $('.steambattlestaff').click(function() {
    transparency($(this), expires);
  });

  $('.saradomingodsword').click(function() {
    transparency($(this), expires);
  });

  $('.saradominsword').click(function() {
    transparency($(this), expires);
  });

  $('.armadylcrossbow').click(function() {
    transparency($(this), expires);
  });

  $('.saradominslight').click(function() {
    transparency($(this), expires);
  });

  $('.armadylgodsword').click(function() {
    transparency($(this), expires);
  });

  $('.armadylhelmet').click(function() {
    transparency($(this), expires);
  });

  $('.armadylchestplate').click(function() {
    transparency($(this), expires);
  });

  $('.armadylchainskirt').click(function() {
    transparency($(this), expires);
  });

  $('.elysian').click(function() {
    transparency($(this), expires);
  });

  $('.arcane').click(function() {
    transparency($(this), expires);
  });

  $('.spectral').click(function() {
    transparency($(this), expires);
  });

  $('.odiumward').click(function() {
    transparency($(this), expires);
  });

  $('.maledictionward').click(function() {
    transparency($(this), expires);
  });

  $('.dragonfireshield').click(function() {
    transparency($(this), expires);
  });

  $('.infinityhat').click(function() {
    transparency($(this), expires);
  });

  $('.infinitytop').click(function() {
    transparency($(this), expires);
  });

  $('.infinitybottoms').click(function() {
    transparency($(this), expires);
  });

  $('.infinitygloves').click(function() {
    transparency($(this), expires);
  });

  $('.masterwand').click(function() {
    transparency($(this), expires);
  });

  $('.magesbook').click(function() {
    transparency($(this), expires);
  });

  $('.bonestopeaches').click(function() {
    transparency($(this), expires);
  });

  $('.thirdamagehat').click(function() {
    transparency($(this), expires);
  });

  $('.thirdarobetop').click(function() {
    transparency($(this), expires);
  });

  $('.thirdarobe').click(function() {
    transparency($(this), expires);
  });

  $('.thirdaamulet').click(function() {
    transparency($(this), expires);
  });

  $('.thirdawand').click(function() {
    transparency($(this), expires);
  });

  $('.thirdarangecoif').click(function() {
    transparency($(this), expires);
  });

  $('.thirdarangetop').click(function() {
    transparency($(this), expires);
  });

  $('.thirdarangelegs').click(function() {
    transparency($(this), expires);
  });

  $('.thirdarangevambraces').click(function() {
    transparency($(this), expires);
  });

  $('.thirdabow').click(function() {
    transparency($(this), expires);
  });

  $('.thirdafullhelmet').click(function() {
    transparency($(this), expires);
  });

  $('.thirdaplatebody').click(function() {
    transparency($(this), expires);
  });

  $('.thirdaplatelegs').click(function() {
    transparency($(this), expires);
  });

  $('.thirdakiteshield').click(function() {
    transparency($(this), expires);
  });

  $('.thirdalongsword').click(function() {
    transparency($(this), expires);
  });

  $('.gildedfullhelm').click(function() {
    transparency($(this), expires);
  });

  $('.gildedplatebody').click(function() {
    transparency($(this), expires);
  });

  $('.gildedplatelegs').click(function() {
    transparency($(this), expires);
  });

  $('.gildedplateskirt').click(function() {
    transparency($(this), expires);
  });

  $('.gildedscimitar').click(function() {
    transparency($(this), expires);
  });

  $('.gildedboots').click(function() {
    transparency($(this), expires);
  });

  $('.gildedkiteshield').click(function() {
    transparency($(this), expires);
  });

  $('.thirdacloak').click(function() {
    transparency($(this), expires);
  });

  $('.lavadragonmask').click(function() {
    transparency($(this), expires);
  });

  $('.furyornamentkit').click(function() {
    transparency($(this), expires);
  });

  $('.darkinfinitycolourkit').click(function() {
    transparency($(this), expires);
  });

  $('.lightinfinitycolourkit').click(function() {
    transparency($(this), expires);
  });

  $('.dragonchainbodyornamentkit').click(function() {
    transparency($(this), expires);
  });

  $('.dragonfullhelmornamentkit').click(function() {
    transparency($(this), expires);
  });

  $('.dragonplateskirtornamentkit').click(function() {
    transparency($(this), expires);
  });

  $('.dragonsqshieldornamentkit').click(function() {
    transparency($(this), expires);
  });

  $('.chaosele').click(function() {
    transparency($(this), expires);
  });

  $('.babymole').click(function() {
    transparency($(this), expires);
  });

  $('.kbd').click(function() {
    transparency($(this), expires);
  });

  $('.babymole').click(function() {
    transparency($(this), expires);
  });

  $('.snakeling').click(function() {
    transparency($(this), expires);
  });

  $('.rex').click(function() {
    transparency($(this), expires);
  });

  $('.supreme').click(function() {
    transparency($(this), expires);
  });

  $('.prime').click(function() {
    transparency($(this), expires);
  });

  $('.kq').click(function() {
    transparency($(this), expires);
  });

  $('.zilyana').click(function() {
    transparency($(this), expires);
  });

  $('.graardor').click(function() {
    transparency($(this), expires);
  });

  $('.kril').click(function() {
    transparency($(this), expires);
  });

  $('.kree').click(function() {
    transparency($(this), expires);
  });

  $('.abyssalorphan').click(function() {
    transparency($(this), expires);
  });

  $('.kraken').click(function() {
    transparency($(this), expires);
  });

  $('.hellpuppy').click(function() {
    transparency($(this), expires);
  });

  $('.smokedevil').click(function() {
    transparency($(this), expires);
  });

  $('.spiderling').click(function() {
    transparency($(this), expires);
  });

  $('.scorpiaoffspring').click(function() {
    transparency($(this), expires);
  });

  $('.callistocub').click(function() {
    transparency($(this), expires);
  });

  $('.vetionjr').click(function() {
    transparency($(this), expires);
  });

  $('.jad').click(function() {
    transparency($(this), expires);
  });

  $('.vetionjr').click(function() {
    transparency($(this), expires);
  });

  $('.penancequeen').click(function() {
    transparency($(this), expires);
  });

  $('.darkcore').click(function() {
    transparency($(this), expires);
  });

  $('.chompychick').click(function() {
    transparency($(this), expires);
  });

  $('.rockgolem').click(function() {
    transparency($(this), expires);
  });

  $('.heron').click(function() {
    transparency($(this), expires);
  });

  $('.beaver').click(function() {
    transparency($(this), expires);
  });

  $('.chinchompa').click(function() {
    transparency($(this), expires);
  });

  $('.attack').click(function() {
    transparency($(this), expires);
  });

  $('.strength').click(function() {
    transparency($(this), expires);
  });

  $('.defence').click(function() {
      transparency($(this), expires);
  });

  $('.hitpoints').click(function() {
    transparency($(this), expires);
  });

  $('.range').click(function() {
    transparency($(this), expires);
  });

  $('.magic').click(function() {
    transparency($(this), expires);
  });

  $('.prayer').click(function() {
    transparency($(this), expires);
  });

  $('.slayer').click(function() {
    transparency($(this), expires);
  });

  $('.runecrafting').click(function() {
    transparency($(this), expires);
  });

  $('.construction').click(function() {
    transparency($(this), expires);
  });

  $('.agility').click(function() {
    transparency($(this), expires);
  });

  $('.herblore').click(function() {
    transparency($(this), expires);
  });

  $('.thieving').click(function() {
    transparency($(this), expires);
  });

  $('.crafting').click(function() {
    transparency($(this), expires);
  });

  $('.fletching').click(function() {
    transparency($(this), expires);
  });

  $('.hunter').click(function() {
    transparency($(this), expires);
  });

  $('.runecrafting').click(function() {
    transparency($(this), expires);
  });

  $('.mining').click(function() {
    transparency($(this), expires);
  });

  $('.smithing').click(function() {
    transparency($(this), expires);
  });

  $('.fishing').click(function() {
    transparency($(this), expires);
  });

  $('.cooking').click(function() {
    transparency($(this), expires);
  });

  $('.woodcutting').click(function() {
    transparency($(this), expires);
  });

  $('.firemaking').click(function() {
    transparency($(this), expires);
  });

  $('.farming').click(function() {
    transparency($(this), expires);
  });

  $('.prospectorhelmet').click(function() {
    transparency($(this), expires);
  });

  $('.prospectorjacket').click(function() {
    transparency($(this), expires);
  });

  $('.prospectorlegs').click(function() {
    transparency($(this), expires);
  });

  $('.prospectorboots').click(function() {
    transparency($(this), expires);
  });

  $('.coalbag').click(function() {
    transparency($(this), expires);
  });

  $('.gembag').click(function() {
    transparency($(this), expires);
  });

  $('.rek').click(function() {
    transparency($(this), expires);
  });

  $('.olmlet').click(function() {
    transparency($(this), expires);
  });

  $('.skotos').click(function() {
    transparency($(this), expires);
  });

  $('.squirrel').click(function() {
    transparency($(this), expires);
  });

  $('.tangleroot').click(function() {
    transparency($(this), expires);
  });

  $('.riftguardian').click(function() {
    transparency($(this), expires);
  });

  $('.rocky').click(function() {
    transparency($(this), expires);
  });

  $('.phoenix').click(function() {
    transparency($(this), expires);
  });

  $('.bloodhound').click(function() {
    transparency($(this), expires);
  });

  $('.farmersstrawhat').click(function() {
    transparency($(this), expires);
  });

  $('.farmersjacket').click(function() {
    transparency($(this), expires);
  });

  $('.farmerstrousers').click(function() {
    transparency($(this), expires);
  });

  $('.farmersboots').click(function() {
    transparency($(this), expires);
  });

  $('.gricollerscan').click(function() {
    transparency($(this), expires);
  });

  $('.seedbox').click(function() {
    transparency($(this), expires);
  });

  $('.lumberjackhat').click(function() {
    transparency($(this), expires);
  });

  $('.lumberjacktop').click(function() {
    transparency($(this), expires);
  });

  $('.lumberjacklegs').click(function() {
    transparency($(this), expires);
  });

  $('.lumberjackboots').click(function() {
    transparency($(this), expires);
  });

  $('.anglerhat').click(function() {
    transparency($(this), expires);
  });

  $('.anglertop').click(function() {
    transparency($(this), expires);
  });

  $('.anglerwaders').click(function() {
    transparency($(this), expires);
  });

  $('.anglerboots').click(function() {
    transparency($(this), expires);
  });

  $('.pyromancerhood').click(function() {
    transparency($(this), expires);
  });

  $('.pyromancergarb').click(function() {
    transparency($(this), expires);
  });

  $('.pyromancerrobe').click(function() {
    transparency($(this), expires);
  });

  $('.pyromancerboots').click(function() {
    transparency($(this), expires);
  });

  $('.roguemask').click(function() {
    transparency($(this), expires);
  });

  $('.roguetop').click(function() {
    transparency($(this), expires);
  });

  $('.roguegloves').click(function() {
    transparency($(this), expires);
  });

  $('.roguetrousers').click(function() {
    transparency($(this), expires);
  });

  $('.rogueboots').click(function() {
    transparency($(this), expires);
  });

  $('.imbuedheart').click(function() {
    transparency($(this), expires);
  });

  $('.eternalgem').click(function() {
    transparency($(this), expires);
  });

  $('.dustbattlestaff').click(function() {
    transparency($(this), expires);
  });

  $('.mistbattlestaff').click(function() {
    transparency($(this), expires);
  });

  $('.eternalglory').click(function() {
    transparency($(this), expires);
  });

  $('.sceptre').click(function() {
    transparency($(this), expires);
  });

  $('.tornprayerscroll').click(function() {
    transparency($(this), expires);
  });

  $('.dexterousprayerscroll').click(function() {
    transparency($(this), expires);
  });

  $('.arcaneprayerscroll').click(function() {
    transparency($(this), expires);
  });

  $('.dragonsword').click(function() {
    transparency($(this), expires);
  });

  $('.dragonharpoon').click(function() {
    transparency($(this), expires);
  });

  $('.dragonthrownaxe').click(function() {
    transparency($(this), expires);
  });

  $('.twistedbuckler').click(function() {
    transparency($(this), expires);
  });

  $('.dragonhuntercrossbow').click(function() {
    transparency($(this), expires);
  });

  $('.dinhsbulwark').click(function() {
    transparency($(this), expires);
  });

  $('.ancestralhat').click(function() {
    transparency($(this), expires);
  });

  $('.ancestralrobetop').click(function() {
    transparency($(this), expires);
  });

  $('.ancestralrobebottom').click(function() {
    transparency($(this), expires);
  });

  $('.kodaiinsignia').click(function() {
    transparency($(this), expires);
  });

  $('.dragonclaws').click(function() {
    transparency($(this), expires);
  });

  $('.eldermaul').click(function() {
    transparency($(this), expires);
  });

  $('.twistedbow').click(function() {
    transparency($(this), expires);
  });

  $('.largespade').click(function() {
    transparency($(this), expires);
  });

  $('.cluelessscroll').click(function() {
    transparency($(this), expires);
  });

  $('.uritransform').click(function() {
    transparency($(this), expires);
  });

  $('.heavycasket').click(function() {
    transparency($(this), expires);
  });

  $('.smoulderingstone').click(function() {
    transparency($(this), expires);
  });

  $('.eternalcrystal').click(function() {
    transparency($(this), expires);
  });

  $('.pegasiancrystal').click(function() {
    transparency($(this), expires);
  });

  $('.primordialcrystal').click(function() {
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
    } else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "gracefulhoodclick=true;" + expires + ";";
    }
  });

  $('.gracefulcape').click(function(){
    if ($(this).css('opacity') == '1') {
      if ($(this).attr("src") == "images/Graceful_cape.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_cape_purple.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulcapeclick=purple;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_cape_purple.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_cape_blue.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulcapeclick=blue;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_cape_blue.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_cape_orange.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulcapeclick=orange;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_cape_orange.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_cape_red.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulcapeclick=red;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_cape_red.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_cape_green.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulcapeclick=green;" + expires + ";";
      } else {
          $(this).animate({'opacity':0.4}, 175);
          $(this).attr("src", "images/Graceful_cape.png");
          document.cookie = "gracefulcapeclick=false;" + expires + ";";
      }
    } else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "gracefulcapeclick=true;" + expires + ";";
    }
  });

  $('.gracefultop').click(function(){
    if ($(this).css('opacity') == '1') {
      if ($(this).attr("src") == "images/Graceful_top.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_top_purple.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefultopclick=purple;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_top_purple.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_top_blue.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefultopclick=blue;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_top_blue.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_top_orange.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefultopclick=orange;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_top_orange.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_top_red.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefultopclick=red;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_top_red.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_top_green.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefultopclick=green;" + expires + ";";
      } else {
          $(this).animate({'opacity':0.4}, 175);
          $(this).attr("src", "images/Graceful_top.png");
          document.cookie = "gracefultopclick=false;" + expires + ";";
      }
    } else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "gracefultopclick=true;" + expires + ";";
    }
  });

  $('.gracefulgloves').click(function(){
    if ($(this).css('opacity') == '1') {
      if ($(this).attr("src") == "images/Graceful_gloves.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_gloves_purple.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulglovesclick=purple;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_gloves_purple.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_gloves_blue.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulglovesclick=blue;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_gloves_blue.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_gloves_orange.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulglovesclick=orange;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_gloves_orange.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_gloves_red.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulglovesclick=red;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_gloves_red.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_gloves_green.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulglovesclick=green;" + expires + ";";
      } else {
          $(this).animate({'opacity':0.4}, 175);
          $(this).attr("src", "images/Graceful_gloves.png");
          document.cookie = "gracefulglovesclick=false;" + expires + ";";
      }
    } else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "gracefulglovesclick=true;" + expires + ";";
    }
  });

  $('.gracefullegs').click(function(){
    if ($(this).css('opacity') == '1') {
      if ($(this).attr("src") == "images/Graceful_legs.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_legs_purple.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefullegsclick=purple;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_legs_purple.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_legs_blue.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefullegsclick=blue;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_legs_blue.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_legs_orange.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefullegsclick=orange;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_legs_orange.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_legs_red.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefullegsclick=red;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_legs_red.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_legs_green.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefullegsclick=green;" + expires + ";";
      } else {
          $(this).animate({'opacity':0.4}, 175);
          $(this).attr("src", "images/Graceful_legs.png");
          document.cookie = "gracefullegsclick=false;" + expires + ";";
      }
    } else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "gracefullegsclick=true;" + expires + ";";
    }
  });

$('.gracefulboots').click(function(){
    if ($(this).css('opacity') == '1') {
      if ($(this).attr("src") == "images/Graceful_boots.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_boots_purple.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulbootsclick=purple;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_boots_purple.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_boots_blue.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulbootsclick=blue;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_boots_blue.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_boots_orange.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulbootsclick=orange;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_boots_orange.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_boots_red.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulbootsclick=red;" + expires + ";";
      } else if ($(this).attr("src") == "images/Graceful_boots_red.png") {
          $(this).fadeOut("fast", function() {
            $(this).attr("src", "images/Graceful_boots_green.png");
            $(this).fadeIn("fast");
          });
          document.cookie = "gracefulbootsclick=green;" + expires + ";";
      } else {
          $(this).animate({'opacity':0.4}, 175);
          $(this).attr("src", "images/Graceful_boots.png");
          document.cookie = "gracefulbootsclick=false;" + expires + ";";
      }
    } else {
          $(this).animate({'opacity':1}, 175);
          document.cookie = "gracefulbootsclick=true;" + expires + ";";
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