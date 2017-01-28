if(sessionStorage.getItem('home') == null){


$.get("https://api.cosmicjs.com/v1/raj-website",{},
	function(data) {
		console.log("API CALL");
		var numOfPortObj = 0;
		var mediaJSON = [];
		var portfolioJSON = [];
		for (var i = data['bucket']['objects'].length - 1; i >= 0; i--) {
			//CAPTIONS FOR GALLERY
			if(data['bucket']['objects'][i]['slug'] == "gallery"){
				var numOfCaptions = data['bucket']['objects'][i]['metafields'].length;

				for(var j = 0; j < numOfCaptions; j++){
					mediaJSON[j] = [];
					mediaJSON[j][0] = data['bucket']['objects'][i]['metafields'][j]['url'];
					mediaJSON[j][1] = data['bucket']['objects'][i]['metafields'][j]['title'];

					//media = [['url', 'caption'], ['url', 'caption']]
					//GETS VALUE OF EACH CAPTION
					//SAVE TO SESSION STORAGE HERE
					//data['bucket']['objects'][i]['metafields'][j]['value']
				}
			//PORTFOLIO OBJECTS
			}else if(data['bucket']['objects'][i]['type_slug'] == "portfolio-objects"){
				
				var picUrl = data['bucket']['objects'][i]['metadata']['picture']['url'];
				var date = data['bucket']['objects'][i]['metadata']['date'];
				var longdesc = data['bucket']['objects'][i]['metadata']['longdesc'];
				var shortdesc = data['bucket']['objects'][i]['metadata']['shortdesc'];
				var title = data['bucket']['objects'][i]['metadata']['title'];
				var longtitle = data['bucket']['objects'][i]['metadata']['longtitle'];
				var type = data['bucket']['objects'][i]['metadata']['type'];

				var portJsonData = [picUrl, date, longdesc, shortdesc, title, longtitle, type];

				portfolioJSON[numOfPortObj] = portJsonData;
				numOfPortObj++;
				
				//format for portfolio
				//port_1 = [picUrl, date, longdesc, shortdesc, title, longtitle, type]
				//port_2
				//...
			//HOME OBJECTS
			}else if(data['bucket']['objects'][i]['slug'] == "home"){
				var heading = data['bucket']['objects'][i]['metadata']['heading'];
				var shortdesc = data['bucket']['objects'][i]['metadata']['shortdesc'];
				var gallerytitle = data['bucket']['objects'][i]['metadata']['gallerytitle'];
				var gallerypic1 = data['bucket']['objects'][i]['metadata']['gallerypic1']['url'];
				var gallerypic2 = data['bucket']['objects'][i]['metadata']['gallerypic2']['url'];
				var gallerypic3 = data['bucket']['objects'][i]['metadata']['gallerypic3']['url'];
				var abouttitle = data['bucket']['objects'][i]['metadata']['abouttitle'];
				var coverpicture = data['bucket']['objects'][i]['metadata']['coverpicture']['url'];
				var aboutpicture = data['bucket']['objects'][i]['metadata']['aboutpicture']['url'];


				var homeJSON = [heading, shortdesc, gallerytitle, gallerypic1, gallerypic2, gallerypic3, abouttitle, coverpicture, aboutpicture];
				sessionStorage.setItem('home', JSON.stringify(homeJSON));
				//format for home
				//home = [heading, shortdesc, gallerytitle, gallerypic1, gallerypic2, gallerypic3, abouttitle]
			//ABOUT PAGE OBJECTS
			}else if(data['bucket']['objects'][i]['slug'] == "about"){
				var description = data['bucket']['objects'][i]['metadata']['description'];
				var shortdesc = data['bucket']['objects'][i]['metadata']['shortdesc'];
				var aboutpicture = data['bucket']['objects'][i]['metadata']['aboutpicture']['url'];

				var aboutJSON = [description, shortdesc, aboutpicture];
				sessionStorage.setItem('about', JSON.stringify(aboutJSON));
			}
		}//end of for loop going through all objects
		sessionStorage.setItem('media', JSON.stringify(mediaJSON));
		sessionStorage.setItem('portfolio', JSON.stringify(portfolioJSON));
		grabAllData();
	}


);

}else{
	grabAllData();
}