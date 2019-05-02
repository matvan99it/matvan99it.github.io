

$(document).ready(function(){

	makeDiv();
	
	$("#su").css("background-color","purple");
	$("#giu").css("background-color","purple");
	$("#sinistra").css("background-color","purple");
	$("#destra").css("background-color","purple");

	$("#centro").css("background-color","purple");

	$("#suSx").css("background-color","purple");
	$("#giuSx").css("background-color","purple");
	$("#suDx").css("background-color","purple");
	$("#giuDx").css("background-color","purple");

	$('#console').bind('keydown', function(event) {
	    var key = event.keyCode;
		console.log("The Unicode KEY code is: " + key);	
	});

	var keyState = {};

	window.addEventListener('keydown',function(e){
	    keyState[e.keyCode || e.which] = true;
	},true);

	window.addEventListener('keyup',function(e){
	    keyState[e.keyCode || e.which] = false;
	    $("#test").css("background-color", "blue");
	    colorizzazzione("centro", "sinistra", "destra", "su", "giu", "giuSx", "giuDx", "suSx", "suDx", "nope")
	},true);
	start();
	gameLoop();
	/*
	x 910 - y 981
	*/

	//funzione cuore del programma
	function gameLoop() 
	{

	/*
	w -> 87 | su -> 38
	a -> 65 | sinistra -> 37
	s -> 83 | giu -> 40
	d -> 68 | destra -> 39
	space -> 32
	*/
	for(var i=1;i<6;i++)
	{
		checkCollisions("#casual"+i);
	}

		checkCollisions("#muro");

		if (keyState[32])
		{//centro
			colorizzazzione("centro", "sinistra", "destra", "su", "giu", "giuSx", "giuDx", "suSx", "suDx", "premuto");
			start();
	    }

		//movimenti normali
	    if (keyState[37] || keyState[65]){//sinistra
	    	movimentazzione("x", "-");
		    //x -=1;\\
		    colorizzazzione("sinistra", "destra", "su", "giu", "giuSx", "giuDx", "suSx", "suDx", "centro", "premuto");
	    }

	    if (keyState[39] || keyState[68]){//destra
	    	movimentazzione("x", "+");
		    //x += 1;\\
		    colorizzazzione("destra", "sinistra", "su", "giu", "giuSx", "giuDx", "suSx", "suDx", "centro", "premuto")
	    }
	    
	    if (keyState[38] || keyState[87]){//su
	    	movimentazzione("y", "-");
		    //y -= 1;\\
		    colorizzazzione("su", "giu", "sinistra", "destra", "giuSx", "giuDx", "suSx", "suDx", "centro", "premuto")
	    }
	    
	    if (keyState[40] || keyState[83]){//giù
	    	movimentazzione("y", "+");
		    //y += 1;\\
		    colorizzazzione( "giu", "su", "sinistra", "destra", "giuSx", "giuDx", "suSx", "suDx", "centro", "premuto")
	    }

	    //movimento laterale
	    if ( (keyState[37] && keyState[40]) || (keyState[65] && keyState[83]) ) {//giù sinistra
	    	movimentazzione("y", "+");
		    //y += 1;\\
		    colorizzazzione("giuSx", "giuDx", "suSx", "suDx", "giu", "su", "sinistra", "destra", "centro", "premuto")
	    }

	    if ( (keyState[39] && keyState[40]) || (keyState[68] && keyState[83]) ){//giù destra
	    	movimentazzione("y", "+");
		    //y += 1;\\
		    colorizzazzione("giuDx", "giuSx", "suSx", "suDx", "giu", "su", "sinistra", "destra", "centro", "premuto")
	    }

	    if ( (keyState[37] && keyState[38]) || (keyState[65] && keyState[87]) ){//su sinistra
	    	movimentazzione("y", "-");
		    //y -= 1;\\
		    colorizzazzione("suSx", "suDx", "giuDx", "giuSx", "giu", "su", "sinistra", "destra", "centro", "premuto")
	    }

	    if ( (keyState[39] && keyState[38]) || (keyState[68] && keyState[87]) ){//su destra
	    	movimentazzione("y", "-");
		    //y -= 1;\\
		    colorizzazzione("suDx", "suSx", "giuDx", "giuSx", "giu", "su", "sinistra", "destra", "centro", "premuto")
	    }
	    
	    if(x>=0)
	    document.getElementById("test").style.left = x + "px";

		if(y>=0)
	    document.getElementById("test").style.top = y + "px";
	    
	    setTimeout(gameLoop, 10);
	    var $box = $("#muro");
  var $muro = $box.position();
  var $width = $box.width();
  var $height = $box.height();
	    document.getElementById("comandi").innerHTML = "Quadratino: ( [" + x + " - " + ( x + 20 ) + "]; [" + y + " - " + ( y + 20 ) + "] ) " +
	    									      "<br> Tabella comandi: ( [" + $muro.left + " - " + ( $muro.left + $width ) + "]; [" + $muro.top + " - " + ( $muro.top + $height ) + "] )" + " => Larghezza: " + $width + " - Altezza: " + $height;
	}


});

