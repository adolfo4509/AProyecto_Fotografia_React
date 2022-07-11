const sum = require('./sum');

test('Hola este es mi primer test', () => {
  expect(sum(1, 2)).toEqual(3);
});