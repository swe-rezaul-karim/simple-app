const greet = require('./index');
test('returns greeting', () => {
  expect(greet('World')).toBe('Hello, World!');
});
