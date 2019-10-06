const $ = window.jQuery;
// const inView = require('in-view');
require('velocity-animate');

const DOM_CACHE = {
  $page_heading: $('header .heading'),
  $content_heading: $('article h1'),
  $meta: $('article .meta'),
  $techs: $('.meta ul.tech li'),
  $the_content: $('article .the-content'),
};

/**
 * Config inView
 */
DOM_CACHE.$page_heading.velocity({height: '30vh'}, {easing: 'ease-in-out', duration: 1000});

DOM_CACHE.$content_heading
  .velocity({opacity: 1, scale: 1.1}, {delay: 1000, duration: 300})
  .velocity({scale: 1});

DOM_CACHE.$meta
  .velocity({opacity: 1, scale: 1.2}, {delay: 1300, duration: 300})
  .velocity({scale: 1});

let techDuration = 200;
let techDelay = 0;
setTimeout(() => {

  DOM_CACHE.$techs.each(function(){
    let $this = $(this);
    $this
      .velocity({opacity: 1, scale: 1.2}, {delay: techDelay, duration: techDuration})
      .velocity({scale: 1});
    techDelay = techDelay + 50;
  });

}, 1800)

DOM_CACHE.$the_content
  .velocity({opacity: 1}, {delay: 2000, duration: 500});
