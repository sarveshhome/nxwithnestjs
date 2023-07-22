import { IsInt,MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateNumberDto {
    @ApiProperty({ example: 1, description: 'The first number' })
    @IsInt()
    @MinLength(1, {
        message: 'Number is too short',
      })
    firstNumber: number;

    @ApiProperty({ example: 2, description: 'The second number' })
    @IsInt()
    @MinLength(1, {
        message: 'Number is too short',
      })
    secondNumber: number;
}
