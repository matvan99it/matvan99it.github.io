

$(document).ready(function(){

	start();

	var keyState = {};

	window.addEventListener('keydown',function(e){
	    keyState[e.keyCode || e.which] = true;
	},true);

	window.addEventListener('keyup',function(e){
	    keyState[e.keyCode || e.which] = false;
	},true);

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
	    //salto
		if(keyState[38] || keyState[32])
		{
			jump(0);
		}

		//movimenti normali
	    if (keyState[37] || keyState[65]){//sinistra
	    	movimentazzione("x", "-");
		}

	    if (keyState[39] || keyState[68]){//destra
	    	movimentazzione("x", "+");
		}
	    
	    if(x>=0)
	    document.getElementById("test").style.left = x + "px";

		if(y>=0)
	    document.getElementById("test").style.top = y + "px";
	    
	    setTimeout(gameLoop, 10);
	 }




	 function jump(i)
	{
		if (i > 8){
			return gravita(0, "singolo");
		}

		y-=1

	  	var interv = setTimeout(function() {
	    jump(i+1);
	    var j=i+3;
	    if(i>5 && (keyState[38] || keyState[32]))
	    {	    	
	    	double_jump(i, j);
	    }
	  }, 100);
	}
});


/*

**

Capire come attivare l'animazione di doppio salto 
senza che vada il loop a mezz'aria
e fare in modo che non si attivi il salto singolo a mezz'aria ma si attivi il doppio salto
**

*/


function double_jump(i, j)
{
	console.log(j);
	if (i > j){
		return gravita(0, "doppio");
	}

	y-=1

  var interv = setTimeout(function() {
    double_jump(i+1);
  }, 100);
}

function gravita(i, salto)
{
	if(salto=="singolo")
	{
		if (i > 8)
		{
			return i;
			
		}

		y+=1

	  	var interv = setTimeout(function() {
	    	gravita(i+1, "singolo");
	  	}, 100);
	}

	if(salto=="doppio")
	{
		if (i > 10)
		{
			return i;
			
		}

		y+=1

	  	var interv = setTimeout(function() {
	    	gravita(i+1, "doppio");
	  	}, 100);
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
}

function ground()
{
	/*
	
	**

	per evitare la caduta libera del loop però devo ricordarmi la y di partenza
	dimodochè se mai finisse sotto torni alla posizione originaria
	
	**
	
	*/
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
	var body = $("body");
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
	var body = $("body");
	var width = body.width();
	var heigth = body.height();
	//console.log(width+"-"+heigth);
	var hr=$("<hr />");
	hr.appendTo(body);
	hr.css({"position":'relative', "top": 0});
	x = 10;
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


















































































































































































































































