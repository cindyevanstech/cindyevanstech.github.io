(function($) {
  "use strict"; // Start of use strict

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
  
  // Set the clicked tab active.
  $('[data-tab]').on('click', function(ev) {
    setActive($(ev.target).closest('[data-tab]'));
  });

  // Reset all [data-tabs], and set tab passed in as active
  function setActive($tab) {
    var tabName = $tab.attr('data-tab');

    $('[data-control="nav-list"]').find('.mynav-current').removeClass('mynav-current');
    $tab.find('div').addClass('mynav-current');

    showPage(tabName);
  }

  // Hide all page panels and show the panel passed in.
  function showPage(tabName) {
      $('[data-tab-target]').fadeOut(1);
      $('[data-tab-target='+tabName+']').fadeIn('slow');
  }

  // Set 'about' tab active when page loads.
  setActive($('[data-tab="about"]'));
})(jQuery); // End of use strict

function openUrl(url){
  window.open(url, '_blank')
}