//funzione per colorare la tabella dei comandi
function colorizzazzione(str1, str2, str3, str4, str5, str6, str7, str8, str9, status)
{
	
	st1="#"+str1;
	st2="#"+str2;
	st3="#"+str3;
	st4="#"+str4;

	st5="#"+str5;
	st6="#"+str6;
	st7="#"+str7;
	st8="#"+str8;
	st9="#"+str9;

	if(status=="premuto")
	{
		$(st1).css("background-color", "green");
		$(st2).css("background-color", "purple");
		$(st3).css("background-color", "purple");
		$(st4).css("background-color", "purple");
		$(st5).css("background-color", "purple");
		$(st6).css("background-color", "purple");
		$(st7).css("background-color", "purple");
		$(st8).css("background-color", "purple");
		$(st9).css("background-color", "purple");		
	}
	else
	{
		$(st1).css("background-color", "purple");
		$(st2).css("background-color", "purple");
		$(st3).css("background-color", "purple");
		$(st4).css("background-color", "purple");
		$(st5).css("background-color", "purple");
		$(st6).css("background-color", "purple");
		$(st7).css("background-color", "purple");
		$(st8).css("background-color", "purple");
		$(st9).css("background-color", "purple");
	}

	switch(str1)
	{
		case "centro":
			$("#test").css("background-color", "blue");
		break;

		case "sinistra":
	    	$("#test").css("background-color", "red");
		break;

		case "destra":
	    	$("#test").css("background-color", "green");
		break;

		case "su":
	    	$("#test").css("background-color", "yellow");
		break;

		case "giu":
	    	$("#test").css("background-color", "orange");
		break;

		case "suDx":		
	    	$("#test").css("background-color", "#80cc00");
		break;

		case "suSx":		
	    	$("#test").css("background-color", "#ff8000");
		break;

		case "giuDx":
	    	$("#test").css("background-color", "#99b233");
		break;

		case "giuSx":
	    	$("#test").css("background-color", "#ff4c1a");
		break;
	}
}

//movimento del personaggio
function movimentazzione(loc, smurot)
{

	var murox=controllo_posizione(loc);
	var muroy=controllo_posizione(loc);



	if(loc=="x" && smurot=="-"){
		return x-=1;
	}

	if(loc=="x" && smurot=="+"){
		return x+=1;
	}

	if(loc=="y" && smurot=="-"){
		return y-=1;
	}

	if(loc=="y" && smurot=="+"){
		return y+=1;
	}
}

//controllo se va a collidere con i bordi dello schermo
function controllo_posizione(loc)
{
	/*var body = document.body;
	var width = body.offsetWidth;
	var heigth = body.offsetHeight;	/*
	y -> 0 e 981
	x -> 0 e 910
	*/
	//console.log( "Altezza: " + heigth + "; Larghezza: " + width+";");
	var body = $("html");
	var width = body.width();
	var heigth = body.height();
	//console.log(width+"-"+heigth);

	if(loc=="x")
	{
		if(x<1)
			return x=1;
		if(x>width)
		{
			x=width-1;
			return x;
		}
	}

	if(loc=="y")
	{	
		if(y<1)
			return y=1;
		if(y>heigth)
		{
			y=heigth-1;
			return y;
		}
	}

}

