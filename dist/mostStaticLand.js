(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('most')) :
	typeof define === 'function' && define.amd ? define(['most'], factory) :
	(global['mostStaticLand'] = factory(global.most));
}(this, (function (most) { 'use strict';

/** @license MIT License (c) copyright 2016 Roman Pominov */

var index = {empty: most.empty, concat: most.concat, map: most.map, of: most.of, ap: most.ap, chain: most.chain}

return index;

})));