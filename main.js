function random(high,low) {
    high++;
    return Math.floor((Math.random())*(high-low))+low;
}
window.onload=function(){
	var animations=[
	"rotateIn",
	"rotateInDownLeft",
	"rotateInDownRight",
	"rotateInUpLeft",
	"rotateInUpRight",
	"flipInY",
	"flipInX",
	"bounceInRight",
	"bounceInLeft",
	"bounceInUp",
	"bounceInDown",
	"fadeIn",
	"fadeInLeft",
	"fadeInRight",
	"fadeInUp",
	"fadeInDown",
	"rollIn",
	"zoomIn",
	"zoomInUp",
	"slideInRight",
	"slideInLeft"
	]
	var slides=$(".slide").toArray();
	$(slides[0]).css( "visibility", "visible" );
	$(slides[0]).css( "animation",  animations[0]+" 4s" );
	var i=0;
	addEventListener("keyup", function(e) {
		$(slides[i]).css( "animation", "none" );
		$(slides[i]).css( "visibility", "hidden" );
		if (e.keyCode==39 && i<slides.length-1){
			i++;
		}
		if (e.keyCode==37&& i>0){
			i--;
		}
		$(slides[i]).css( "animation", "none" );
		setTimeout(function ()
		{
			$(slides[i]).css( "visibility", "visible" );
    		$(slides[i]).css( "animation", animations[random(0, animations.length-1)]+" 4s" );
		}, 1);
	}, false);
}