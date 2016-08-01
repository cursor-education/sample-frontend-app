var _ = require('underscore');

var items = [1,2,3,4,5];

var x = _.filter(items, function (a) { return a % 2 });

console.log(x);