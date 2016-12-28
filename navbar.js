$('#cross').hide();
$('.twoThirdsT').hide();
$( "#threebar" ).click(function() {
$('.colFullT').css({
	'background-color': 'rgba(0,0,0,0.8)',
	'width': '50%'
});
$('.pageTitle').hide();
$( ".twoThirdsT" ).slideToggle( "fast", function() {
	$('body').css('position', 'fixed');
	
	$('#threebar').hide();
	$('#cross').show();
});
});

$( "#cross" ).click(function() {
	$('.colFullT').css({
		'background-color': 'rgba(0,0,0,0.0)',
		'width': '100%'
	});
	$('.pageTitle').show();
$( ".twoThirdsT" ).slideToggle( "fast", function() {
	$('body').css('position', 'relative');
	$('.colFullT').css('background-color', 'rgba(0,0,0,0)');
	$('#threebar').show();
	$('#cross').hide();
});
});