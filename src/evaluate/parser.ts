export function tokenize(expression: string): (string | number)[] {
  const tokens: (string | number)[] = [];
  let currentNumber: string = '';

  for (let i: number = 0; i < expression.length; i++) {
    const char: string = expression[i];

    if (/\d/.test(char) || char === '.') {
      currentNumber += char;
    } else if (char === '-') {
      if (
        currentNumber === '' &&
        (tokens.length === 0 || tokens[tokens.length - 1] === '(') &&
        expression[i + 1] !== '('
      ) {
        currentNumber = '-';
      } else {
        if (currentNumber !== '') {
          tokens.push(parseFloat(currentNumber));
          currentNumber = '';
        }
        tokens.push(char);
      }
    } else if ('+*/()'.includes(char)) {
      if (currentNumber !== '') {
        tokens.push(parseFloat(currentNumber));
        currentNumber = '';
      }
      tokens.push(char);
    }
  }

  if (currentNumber !== '') {
    tokens.push(parseFloat(currentNumber));
  }

  return tokens;
}
