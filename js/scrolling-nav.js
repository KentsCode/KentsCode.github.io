$(document).ready(function(){

  var owl = $('.owl-carousel');
  owl.owlCarousel({
    center:true,
      loop:true,
      nav:true,
      margin:10,
      //stagePadding:10,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },            
          960:{
              items:4
          },
          1200:{
              items:5
          }
      }
  });
  owl.on('mousewheel', '.owl-stage', function (e) {
      if (e.deltaY>0) {
          owl.trigger('next.owl');
      } else {
          owl.trigger('prev.owl');
      }
      e.preventDefault();
  });

  //scrolling navigation code
  (function($) {
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 200
    });
  })(jQuery); // End of use strict


  // Redirect timer on button click
  $(".redirectButton").on("click", function(){
    var redirectURL = $(this).attr("data-url");
    var counter = 10;
    var interval = setInterval(function() {
      counter--;
      $("#count").text(counter);
      console.log(counter);
      if (counter == 0) {
        window.location.href = redirectURL;
        clearInterval(interval);
      }
    }, 1000);

  $(".timerStop").on("click", function(){
    clearInterval(interval);
  })



  });
});