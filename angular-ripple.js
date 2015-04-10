/*!
 * angular-ripple.js v0.0.3 - A standalone AngularJS implementation of the Google Material Design ripple effect.
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
        var x, y, size, offsets;

        element.on('click touchstart', function(e) {
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
          ripple.className.replace('animate', '');

          // get click coordinates by event type
          if (eventType === 'click') {
            x = e.pageX;
            y = e.pageY;
          } else if(eventType === 'touchstart') {
            x = e.changedTouches[0].pageX;
            y = e.changedTouches[0].pageY;
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

        });
      }
    };
  });
})(window, window.angular);
