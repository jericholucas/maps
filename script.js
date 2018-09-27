$( document ).on( "pageinit", "#map-page", function() {
		
		var defaultLatLng = new google.maps.LatLng(15.0379, 120.6982);  // Default to Hollywood, CA when no geolocation support
		
		drawMap(defaultLatLng);  // No geolocation support, show default map
		
		
		
		//We create a function to draw the map.  It is used once the geolocation is done
		function drawMap(latlng) {
			
			//The options below do the following
			// zoom: Zooms into our locations on the map
			// center: centers in to our location on the map
			// mapTypeId:  We can set this to ROADMAP, TERRAIN, or SATELLITE
			var myOptions = {
				zoom: 18,
				center: latlng,
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			
			var map = new google.maps.Map(document.getElementById("map-canvas"), myOptions);
			
			// By defauly Google maps are not responsive.  
			// To make them responsive we have to have the browser pay attention to the window size
			//  We then recenter the map
			google.maps.event.addDomListener(window, "resize", function() {
			var center = map.getCenter();
			google.maps.event.trigger(map, "resize");
			map.setCenter(center); 
			});
			
			// Add an overlay to the map of current lat/lng
			var marker = new google.maps.Marker({
				position: latlng,
				map: map,
				title: "Greetings!"
			});
			
			
			// Add an overlay to the map of AAU Latitude
			var marker180NM = new google.maps.Marker({
				position: new google.maps.LatLng(15.0379, 120.6982),
				map: map,
				title: "AAU"
			});
			
		}
	});