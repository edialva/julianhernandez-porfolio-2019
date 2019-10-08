const $ = window.jQuery;
if(typeof $ !== 'function') return console.error('jQuery not loaded');
// require animations
require('../modules/landing.animations.js');
// require mobile menu
require('../modules/mobile-menu');

let DOM_CACHE = {
  $scroll_button: $('#scroll-button'),
};

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
