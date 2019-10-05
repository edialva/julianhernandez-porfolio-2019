const $ = window.jQuery;
require('velocity-animate');

const DOM_CACHE = {
  $landing_text: $('section#above-the-fold .center'),
};

const MOBILE_BREAKPOINTS = {

  '1': '725px',

  '2': '550px',

};

DOM_CACHE.$landing_text
  .velocity({right: '0px', opacity: 1 }, {
    begin: (elements) => {
      el = elements[0];
      // unhide text
      el.style.display = 'table';
    }
  });
