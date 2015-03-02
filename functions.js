$(document).ready(function(){ 
(function buildUp(){
 

	var txt=" ";
	for (var i in adatok){ 
		var datum = adatok[i].ows_HirekKezdet.split(" ");
		var data = adatok[i].ows_Author.split("#");
		 txt=txt+' <div class="frame"><img class="kep" src="'
		 +adatok[i].ows_Images+'"><div class="news"><ul><li><a class="titles" href="#">'
		 +adatok[i].ows_Title+'</a></li><li>'
		 +datum[0]+' <a class="auth" href="#">'
		 +data[1]+'</a></li><li class="ajanlo">'+adatok[i].ows_HirekAjanlo+'</li></ul></div></div>';
		 
	   }  
   
	document.getElementById("content").innerHTML = txt;
	$(".kep").css({"height": "53px","border":"2px solid #5AB071","float":"left"});
	$(".frame").css({"height":"55px","width":"600px","background-color":"#FFFFFF","padding":"10px","margin-bottom":"15px"});
	$(".news").css({"margin-left":"50px","flaot":"right"});
	$(".news").find("li").css({"list-style-type":"none","font-size":"11px"});
	$(".titles").css({"font-size":"13px","color":"#5AB071","text-decoration":"none"});
	$(".auth").css({"color": "#0b6721","text-decoration":"none"});
	$("ul").css({"margin-top":"0px"})
	
	})();
});