var music = {
	playMusic : function(id){
		jQuery(id).eq(0).get(0).play();
	},

	stopMusic : function(id){
		jQuery(id).get(0).pause();
	},

	volumeTransition : function(id, volumeLevelEnd,transitionTime){		
		jQuery(id).animate({volume: volumeLevelEnd},transitionTime);
	},

	setVolume : function(id,volumeLevel){
		jQuery(id).get(0).volume = volumeLevel;
	},

	

}