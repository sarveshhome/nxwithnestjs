import { IsInt,MinLength,MaxLength, Max, Min  } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateNumberDto {
    @ApiProperty({ example: 1, description: 'The first number' })
    @IsInt()
    @Max(1000, {message: 'Number is too long'})
    @Min(0)
    firstNumber: number;

    @ApiProperty({ example: 2, description: 'The second number' })
    @IsInt() 
    // @MaxLength(1000, {message: 'Number is too long'})
    // @MinLength(0, {message: 'Number is too short'})
    secondNumber: number;
}
/// create models student

export class CreateStudentDto {
    @ApiProperty({ example: 'John', description: 'The name of the student' })
    @MinLength(3, {
        message: 'Name is too short',
      })
    @MaxLength(20, {
        message: 'Name is too long',
      })
    name: string;

    @ApiProperty({ example: 'Doe', description: 'The last name of the student' })
    @MinLength(3, {
        message: 'Last name is too short',
      })
    @MaxLength(20, {
        message: 'Last name is too long',
      })
    lastName: string;

    @ApiProperty({ example: 'XXXXXXXXXXXX', description: 'The email of the student' })
    @MinLength(3, {
        message: 'Email is too short',
      })
    @MaxLength(20, {
        message: 'Email is too long',
      })
    email: string;
}