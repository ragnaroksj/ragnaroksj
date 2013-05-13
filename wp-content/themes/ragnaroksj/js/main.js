require(["jquery-1.5.2.min","bgstretcher","jquery.cycle.all","music","ragnaroksj"],function(jQuery,jQuery,jQuery,music,ragnaroksj){
	//$(document).ready(function(){
		var pageTypeArray = jQuery("body").attr("class").split(" ");
		if(pageTypeArray[0] == "home"){	
			var bgImage = new Image();
			bgImage.src = "wp-content/themes/ragnaroksj/images/bg.jpg";
			bgImage.onload = function(){
				jQuery("body").bgStretcher({
					images: ['wp-content/themes/ragnaroksj/images/bg.jpg'], 
					imageWidth: 1024, 
					imageHeight: 768, 
					preloadImg: true,
					callbackfunction: ragnaroksj.initialization()
				});	
			}
		}else{
			ragnaroksj.initialization();
		}

	//});
});