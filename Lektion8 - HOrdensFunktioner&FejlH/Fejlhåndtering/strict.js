// strict.js
'use strict';

function f() { x = 1; }
f(); // => ReferenceError: x is not defined

function g(x) { this.x = x; }
g(); // => TypeError: Cannot set property 'x' of undefined