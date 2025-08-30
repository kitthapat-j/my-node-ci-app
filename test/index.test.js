// src/index.test.js
const add = require('../src/index.js'); // ต้องแน่ใจว่า path ถูกต้อง

test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});