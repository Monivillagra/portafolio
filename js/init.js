(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(document).ready(function(){
    $('.materialboxed').materialbox();
  });

  $(document).ready(function(){
      $('.slider').slider({full_width: true});
    });

  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal').modal();
  });

  //$(window).scroll(function() {
   //if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
     //  $('#volver-arriba').fadeIn(200);    // Fade in the arrow
   //} else {
     //  $('#volver-arriba').fadeOut(200);   // Else fade out the arrow
   //}
//});
//$('#volver-arriba').click(function() {      // When arrow is clicked
  // $('body,html').animate({
    //   scrollTop : 0                       // Scroll to top of body
   //}, 500);
//});