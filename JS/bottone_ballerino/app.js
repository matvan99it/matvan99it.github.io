

var esiste = document.getElementById("sheetBoxTopDetails");
if (esiste) {
  

var tmp=document.createElement('div');
tmp.innerHTML='<div class="iconeprodotto"><div class="ico-rassicur"><ul><li class="ar"><img src="https://www.dragonstore.it/nuovo/img/trasporto.png"><span>Spedizioni in <br><b>24/72 Ore</b></span></li><li class="br"><img src="https://www.dragonstore.it/nuovo/img/paypal.png"><span>Pagamenti <br><b>Sicuri</b></span></li><li class="dr"><img src="https://www.dragonstore.it/nuovo/img/certificato.png"><span>Prodotti<br><b>Ufficiali</b></span></li><li class="cr"></li></ul></div><div class="ico-soc"><span>Condividi: </span> <a href="" id="fb_share" title="facebook" target="_blank"> <img src="https://www.dragonstore.it/nuovo/img/fbp.png"></a><a href="" id="wat_share" title="whatsapp" target="_blank"><img src="https://www.dragonstore.it/nuovo/img/wa.png"></a><a title="twitter" href="" id="twi_share" target="_blank"><img src="https://www.dragonstore.it/nuovo/img/tw.png"></a><a href="" title="linkedin" id="in_share" target="_blank"><img src="https://www.dragonstore.it/nuovo/img/in.png"></a><a href="" id="tele_share" title="telegram" target="_blank"><img src="https://www.dragonstore.it/nuovo/img/telegram.png"></a><ul class="rec-prodotto"><a target="_blank" href="https://www.google.com/search?q=raven+distribution+sr#lrd=0x477e1ceb7528b985:0x4a26832069c3adc3,1,,,"><li class="fr"><img src="https://www.dragonstore.it/nuovo/img/gog.png"><span><img src="https://www.dragonstore.it/nuovo/img/stelle.png"> <br><b>4.7</b> | Recensioni Google ></span></li></a></ul></div></div>';
document.getElementsByClassName("detailsBox")[0].appendChild(tmp.firstChild);
document.getElementById("fb_share").href =   "https://www.facebook.com/sharer/sharer.php?u=" +  window.location.href;
	document.getElementById("wat_share").href =   "https://wa.me/?text=" +  window.location.href;
	document.getElementById("twi_share").href =   "http://www.twitter.com/share?url=" +  window.location.href;
		document.getElementById("in_share").href =   "https://www.linkedin.com/shareArticle?url=" +  window.location.href;
document.getElementById("tele_share").href =   "https://t.me/share/url?url=" +  window.location.href;
	

	}
	



var esistea = document.querySelector(".img-offer");
if (esistea) {
   
$(".img-offer").attr("src","https://www.dragonstore.it/nuovo/img/promo.png");
}



var marco = document.getElementById("footCustomText");
 marco.insertAdjacentHTML("afterend","<div class='marco'> Developer <a title='web developer Marco Barbadoro' href='https://www.marcobarbadoro.it/site/'><span> Creative Web</span></a></div>"); 
