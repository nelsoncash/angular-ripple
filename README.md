angular-ripple
==============

![Click Gif](https://raw.githubusercontent.com/nelsoncash/angular-ripple/gh-pages/click.gif)

A pure javascript (no polymer, no jQuery) AngularJS directive that adds a Google Material Design ripple effect when clicked or touched.

[Angular Material](https://material.angularjs.org/) is cool, but sometimes you just want the ripple effect in your angular app without all the bloat. That’s why we made this.

Ain't nobody f*ckin' with my [Clique](https://www.youtube.com/watch?v=FOrLNHbEzMg)

# Demo

Here's a <a href="http://nelsoncash.github.io/angular-ripple">demo</a>

# Bower

  ```bash
  bower install --save angular-ripple
  ```


# Usage

Include the script in your HTML

  ```html
  <script type="text/javascript" src="bower_components/angular-ripple/angular-ripple.js"></script>
  ```

Then include `angularRipple` in your module dependencies

  ```js
  angular.module('yourApp', ['angularRipple']);
  ```

Then add the `angular-ripple` attribute to elements

  ```html
  <button angular-ripple>Ripple!</button>
  ```

Add some styles to the ripple (remember to include browser specific prefixes)

  ```css
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
  ```

# License
The MIT License

Copyright (c) 2014 Nelson Cash http://www.nelsoncash.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

# Contributors

- Mike McMillan ([@MikeMcChillin](http://twitter.com/mikemcchillin))
- Matthew Frey ([mmmeff](https://github.com/mmmeff))

# Changelog
## 0.0.5 - 06/26/2015
- Merged in @mmmeff's [commit](https://github.com/mmmeff/angular-ripple/commit/5173af8e84302e56223edab492973aba3d0855d7) to fix degredation and event handling 

## 0.0.4 - 05/28/2015
- Added scope.$on('$destroy')

## 0.0.3 - 03/21/2015
### Fixed
- Changed ripple position calculation to work with scrolling divs, using [this method](http://stackoverflow.com/a/28857255). Closes out [GH issue #1](https://github.com/nelsoncash/angular-ripple/issues/1). 

## 0.0.2 - 02/14/2015
### Fixed
- Changed ripple position calculation from getClientBoundingRect() to getPos() to be much more accurate.

## 0.0.1 - 02/14/2015
### Added
- This changelog

### Fixed
- Ripple position calculation, based on antoinepairet's [fork](https://github.com/b12consulting/angular-ripple)
- Added moz & webkit prefixes to demo page's CSS.



# Credits

Big props to [this demo](http://codepen.io/fronterweb/pen/jcwgx)<br />
Built by [Nelson Cash](http://nelsoncash.com).<br />
We're hiring in Chicago. Hit us up.