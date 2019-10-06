const $ = window.jQuery;
const inView = require('in-view');
require('velocity-animate');

const DOM_CACHE = {
  $page_heading: $('header .heading'),
  $content_heading: $('article h1'),
  $meta: $('article .meta'),
  $the_content: $('article .the-content'),
};

/**
 * Config inView
 */
inView.threshold(0);

DOM_CACHE.$page_heading.velocity({height: '30vh'}, {easing: 'ease-in-out', duration: 1000});

DOM_CACHE.$content_heading
  .velocity({opacity: 1, scale: 1.1}, {delay: 1000, duration: 300})
  .velocity({scale: 1});

DOM_CACHE.$meta
  .velocity({opacity: 1, scale: 1.2}, {delay: 1300, duration: 300})
  .velocity({scale: 1});

DOM_CACHE.$the_content
  .velocity({opacity: 1}, {delay: 1600, duration: 300});
