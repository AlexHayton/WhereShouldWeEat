// Map globals go here
var globalMap;

// Map funcs
function InitialiseMap() {
  var mapOptions = {
    zoom: 8,
    center: new google.maps.LatLng(-34.397, 150.644),
    mapTypeId: google.maps.MapTypeId.ROADMAP
  };
  
  var mapCanvas = $("map-canvas");
  if (mapCanvas.length > 0) {
 	 globalMap = new google.maps.Map(mapCanvas[0],
   	   mapOptions);
  }
}

google.maps.event.addDomListener(window, 'load', InitialiseMap);