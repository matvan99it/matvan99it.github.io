

$(document).ready(function(){

	var sprite = new Array( "movimentoSx", "movimentoDx", "attaccoSx", "attaccoDx");
	spritesMovimento(sprite);
	spritesAttacco(sprite);
	console.log(sprite["movimentoSx"]);
	//$("div#movSx").append("<img src="+sprite["movimentoSx"][0]+"></img>");
	gameLoop();

	function gameLoop()
	{
		var spritino;
			for (var i = 0;  i < sprite["movimentoSx"].length; i++)
			{				
				$("div#movSx").append("<img class='photo' id='spr"+i+"' src="+sprite["movimentoSx"][i]+"></img>");
				
				//$("#spr"+i).css({"position": "absolute", "top": "77", "left":"9", "background-color": "white"});
				console.log($("#spr"+i).position());
			}
			/*for (var i = sprite["movimentoSx"].length-1;  i >= 0; i--)
			{				
				$("div#movSx").append("<img class='photo' id='spr"+i+"' src="+sprite["movimentoSx"][i]+"></img>");
				
				//$("#spr"+i).css({"position": "absolute", "top": "77", "left":"9", "background-color": "white"});
				console.log($("#spr"+i).position());
			}*/
			//$(".photo").css("top":"", "left":"")
		
		//setTimeout(gameLoop, 1000);
	}

});

function spritesMovimento(sprito)
{

	sprito["movimentoSx"]=[];
	sprito["movimentoDx"]=[];

	for(var i=0; i<6; i++)
	{
		var MpathDx="./PNG/run3Dx/adventurer-run3-0"+i+".png";
		var MpathSx="./PNG/run3Sx/adventurer-run3-0"+i+".png";
		sprito["movimentoDx"].push(MpathDx);
		sprito["movimentoSx"].push(MpathSx);
	}
}

function spritesAttacco(sprito)
{

	sprito["attaccoSx"]=[];
	sprito["attaccoDx"]=[];

	for(var i=1; i<4; i++)
	{
		for(var j=0; j<6; j++)
		{
			var ApathDx="./PNG/attaccoDx/adventurer-attack"+i+"-0"+j+"-1.3.png";
			var ApathSx="./PNG/attaccoSx/adventurer-attack"+i+"-0"+j+"-1.3.png";
			sprito["attaccoDx"].push(ApathDx);
			sprito["attaccoSx"].push(ApathSx);
			if(i==1 && j==4)
			{
				break;
			}
		}
	}

	var spriS=sprito["attaccoSx"].reverse();
	var spriD=sprito["attaccoDx"].reverse();

	console.log(spriS);
	console.log(spriD);

	for (var i = 0; i < 17; i++) {
		sprito["attaccoDx"].push(spriD[i]);
		sprito["attaccoSx"].push(spriS[i]);
	}
	
}













































































































































































































































