import { parentPort, workerData } from 'worker_threads';
import { tokenize } from './parser';
import { evaluateExpression } from './evaluator';

const tokens: (string | number)[] = tokenize(workerData.expression);
const result: number = evaluateExpression(tokens);

parentPort.postMessage(result);
