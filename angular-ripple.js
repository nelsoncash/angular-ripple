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

  rip.directive('angularRipple', function() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var x, y, size, offsets,
          func = function(e){
            var ripple = this.querySelector('.angular-ripple');
            var eventType = e.type;
            // Ripple
            if (ripple === null) {
              // Create ripple
              ripple = document.createElement('span');
              ripple.className += ' angular-ripple';

              // Prepend ripple to element
              this.insertBefore(ripple, this.firstChild);

              // Set ripple size
              if (!ripple.offsetHeight && !ripple.offsetWidth) {
                size = Math.max(element[0].offsetWidth, element[0].offsetHeight);
                ripple.style.width = size + 'px';
                ripple.style.height = size + 'px';
              }
            }

            // Remove animation effect
            ripple.className = ripple.className.replace(/ ?(animate)/g, '');

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

            offsets = getPos(element[0]);
            ripple.style.left = (x - offsets.left - size / 2) + 'px';
            ripple.style.top = (y - offsets.top - size / 2) + 'px';

            // Add animation effect
            ripple.className += ' animate';
          }

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