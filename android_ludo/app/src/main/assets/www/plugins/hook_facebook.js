gradle =/**
GRADLE - KNOWLEDGE IS POWER
***** PROPRIETARY CODE *****/{...gradle,...{/**
@author : gradle (gradlecode@outlook.com)
@update: 02/07/2019 12:39:00
@version_name: gradle-logic
@version_code: v6.0.0
copyright @2012-2020
*/

	//Ready : /!\ DO NOT CHANGE, ONLY IF YOU ARE AN EXPERT.
	//=========================
	prepareFb: function() {
        gradle.event('gradle prepare facebook ...');

		if(FacebookAds) FacebookAds.setOptions({
			isTesting: gradle.isTesting,
			//deviceHash: ''
		});

		if(gradle.enableBanner && typeof FacebookAds!=='undefined'){
            FacebookAds.createBanner( {
				adId      : gradle.banner,
				position  : gradle.bannerAtBottom ? FacebookAds.AD_POSITION.BOTTOM_CENTER : FacebookAds.AD_POSITION.TOP_CENTER,
				autoShow  : true
			});
        }

        if(gradle.enableInterstitial && typeof FacebookAds!=='undefined'){
			FacebookAds.prepareInterstitial( {adId: gradle.interstitial, autoShow:false} );
		}
    },

	showInterFb: function(){
		if(!gradle.enableInterstitial) return;
        if(!gradle.isMobile || typeof FacebookAds=='undefined') return;
        FacebookAds.showInterstitial();
	}

}};