const add = require('./stringCalculator');

describe('add', () => {
  it('should return 0 for an empty string', () => {
    expect(add("")).toBe(0);
  });

  it('should return the number for a single number string', () => {
    expect(add("1")).toBe(1);
  });

  it('should return the sum of two numbers given as comma separated string', () => {
    expect(add("1,5")).toBe(6);
  });

  it('should return the sum of three numbers given as comma separated string', () => {
    expect(add("1,5,7")).toBe(13);
  });

  it('should return the sum of any numbers given as comma separated string', () => {
    expect(add("1,5,7,9")).toBe(22);
  });

});