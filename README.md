angular-ripple
==============

A pure javascript (no polymer, no jQuery) AngularJS directive that adds a Google Material Design ripple effect when clicked or touched.

[Angular Material](https://material.angularjs.org/) is cool, but sometimes you just want the ripple effect in your angular app without all the bloat. That’s why we made this.

# Demo

Here's a <a href="http://nelsoncash.github.io/angular-ripple">demo</a>

# Bower

    bower install --save angular-ripple


# Usage

Include the script in your HTML

    <script type="text/javascript" src="bower_components/angular-ripple/angular-ripple.js"></script>

Then include `angularRipple` in your module dependencies

    angular.module('yourApp', ['angularRipple']);

Then add the `angular-ripple` attribute to elements

    <button angular-ripple>Ripple!</button>

Add some styles to the ripple

    [angular-ripple] {
      position: relative;
      overflow: hidden;
    }
    .angular-ripple {
      display: block;
      position: absolute;
      background-color: rgba(0,0,0,0.1);
      border-radius: 50%;
      transform: scale(0);
    }
    .angular-ripple.animate {
      animation: ripple 0.35s linear;
    }
    @keyframes ripple {
      100% {
        opacity: 0;
        transform: scale(2.5);
      }
    }


# License
The MIT License

Copyright (c) 2014 Nelson Cash http://www.nelsoncash.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Contributors

* Mike McMillan ([@MikeMcChillin](http://twitter.com/mikemcchillin))

# Credits

Big props to [this demo](http://codepen.io/fronterweb/pen/jcwgx)<br />
Built by [Nelson Cash](http://nelsoncash.com).<br />
We're hiring in Chicago. Hit us up.