import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: 'Hello API' };
  }
  calculate_Add(firstNumber: number, secondNumber: number): number {
    console.log(firstNumber, secondNumber);
    return Number(firstNumber) + Number(secondNumber);
  }
}
