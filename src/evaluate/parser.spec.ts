import { tokenize } from './parser';

describe('tokenize', () => {
  it('should tokenize a simple addition', () => {
    const tokens: (string | number)[] = tokenize('1 + 2');
    expect(tokens).toEqual([1, '+', 2]);
  });

  it('should tokenize a simple subtraction', () => {
    const tokens: (string | number)[] = tokenize('5 - 3');
    expect(tokens).toEqual([5, '-', 3]);
  });

  it('should tokenize a simple multiplication', () => {
    const tokens: (string | number)[] = tokenize('3 * 4');
    expect(tokens).toEqual([3, '*', 4]);
  });

  it('should tokenize a simple division', () => {
    const tokens: (string | number)[] = tokenize('8 / 2');
    expect(tokens).toEqual([8, '/', 2]);
  });

  it('should handle numbers with decimal points', () => {
    const tokens: (string | number)[] = tokenize('3.14 + 2.71');
    expect(tokens).toEqual([3.14, '+', 2.71]);
  });

  it('should handle negative numbers at the start', () => {
    const tokens: (string | number)[] = tokenize('-5 + 3');
    expect(tokens).toEqual([-5, '+', 3]);
  });

  it('should handle negative numbers in parentheses', () => {
    const tokens: (string | number)[] = tokenize('(-5 + 3) * 2');
    expect(tokens).toEqual(['(', -5, '+', 3, ')', '*', 2]);
  });

  it('should handle expressions with multiple operators', () => {
    const tokens: (string | number)[] = tokenize('2 + 3 * 4 - 5 / 6');
    expect(tokens).toEqual([2, '+', 3, '*', 4, '-', 5, '/', 6]);
  });

  it('should handle expressions with parentheses', () => {
    const tokens: (string | number)[] = tokenize('(1 + 2) * (3 + 4)');
    expect(tokens).toEqual(['(', 1, '+', 2, ')', '*', '(', 3, '+', 4, ')']);
  });

  it('should handle nested parentheses', () => {
    const tokens: (string | number)[] = tokenize('((2 + 3) * 4)');
    expect(tokens).toEqual(['(', '(', 2, '+', 3, ')', '*', 4, ')']);
  });

  it('should handle numbers with multiple negative signs', () => {
    const tokens: (string | number)[] = tokenize('-(-5 + 3)');
    expect(tokens).toEqual(['-', '(', -5, '+', 3, ')']);
  });

  it('should handle empty input', () => {
    const tokens: (string | number)[] = tokenize('');
    expect(tokens).toEqual([]);
  });

  it('should handle mixed whitespace in expression', () => {
    const tokens: (string | number)[] = tokenize('  2  +  3   * 4 ');
    expect(tokens).toEqual([2, '+', 3, '*', 4]);
  });
});