//Creazione dei div randomici
function makeDiv()
{
	// get the width and height of the window
    var width = $(window).width();
    var height = $(window).height();
    // add 100 divs to the page
    for (var i = 0; i < 5; i++) {
        // the left position of the div should be at most the width of the
        // window minus the width of the div, so the div doesn't spill out
        // of the right side of the window.
        var left = Math.floor(Math.random() * (width-100));
        // the top position of the div should be at most the height of the
        // window minus the width of the div, so the div doesn't spill out
        // of the bottom of the window.
        var top = Math.floor(Math.random() * (height-100));
        // create a new div, append it to the body and set the top and
        // left positions in the CSS
        $("<div id='casual" + ( i + 1 ) + "' class='causale' ></div>").appendTo("body").css({
            left: left,
            top: top
        });
    }
}

//posizione basata sulla dimensione dello schermo
function start()
{
	var body = $("html");
	var width = body.width();
	var heigth = body.height();
	//console.log(width+"-"+heigth);
	x = width/2;
	y = heigth/2;
}



	//funzioni per la collisione
function getpositions(box) {
  var _box = $(box);
  var muro = _box.position();
  var width = _box.width();
  var height = _box.height();
  return [ [ muro.left, muro.left + width ], [ muro.top, muro.top + height ] ];
}
        
function comparepositions(p1, p2) {
  var x1 = p1[0] < p2[0] ? p1 : p2;
  var x2 = p1[0] < p2[0] ? p2 : p1;
  return x1[1] > x2[0] || x1[0] === x2[0] ? true : false;
}

function checkCollisions(id){
  var box = $(id)[0];
  var muro = getpositions(box);

  var quadr = getpositions("#test");
  var horizontalMatch = comparepositions(muro[0], quadr[0]);;
  var verticalMatch = comparepositions(muro[1], quadr[1]);
    //console.log("larghezza: "+horizontalMatch+"   altezza:"+verticalMatch)          
  var match = horizontalMatch && verticalMatch;
  if (match)
  { 
  	$("#testoh").text("COLLISION !!!"); stampa(muro, quadr);

  	//dala tabella

  	//lato destro -funzia-
  	if ( ( quadr[0][0] <= muro[0][1] ) && ( quadr[0][1] > muro[0][1] ) )
  	{
	    console.log("lato destro");
  		return [ x = muro[0][1], y= quadr[1][0] ];
  	}

  	//lato  basso -si tippa-
  	if ( ( quadr[1][0] <= muro[1][1] ) &&  ( quadr[1][1] > muro[1][1] ) )
  	{
	    console.log("lato bassso");
  		return [ y = muro[1][1], x = quadr[0][0] ];
  	}//*/

    //questi 2 richiedono l'uso delle dimensioni dql qudrato usando [0][1] e [1][1]
  	//lato alto -si tippa-
  	if ( ( quadr[1][1] >= muro[1][0] ) &&  (  quadr[1][0] < muro[1][0] ) )
  	{
	    console.log("lato alto");
  		return [ y = (muro[1][0]-20), x = quadr[0][0] ];
  	}//*/

  	//lato sinistro -si tippa-
  	if ( ( quadr[0][1] >= muro[0][0] ) &&  ( quadr[0][0] < muro[0][0] ) )
  	{
		console.log("lato sinistro");
  		return [ x = (muro[0][0]-20), y = quadr[1][0] ];
  	}//*/
  	
  }
  else 
  { 
  	$("#testoh").text("eh elale"); stampa(muro, quadr);
  }
  
}

function stampa(muro, quadr)
{
	$("#testoh").append("<br>"+
  		"<ul>"+  		
	  		"<li>"+
	  			"<ul>"+
	  				"<li>quadr[0][0]: "+quadr[0][0]+" - muro[0][1]: "+muro[0][1]+"</li>"+
					"<li>quadr[0][1]: "+quadr[0][1]+" - muro[0][1]: "+muro[0][1]+"</li>"+
	  			"</ul>"+
	  		"</li>"+

	  		"<li>"+
	  			"<ul>"+
	  				"<li>quadr[1][0]: "+quadr[1][0]+" - muro[1][0]:"+muro[1][0]+"</li>"+
					"<li>quadr[1][1]: "+quadr[1][1]+" - muro[1][1]:"+muro[1][1]+"</li>"+
				"</ul>"+
			"</li>"+
		"</ul>");
}


















































































































































































































































