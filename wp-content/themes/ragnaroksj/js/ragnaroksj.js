var ragnaroksj = {

	muteFlag : 0,
	
	headerAnimation : function(){
			
		jQuery(".site-title").animate({
			left: 0,
			opacity: 1
		},800,function(){

			jQuery(".nav").animate({
				left: 0,
				opacity: 1
			},800, function(){
				//this.footerAnimation();
				ragnaroksj.homeLeftItemAnimation();
				
			});

		});

	},

	//footerAnimation : function(){},
	homeLeftItemAnimation : function(){
		
		jQuery("#left-item .item").eq(0).animate({
			"opacity":1
		},800,function(){
			for(var i = 1; i< jQuery("#left-item .item").length;i++){
				jQuery("#left-item .item").eq(i).animate({
					"opacity":1,
					"top":0
				},(800+i*100),function(){
					if(i !== (jQuery("#left-item .item").length-1)){
						jQuery(".view-more").animate({
							opacity:1,
							right:0
						},800);
					}
				})						
			}
		});
	},



	showArticle : function(articleId,itemNumber,blogType){
		ragnaroksj.hideList(articleId,itemNumber);
		jQuery(".article-"+articleId+"-item-"+itemNumber).removeAttr("onclick").css("z-index","999");
		jQuery(".article-"+articleId+"-item-"+itemNumber).animate({
			"top" : (10-itemNumber*100+parseInt(jQuery(".article-"+articleId+"-item-"+itemNumber).css("top")))+"px"
		},800,function(){
			jQuery("#left-item").animate({
				"width" : "95%"
			},800,function(){
				jQuery(".article-"+articleId+"-item-"+itemNumber).animate({
					"height" : "100%"
				},800,function(){
					jQuery(".article-"+articleId+"-item-"+itemNumber+" .title-excerpt").after("<div class='closeBtn' onclick='ragnaroksj.hideArticleDetails("+articleId+","+itemNumber+","+'"'+blogType+'"'+")'>X</div>");
					ragnaroksj.showArticleDetails(articleId,itemNumber,blogType);
				}).attr("class",jQuery(".article-"+articleId+"-item-"+itemNumber).attr("class")+" css-disabled");
			});
		});
		jQuery("body").bgStretcher.pause();

	},

	showArticleDetails : function(articleId, itemNumber,blogType){
		jQuery.ajax({
			type : "POST",
			url	 : "wp-content/themes/ragnaroksj/getArticleDetails.php",
			data : {postId : articleId}
		}).done(function( articleContent ){
			var moreOperations = "<div class='more-operations'><div class='music-box'></div></div>";
			jQuery(".article-"+articleId+"-item-"+itemNumber+" .clear").html(moreOperations+articleContent);

			if(blogType == "musicblog"){
					music.volumeTransition("#global-music",0,5000);
					setTimeout(function(){music.stopMusic("#global-music")},5000);
					var musicId =".article-"+articleId+"-item-"+itemNumber+" .article-music";
					music.setVolume(musicId,0);
					music.playMusic(musicId);
					if(ragnaroksj.muteFlag == 0){
						music.volumeTransition(musicId,1,5000);
					}
			}

			jQuery(".article-"+articleId+"-item-"+itemNumber+" .clear").animate({
				'opacity' : 1
			},800,function(){
				jQuery('.content .img').cycle({
					fx: 'fade',
					timeout : 8000 
				}).hover(function(){
					jQuery(this).cycle("pause");
				},function(){
					jQuery(this).cycle("resume");
				}); 
			});

		});
	},

	hideArticleDetails : function(articleId,itemNumber,blogType){

		jQuery(".article-"+articleId+"-item-"+itemNumber+" .clear").animate({
			opacity : 0
		},800,function(){
			jQuery(".article-"+articleId+"-item-"+itemNumber+" .closeBtn").remove();
			ragnaroksj.hideArticle(articleId,itemNumber);
			document.getElementsByClassName("article-"+articleId+"-item-"+itemNumber).item(0).setAttribute("onclick","ragnaroksj.showArticle("+articleId+","+itemNumber+",'"+blogType+"')");
			//jQuery(".article-"+articleId+"-item-"+itemNumber).attr("onclick","");
			var musicId =".article-"+articleId+"-item-"+itemNumber+" .article-music";
			music.volumeTransition(musicId,0,5000);
			setTimeout(function(){music.stopMusic(musicId)},5000);
			music.playMusic("#global-music");
			if(ragnaroksj.muteFlag == 0){
				music.volumeTransition("#global-music",1,5000);
			}	
		});


		
	},

	hideArticle : function(articleId,itemNumber){
		jQuery(".article-"+articleId+"-item-"+itemNumber).animate({
			height : "64px"
		},800,function(){
			jQuery("#left-item").animate({
				width:"35%"
			},800,function(){
				var pageOffsetArray = jQuery("#left-item").attr("class").split("-");

				jQuery(".article-"+articleId+"-item-"+itemNumber).animate({
					top : (0-482*(parseInt(pageOffsetArray[1])-1)+"px")
				},800,function(){
					jQuery(".item").each(function(){
						jQuery(this).animate({
							opacity : 1
						},800);

						jQuery(".view-more").css("display","block").animate({
							opacity : 1
						},800);
					});
				}).attr("class","item article-"+articleId+"-item-"+itemNumber);
			});
		});
		jQuery("body").bgStretcher.play();
		
	},

	hideList : function(aId, iN){

		jQuery(".view-more").animate({
			opacity : 0
		},800,function(){
			jQuery(this).css("display","none");
		});

		jQuery(".item").each(function(){
			
			var articleClass=jQuery(this).attr("class").split(" ");
			if(articleClass[1] != ("article-"+aId+"-item-"+iN)){
				jQuery(this).animate({
					"opacity":0
				},800);
			}
		});


	},

	viewMoreAnimation : function(){
		ragnaroksj.getMore();

	},

	getMore : function(){
		
		if(!!jQuery(".next-disabled") && jQuery(".next-disabled").attr("class") == "next-disabled"){
			return 0;
		}

		var currentOffsetArray = jQuery("#left-item").attr("class").split("-");
		var currentOffset = parseInt(currentOffsetArray[1])-1;
		
		if(currentOffsetArray[1] < currentOffsetArray[2]){
			
			jQuery.ajax({
				type : "POST",
				url  : "wp-content/themes/ragnaroksj/getMore.php",
				data : {offset : currentOffset+1 }
			}).done(function( newContent ){
				
				if((parseInt(currentOffsetArray[1])+1) > parseInt(currentOffsetArray[3])){
					jQuery(".item-frame").append(newContent);
					maxPage = parseInt(currentOffsetArray[1])+1;
				}else maxPage = currentOffsetArray[3];
				
				jQuery("#left-item").attr("class","page-"+(parseInt(currentOffsetArray[1])+1)+"-"+currentOffsetArray[2]+"-"+maxPage);

				jQuery(".item").each(function(){
					jQuery(this).animate({
						"top" : (0-482*parseInt(currentOffsetArray[1]))+"px"
					},800);	
				});
			});
		}

		if(parseInt(currentOffsetArray[1])+1 == currentOffsetArray[2]){
			jQuery(".view-more .next").eq(0).animate({
				"opacity" : 0.3
			},800,function(){
				jQuery(this).attr("class","next-disabled");
			});
		}

		if(!jQuery(".view-more .previous").attr("class")){
			jQuery(".view-more .previous-disabled").attr("class","previous");
			jQuery(".previous").animate({
				"opacity" : 1
			},800);
		}

	},

	getLess : function(){

		if(!!jQuery(".previous-disabled") && jQuery(".previous-disabled").attr("class") == "previous-disabled"){
			return 0;
		}

		var currentOffsetArray = jQuery("#left-item").attr("class").split("-");
		var currentOffset = parseInt(currentOffsetArray[1])-1;
		
		if(parseInt(currentOffsetArray[1]) >= 2 ){
			jQuery(".item").each(function(){
				jQuery(this).animate({
					"top" : (0-482*(currentOffset-1))+"px"
				},800);
			});
			jQuery("#left-item").attr("class","page-"+(parseInt(currentOffsetArray[1])-1)+"-"+currentOffsetArray
				[2]+"-"+currentOffsetArray[3]);
		}

		if(parseInt(currentOffsetArray[1])-1 == 1){
			jQuery(".view-more .previous").eq(0).animate({
				"opacity" : 0.3
			},800,function(){
				jQuery(this).attr("class","previous-disabled")
			});
		}

		if(!jQuery(".view-more .next").attr("class")){
			jQuery(".view-more .next-disabled").attr("class","next");
			jQuery(".next").animate({
				"opacity" : 1
			},800);
		}

	},

	initialization : function(){
		jQuery(".item-frame").css("display","block");

		for(var i=0; i< jQuery("#left-item .item").length;i++){
			jQuery("#left-item .item").eq(i).css({"top":(0-i*95)+"px","opacity":0});
		}

		this.headerAnimation();
		
		jQuery("#music-mute").toggle(function(){
			music.volumeTransition("#global-music",0,500);
			music.volumeTransition(".article-music",0,500);
			jQuery("#music-mute").css("color","rgb(81,207,235)");
			ragnaroksj.muteFlag = 1;
		},function(){
			music.volumeTransition("#global-music",1,500);
			music.volumeTransition(".article-music",1,500);
			jQuery("#music-mute").css("color","#444");
			ragnaroksj.muteFlag = 0;
		});
		
		
		//this.footerAnimation();
		//this.homeLeftItemAnimation();
	},

	progressBar : function(){
		if(!!jQuery(".resource")){
			jQuery(".resource .progress-bar").each(function(){
				percentageArray = jQuery(this).attr("class").split(" ");
				jQuery(this).animate({
					width : percentageArray[1]
				},1500);
			});
		}
	}

}


jQuery(document).ready(function(){
	var pageTypeArray = jQuery("body").attr("class").split(" ");
	if(pageTypeArray[0] == "home"){	
		var bgImage = new Image();
		bgImage.src = "wp-content/themes/ragnaroksj/images/bg.jpg";
		bgImage.onload = function(){
			jQuery("body").bgStretcher({
				images: ['wp-content/themes/ragnaroksj/images/bg.jpg','wp-content/themes/ragnaroksj/images/bg2.jpg','wp-content/themes/ragnaroksj/images/bg3.jpg','wp-content/themes/ragnaroksj/images/bg4.jpg','wp-content/themes/ragnaroksj/images/bg5.jpg'], 
				imageWidth: 2880, 
				imageHeight: 1920, 
				preloadImg: true,
				nextSlideDelay: 20000,
				slideShowSpeed: 5000,
				callbackfunction: ragnaroksj.initialization()
			});	
		}
	}else{
		ragnaroksj.initialization();
	}

});
