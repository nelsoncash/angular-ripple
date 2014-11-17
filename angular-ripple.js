/*!
 * angular-ripple.js v0.0.0 - A standalone AngularJS implementation of the Google Material Design ripple effect.
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
        var x, y;

        element.on('click touchstart', function(e) {
          var ripple = this.querySelector('.angular-ripple');
          var eventType = e.type;
          // Ripple
          if (ripple === null) {
            // Create ripple
            ripple = document.createElement('span');
            ripple.classList.add('angular-ripple');

            // Prepend ripple to element
            this.insertBefore(ripple, this.firstChild);

            // Set ripple size
            if (!ripple.offsetHeight && !ripple.offsetWidth) {
              var size = Math.max(e.target.offsetWidth, e.target.offsetHeight);
              ripple.style.width = size + 'px';
              ripple.style.height = size + 'px';
            }
          }

          // Remove animation effect
          ripple.classList.remove('animate');

          // get click coordinates by event type
          if (eventType === 'click') {
            x = e.pageX;
            y = e.pageY;
          } else if(eventType === 'touchstart') {
            x = e.changedTouches[0].pageX;
            y = e.changedTouches[0].pageY;
          }
          x = x - this.offsetLeft - ripple.offsetWidth / 2;
          y = y - this.offsetTop - ripple.offsetHeight / 2;

          // set new ripple position by click or touch position
          ripple.style.top = y + 'px';
          ripple.style.left = x + 'px';

          // Add animation effect
          ripple.classList.add('animate');

        });
      }
    };
  });
})(window, window.angular);

