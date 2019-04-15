

$(document).ready(function(){

	$("button#Left").click(function(){
	  $("div").animate({
		left: '250px',
		height: '-=150px',
		width: '-=150px'
	  });
	}); 

	$("button#Right6").click(function(){
	  $("div").animate({
		left: '250px',
		height: '+=150px',
		width: '+=150px'
	  });
	}); 

	$("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $( "#panel" ).animate({
		left: '250px',
		height: '+=150px',
		width: '+=150px'
	  });
    });

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
	    
	},true);

	x = 100;
	y = 200;

	gameLoop();

	/*
	x 910 - y 981
	*/
	function gameLoop() 
	{
	/*
	space -> 32
	*/
		if (keyState[32]){//centro
			vaiSu();
			vaiGiu();
	    }
	    document.getElementById("test").style.top = y + "px";
	    document.getElementById("test").style.left = x + "px";
			
		setTimeout(gameLoop, 10);
		document.getElementById("comandi").innerHTML = "(" + x + "; " + y + ")";

	}

});


function vaiSu()
{	
	for(var i=0; i<40; i++)
	{
		y-=1;
	}
}

function vaiGiu()
{	

	for(var i=0; i<40; i++)
	{
		y+=1;
	}
}






