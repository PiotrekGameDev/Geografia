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
	var i=2;
	showSlide=function(){
		$(slides[i]).css( "animation", "none" );
		setTimeout(function ()
		{
			$(slides[i]).css( "visibility", "visible" );
    		$(slides[i]).css( "animation", animations[random(0, animations.length-1)]+" 4s" );
		}, 1);
	}
	//showSlide();
	$(slides[i]).css( "visibility", "visible" );
	addEventListener("keyup", function(e) {
		if (e.keyCode==39 && i<slides.length-1){
			$(slides[i]).css( "animation", "none" );
			$(slides[i]).css( "visibility", "hidden" );
			i++;
			showSlide();
		}
		if (e.keyCode==37&& i>0){
			$(slides[i]).css( "animation", "none" );
			$(slides[i]).css( "visibility", "hidden" );
			i--;
			showSlide();
		}
	}, false);
}