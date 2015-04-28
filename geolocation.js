/* Simple Geolocation Test */

// Write document using Javascript

document.getElementById("maps").innerHTML = "<h3>Kellett School</h3>" + "<p>Below is the location of Kellett School:</p>" + "<img id='kellettSchool' src='#' />" + "<p>Now use the map below to navigate yourself to Kellett School:</p>" + "<img id='visitorMap' src='#'>" + "<p>Did you find that useful?</p>";

// Map of Kellett School

var kellettSchoolLatitude = 22.32476,
	kellettSchoolLongitude = 114.206733,
	kellettSchoolZoom = 17;
document.getElementById("kellettSchool").src = "http://maps.googleapis.com/maps/api/staticmap?center=" + kellettSchoolLatitude + "," + kellettSchoolLongitude + "&zoom=" + kellettSchoolZoom + "&size=400x300&sensor=false";

// Tracking User Location

function getLocation() {
	navigator.geolocation.watchPosition(showPosition);
}

function showPosition(position) {
	var latitude = position.coords.latitude,
		longitude = position.coords.longitude,
		zoom = 17;
	document.getElementById("visitorMap").src = "http://maps.googleapis.com/maps/api/staticmap?center=" + latitude + "," + longitude + "&zoom=" + zoom + "&size=400x300&sensor=false";
}

getLocation();