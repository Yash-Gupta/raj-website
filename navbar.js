
$( "#threebar" ).click(function() {
	console.log("three bar");
	$('#navbar').hide();
	$('#mobileNav').addClass("animated slideInLeft");
	$('#mobileNav').show();
});

$( "#cross" ).click(function() {
	console.log("cross");
	$('#navbar').show();
	$('#navbar').addClass("animated fadeInLeft");
	//$('#mobileNav').addClass("animated slideOutLeft");
	//$('#mobileNav').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
		console.log('hiding');
		$('#mobileNav').hide();
	//});

});