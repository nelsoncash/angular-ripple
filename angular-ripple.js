/*!
 * angular-ripple.js v0.0.7 - A standalone AngularJS implementation of the Google Material Design ripple effect.
 * Copyright (c) 2014 Nelson Cash - http://github.com/nelsoncash/angular-ripple
 * http://codepen.io/MikeMcChillin/pen/XJrLwg
 * License: MIT
 */

(function(window, angular, undefined) {
  'use strict';

  if(!angular) {
    return;
  }

  var rip = angular.module('angularRipple', []);

  rip.directive('angularRipple', function($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var x, y, size, offsets,
          func = function(e){
            var ripple = this.querySelector('.angular-ripple');
            var eventType = e.type;
            var elem = this;
            // Ripple
            if (ripple === null) {
              // Create ripple
              ripple = document.createElement('span');
              ripple.setAttribute('class', 'angular-ripple');

              // Register function to stop animation when the effect is done.
              ripple.addEventListener('animationend', stopAnimate, false);
              ripple.addEventListener('webkitAnimationEnd', stopAnimate, false);

              // Prepend ripple to element
              this.insertBefore(ripple, this.firstChild);

              // Set ripple size
              if (!ripple.offsetHeight && !ripple.offsetWidth) {
                size = Math.max(this.offsetWidth, this.offsetHeight);
                ripple.style.width = size + 'px';
                ripple.style.height = size + 'px';
              }
            }

            // get click coordinates by event type
            if (eventType === 'mousedown') {
              x = e.pageX;
              y = e.pageY;
            } else if (eventType === 'touchstart') {
              try {
                var origEvent;

                if (typeof e.changedTouches !== 'undefined') {
                  origEvent = e.changedTouches[0];
                } else {
                  origEvent = e.originalEvent;
                }

                x = origEvent.pageX;
                y = origEvent.pageY;
              } catch (e) {
                // fall back to center of el
                x = ripple.offsetWidth / 2;
                y = ripple.offsetHeight / 2;
              }
            }

            // set new ripple position by click or touch position
            function getPos(element) {
              var de = document.documentElement;
              var box = element.getBoundingClientRect();
              var top = box.top + window.pageYOffset - de.clientTop;
              var left = box.left + window.pageXOffset - de.clientLeft;
              return { top: top, left: left };
            }

            offsets = getPos(this);
            ripple.style.left = (x - offsets.left - size / 2) + 'px';
            ripple.style.top = (y - offsets.top - size / 2) + 'px';

            // Add animation effect
            angular.element(ripple).addClass('animate');

            // Remove animation when it's ends
            function stopAnimate(e) {
              angular.element(ripple).removeClass('animate');
            }

            // This remove the animation anyway the event propagation was faster.
            $timeout(function(){
              stopAnimate();
            }, 500, false);

          };

        var eventType = ('ontouchstart' in document) ? 'touchstart' : 'mousedown';
        element.on(eventType, func);

        //remove the event listener on scope destroy
        scope.$on('$destroy',function() {
          element.off(eventType, func);
        });
      }
    };
  });
})(window, window.angular);