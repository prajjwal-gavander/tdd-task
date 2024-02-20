const add = require('./stringCalculator');

describe('add', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  it('should return the number for a single number string', () => {
    expect(add("1")).toBe(1);
  });

});