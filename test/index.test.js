import { assert } from 'chai';
import add from '../src/index.js';

describe('add function', () => {
  it('should return the sum of two numbers', () => {
    const result = add(1, 2);
    assert.equal(result, 3);
  });
});