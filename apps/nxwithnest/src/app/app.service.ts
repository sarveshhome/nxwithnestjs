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

  calculate_Subtract(firstNumber: number, secondNumber: number): number {
    return Number(firstNumber) - Number(secondNumber);
  }
}
