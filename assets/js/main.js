$(document).ready(function() {
  //Check if mobile
  if (/Mobi/.test(navigator.userAgent)) {
    $('.bg-holder').parallaxScroll({
      friction: 0
    });
  } else {
    $('.bg-holder').parallaxScroll({
      friction: 0.2
    });
  }

  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    
    if (target.length) {
      event.preventDefault();
      
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });
});
