import { Injectable } from '@nestjs/common';
import { Worker } from 'worker_threads';
import * as path from 'path';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async evaluate(expression: string): Promise<{ result: number }> {
    try {
      const result: number = await this.evaluateParallel(expression);
      return { result };
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      throw new Error(e.message || 'Invalid expression');
    }
  }

  async evaluateParallel(expression: string): Promise<number> {
    return new Promise((resolve, reject) => {
      const worker = new Worker(
        path.resolve(__dirname, './evaluate/worker.js'),
        {
          workerData: { expression },
        },
      );

      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0) {
          reject(new Error(`Worker stopped with exit code ${code}`));
        }
      });
    });
  }
}
