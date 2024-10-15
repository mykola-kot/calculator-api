import { evaluateExpression } from './evaluator';
import { tokenize } from './parser';

describe('evaluateExpression', () => {
  it('should evaluate simple addition', () => {
    const tokens: (string | number)[] = tokenize('1+2');
    const result: number = evaluateExpression(tokens);
    expect(result).toBe(3);
  });

  it('should evaluate simple subtraction', () => {
    const tokens: (string | number)[] = tokenize('5-3');
    const result: number = evaluateExpression(tokens);
    expect(result).toBe(2);
  });

  it('should evaluate simple multiplication', () => {
    const tokens: (string | number)[] = tokenize('3*4');
    const result: number = evaluateExpression(tokens);
    expect(result).toBe(12);
  });

  it('should evaluate simple division', () => {
    const tokens: (string | number)[] = tokenize('8/2');
    const result: number = evaluateExpression(tokens);
    expect(result).toBe(4);
  });

  it('should respect operator precedence (multiplication before addition)', () => {
    const tokens: (string | number)[] = tokenize('2+3*4');
    const result: number = evaluateExpression(tokens);
    expect(result).toBe(14);
  });

  it('should handle parentheses correctly', () => {
    const tokens: (string | number)[] = tokenize('(1+2)*3');
    const result: number = evaluateExpression(tokens);
    expect(result).toBe(9);
  });

  it('should handle nested parentheses', () => {
    const tokens: (string | number)[] = tokenize('((2+3)*2)+1');
    const result: number = evaluateExpression(tokens);
    expect(result).toBe(11);
  });

  it('should handle negative numbers', () => {
    const tokens: (string | number)[] = tokenize('-3+2');
    const result: number = evaluateExpression(tokens);
    expect(result).toBe(-1);
  });

  it('should handle division by zero', () => {
    const tokens: (string | number)[] = tokenize('10/0');
    const result: number = evaluateExpression(tokens);
    expect(result).toBe(Infinity);
  });

  it('should return 0 if the expression is empty', () => {
    const tokens: (string | number)[] = [];
    const result: number = evaluateExpression(tokens);
    expect(result).toBe(0);
  });

  it('should handle multiple operators of the same precedence', () => {
    const tokens: (string | number)[] = tokenize('2+3-1');
    const result: number = evaluateExpression(tokens);
    expect(result).toBe(4);
  });

  it('should handle numbers with multiple negative signs', () => {
    const tokens: (string | number)[] = tokenize('-(-5+4)-(-5+3)');
    const result: number = evaluateExpression(tokens);
    expect(result).toBe(3);
  });

  it('should evaluate a nested positive expression', () => {
    const tokens: (string | number)[] = tokenize('+(+5+4)+(+5+3)');
    const result: number = evaluateExpression(tokens);
    expect(result).toBe(17);
  });
});
