'use strict';

var _calcTest = require('./calcTest.js');

var ct = _interopRequireWildcard(_calcTest);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

console.log(ct.add(2, 3));
console.log(ct.mul(2, 3));