const $ = window.jQuery;
const inView = require('in-view');
require('velocity-animate');

const breakpoints = require('./mobile-breakpoints');

const DOM_CACHE = {
  $landing_text: $('section#above-the-fold .center'),
  $about_info: $('section#about .row.to-animate'),
  $skill_container: $('.row .skills'),
  $skills: $('.skill'),
  $portfolio_items: $('.portfolio-item'),
  $contact_info: $('section#contact .text'),
  $contact_form: $('section#contact .jh-contact-form'),
  $scroll_top_btn: $('#scroll-button'),
};

let configInview = () => {
  let windowWidth = $(window).width();
  if(windowWidth >= breakpoints[1]){
    inView.threshold(0.2);
    inView.offset(0);
  }else if (windowWidth <= breakpoints[1]){
    // disable threshold on thinner devices,
    // due to longer divs
    inView.offset(100);
    inView.threshold(0);
  }

};

/**
 * Configure inView based on window width
 */
configInview();
$(window).resize(configInview);


/**
 * Landing Section
 */
inView('section#above-the-fold .center')
  .on('enter', el => {
        DOM_CACHE.$landing_text
          .velocity({right: '0px', opacity: 1 }, {delay: 500});
  })
  .on('exit', el => {
    DOM_CACHE.$landing_text.velocity('reverse');
  });

/**
 * About Section
 */
inView('section#about')
  .on('enter', el => {
    // animate info
    DOM_CACHE.$about_info.velocity({translateX: 0, opacity: 1 });
  });

inView('.row .skills')
  .on('enter', el => {
    // animate skills
    DOM_CACHE.$skill_container.velocity({opacity: 1});
    let delay = 1000;
    let duration = 500;
    DOM_CACHE.$skills.each(function() {
      let $this = $(this);
      let percentage = parseInt($this.attr('data-percentage'));
      let $bar = $this.find('.bar');
      // animate bar
      $bar.velocity({width: `${percentage}%`}, {duration, delay, easing: 'ease-in-out'})
      // animate percentage figure
      setTimeout(() => {
        let $number = $this.find('span.number');
        let count = 0;
        $number.text(count);
        let interval = duration / percentage; // get interval by divding by animation duration
        var timer = setInterval(() => {
          count++;
          $number.text(count);
          if(count === percentage){
            clearInterval(timer);
          }
        }, interval);
      }, delay);
      delay = delay + 150;
    });
  })
  .on('exit', el => {

    DOM_CACHE.$skill_container.velocity('reverse');
    DOM_CACHE.$skills.each(function(){
      let $this = $(this);
      let $bar = $this.find('.bar');
      $bar.velocity('reverse');
    });

  });

/**
 * Portfolio Section
 */
inView('section#portfolio .portfolio-container')
  .once('enter', el => {
    let techDelay = 0;
    DOM_CACHE.$portfolio_items.each(function(){
      let $this = $(this);
      $this
        .velocity({opacity: 1}, {delay: techDelay, duration: 400,
          begin: el => {
            // $(el).css('display', 'inline-flex');
        }})
        .velocity({scale: 1});
      techDelay = techDelay + 200;
    });

  });

/**
 * Contact Section
 */
inView('section#contact')
  .once('enter', el => {
    DOM_CACHE.$contact_info.velocity('fadeIn', {delay: 300});
    DOM_CACHE.$contact_form.velocity('fadeIn', {delay: 600});
  });

/**
 * Scroll Button
 */
inView('section#footer')
  .on('enter', el => {
    DOM_CACHE.$scroll_top_btn.velocity('fadeIn', {easing: 'ease-in-out'});
  })
  .on('exit', el => {
    DOM_CACHE.$scroll_top_btn.css('opacity', 0);
  });
