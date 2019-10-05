(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const $ = window.jQuery;
if(typeof $ !== 'function') return console.error('jQuery not loaded');

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
 * Scroll Button
 */
DOM_CACHE.$scroll_button.on('click', (e) => {

  $("html, body").animate({ scrollTop: 0 }, "slow");

});

},{}]},{},[1]);
