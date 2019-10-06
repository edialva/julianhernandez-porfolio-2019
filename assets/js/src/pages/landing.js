const $ = window.jQuery;
if(typeof $ !== 'function') return console.error('jQuery not loaded');
// require animations
require('../modules/landing.animations.js');

DOM_CACHE = {
  $mobile_menu_btn: $('#mobile-menu-btn'),
  $mobile_menu_container: $('#mobile-menu-container'),
  $scroll_button: $('#scroll-button'),
};

// OPTIMIZE: this is sloppy, create into module
let menuOpen = false;

let menuHandler = (e) => {

  let $container = DOM_CACHE.$mobile_menu_container;

  if (menuOpen){
    $container.css('max-height', '0');
    menuOpen = false;
  } else {
    $container.css('max-height', $container.prop('scrollHeight') + "px");
    menuOpen = true;
  }

};

DOM_CACHE.$mobile_menu_btn.on('click', menuHandler);
DOM_CACHE.$mobile_menu_container.on('click', 'a', menuHandler);

/**
 * Smooth Scrolling on menu
 */
$('a[href*="#"]').on('click', function(e) {
  e.preventDefault();
  let offset = $($(this).attr('href')).offset().top;
  $("html").velocity("scroll", { offset: `${offset}px`, mobileHA: false });
});

/**
 * Scroll Button
 */

DOM_CACHE.$scroll_button.on('click', (e) => {
  $("html").velocity("scroll", { offset: `0px`, mobileHA: false });
});
