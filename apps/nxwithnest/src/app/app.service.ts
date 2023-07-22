import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
  calculate_Add(firstNumber: number, secondNumber: number): number {
    return firstNumber + secondNumber;
  }
}
