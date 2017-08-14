$(document).ready(function(){
	$('.slider').slider();
	$('.parallax').parallax();
	$('.carousel').carousel();
	//$('.carousel').carousel('next');
	$('.carousel.carousel-slider').carousel({full_width: true,next:true});
	
});
$('.collapsible').collapsible({
      accordion: false, // A setting that changes the collapsible behavior to expandable instead of the default accordion style
      onOpen: function(el) {}, //alert('Open'); }, // Callback for Collapsible open
      onClose: function(el) {}// alert('Closed'); } // Callback for Collapsible close
  });
function initMap() {
	var uluru = {lat: 29.862296, lng: 77.896392};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 18,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}