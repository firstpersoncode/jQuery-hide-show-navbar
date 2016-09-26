/* =========================================================================

Nasser Maronie
https://codepen.io/nassermaronie/
https://github.com/firstpersoncode


  toggleNavBar.js
  9/26/2016
  Very light Jquery Plugin for hide and show navbar on scrolling page.

  
  $('#navbar').autoScroll();

  setting :
  default
  $('#navbar').autoScroll({
	speed 		: 600,	||	scroll speed default '600' or 600ms (data type = number)
	offset 		: 0,	||	offset position '10' will push offset 10px from its offset, '- 10' will pull offset 10px from its offset (data type = number)
	callback 	: null	||	callback after reaching the destination (data type = function)
  });

  
========================================================================= */

(function($) {
  $.fn.toggleNav = function(togglenav){

    //default setting
    var settings = $.extend({
      fadeEffect : null,
      slideEffect : null,
      speed : 600,
      callback : null
    },togglenav);

    var slideTrue = settings.slideEffect == true,
          fadeTrue = settings.fadeEffect == true;    

    return this.each(function(){
      if(slideTrue&&fadeTrue){
        console.error('error, Can\'t set two effects at the same time');
        return false
      }else if(!slideTrue&&!fadeTrue){
        console.error('error, no effect is running');
        return false
      }
      if(settings.speed > 5000 || isNaN(settings.speed)){
        console.error('error, the speed setting is not correct');
        return false
      }

      $(this).addClass("toggleNavbar");
      
      var togglethis = jQuery('.toggleNavbar'),
          previousScroll = 0,
          headerHeight = togglethis.outerHeight();

      togglethis.css({
        position : 'fixed',
        top : '0',left : '0',
        width : '100%',
        display : 'block',
        'z-index' : 99998
      });

      if(slideTrue){                
        togglethis.css({
          WebkitTransition  : 'ease-out '+settings.speed/1000+'s',
          MozTransition     : 'ease-out '+settings.speed/1000+'s',
          MsTransition      : 'ease-out '+settings.speed/1000+'s',
          OTransition       : 'ease-out '+settings.speed/1000+'s',
          transition        : 'ease-out '+settings.speed/1000+'s'
        });
      }
      
      function callback(){
        if ( $.isFunction( settings.callback ) ) {//callback when the element is loaded
          settings.callback.call( this );
        }
      }
      function hideNav(){
        if(fadeTrue){togglethis.fadeOut(settings.speed)}
        else if(slideTrue){          
          togglethis.css({
            'transform' : 'translateY(-'+headerHeight+'px)'
          });
        }
      }
      function showNav(){
        if(fadeTrue){togglethis.fadeIn(settings.speed)}
        else if(slideTrue){          
          togglethis.css({
            'transform' : 'translateY(0px)'
          });
        }
      }

      $(window).scroll(function(){
        var currentScroll = $(this).scrollTop();        
          if (currentScroll > previousScroll) {
              hideNav();
          } else {
              showNav();
          }
        previousScroll = currentScroll;
      });
    });
  }
}(jQuery));

/* =========================================================================

Nasser Maronie

========================================================================= */