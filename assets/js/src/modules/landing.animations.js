const $ = window.jQuery;
const inView = require('in-view');
require('velocity-animate');

const DOM_CACHE = {
  $landing_text: $('section#above-the-fold .center'),
  $about_info: $('section#about .row.to-animate'),
  $skills: $('.skill')
};

const MOBILE_BREAKPOINTS = {

  '1': '725px',

  '2': '550px',

};

/**
 * Config inView
 */
inView.threshold(0);

/**
 * Landing Section
 */
DOM_CACHE.$landing_text
  .velocity({right: '0px', opacity: 1 }, {
    begin: (elements) => {
      el = elements[0];
      // unhide text
      el.style.display = 'table';
    },
    delay: 700
  });

/**
 * About Section
 */
inView('img.profile-picture')
  .on('enter', el => {
    DOM_CACHE.$about_info.velocity({translateX: 0, opacity: 1 });
  })
  .on('exit', el => {
    DOM_CACHE.$about_info.velocity('stop').velocity('reverse');
  });

inView('.row .skills')
  .on('enter', el => {
    $(el).velocity({opacity: 1}, {delay: 500});
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
