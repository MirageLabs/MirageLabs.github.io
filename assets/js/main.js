$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('.carousel.carousel-slider').carousel({full_width: true});
  $('.parallax').parallax();

  $("a").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, "easeInOutQuart", function(){
        window.location.hash = hash;
      });
    } 
  });

});
