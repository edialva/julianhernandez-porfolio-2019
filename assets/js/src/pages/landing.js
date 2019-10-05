const $ = window.jQuery;
if(typeof $ !== 'function') return console.error('jQuery not loaded');

DOM_CACHE = {
  $mobile_menu_btn: $('#mobile-menu-btn'),
  $mobile_menu_container: $('#mobile-menu-container'),
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
