/*for fixed button
window.onscroll = function() {scrollFunction()};
			function scrollFunction() {
			  if (document.body.scrollTop >500 || document.documentElement.scrollTop >500) {
			    document.getElementById("ram").style.display = "block";
			  } else {
			    document.getElementById("ram").style.display = "none";
			  }
			} */
/*for navbar*/
$(document).ready(function() {

  // .scroll() creates an event when the user scrolls
  $(window).scroll(function() {

    // .scrollTop() retrieves vertical position of the scroll bar for the first element in a set of matched elements
    var scroll = $(window).scrollTop();

    var objectSelect = $('#myheader');

    // .offset() retrieves current position of element relative to document
    var objectPosition = objectSelect.offset().top;

    if (scroll > objectPosition) {
      $('nav').addClass('displayNav');
      $('#ram').fadeIn('slow');
    } else {
      $('nav').removeClass('displayNav');
      $('#ram').fadeOut('slow');
    }
  });
});
/*for hover slider effect*/
$(document).ready(function(){
	$("#mycontrol").hide();
	$("header").on('mouseover',function(){
		$("#mycontrol").show();
	});
	$("header").on('mouseout',function(){
		$("#mycontrol").hide();
	});
});
