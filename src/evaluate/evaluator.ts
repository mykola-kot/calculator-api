const precedence: { [key: string]: number } = {
  '+': 1,
  '-': 1,
  '*': 2,
  '/': 2,
};

export function evaluateExpression(tokens: (string | number)[]): number {
  const values: number[] = [];
  const operators: string[] = [];

  function applyOperator(operators: string[], values: number[]) {
    const operator: string = operators.pop();
    const right: number = values.pop();
    const left: number = values.pop();

    switch (operator) {
      case '+':
        if (!left || !right) {
          values.push(left ? left : right);
        } else {
          values.push(left + right);
        }
        break;
      case '-':
        if (!left || !right) {
          values.push(left ? -left : -right);
        } else {
          values.push(left - right);
        }
        break;
      case '*':
        values.push(left * right);
        break;
      case '/':
        values.push(left / right);
        break;
    }
  }

  let i: number = 0;

  while (i < tokens.length) {
    const token: string | number = tokens[i];

    if (typeof token === 'number') {
      values.push(token);
    }

    if (token === '(') {
      operators.push(token as string);
    }

    if (token === ')') {
      while (operators.length && operators[operators.length - 1] !== '(') {
        applyOperator(operators, values);
      }
      operators.pop();
    }

    if ('+-*/'.includes(token as string)) {
      while (
        operators.length &&
        precedence[operators[operators.length - 1]] >=
          precedence[token as string]
      ) {
        applyOperator(operators, values);
      }
      operators.push(token as string);
    }

    i++;
  }

  while (operators.length) {
    applyOperator(operators, values);
  }

  return values?.[0] || 0;
}
