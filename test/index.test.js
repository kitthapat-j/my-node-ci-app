const assert = require('chai').assert;
const add = require('../src/index.js');

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    const result = add(1, 2);
    assert.equal(result, 3);
  });
});