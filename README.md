# Jquery Toggle NavBar 1.1
Very light Jquery Plugin for hide and show navbar on scrolling.

Nasser Maronie
* [Demo](http://codepen.io/nassermaronie/pen/ORmyNw)
* [github](https://github.com/firstpersoncode/jQuery-hide-show-navbar)


  toggleNavBar.js 1.1

  Create toggle effect when scrolling page with fade effect or slide effect.
  
  Invoke the plugin with settings
   ```javascript
   //slide effect
     $('#navbar').toggleNav({
   	     slideEffect : true, // Toggle effect, (boolean). Only accept true or false.
         speed : 300 // Toggle animation speed (number) limit of speed is 5000.
     });

     //fade effect
     $('#navbar').toggleNav({
   	     fadeEffect : true,
         speed : 300
     });
  ```

  The navbar will be positioned 'fixed' and stick on the top of screen with full width.

