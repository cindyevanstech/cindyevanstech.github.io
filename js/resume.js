(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
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
    target: '#sideNav'
  });

 $('[data-tab]').on('click', function(ev) {
  var $target = $(ev.target).closest('li'),
      tabName = $target.attr('data-tab');

  $('[data-control="nav-list"]').find('mynav-item').removeClass('mynav-current');
  $target.find('div').addClass('mynav-current');
  $('[data-tab-target]').fadeOut('fast');
  $('[data-tab-target='+tabName+']').fadeIn('slow');
 })
})(jQuery); // End of use strict

function openUrl(url){
  window.open(url, '_blank')
}
