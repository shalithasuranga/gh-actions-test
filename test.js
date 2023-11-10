const assert = require('assert');
const { add } =  require('./calc');

console.log('Test #1');
assert.equal(add(10, 5), 15);
