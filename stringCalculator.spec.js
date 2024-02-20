const add = require('./stringCalculator');

describe('add', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

});