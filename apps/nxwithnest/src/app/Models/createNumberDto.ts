import { IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateNumberDto {
    @ApiProperty({ example: 1, description: 'The first number' })
    @IsNumber()
    firstNumber: number;

    @ApiProperty({ example: 2, description: 'The second number' })
    @IsNumber()
    secondNumber: number;
}
