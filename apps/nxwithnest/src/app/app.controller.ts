import {
  Body,
  Controller,
  Get,
  Post,
  Header,
  Res,
  Response,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { AppService } from './app.service';
import { CreateNumberDto } from './Models/createNumberDto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('App')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getdata')
  getData() {
    return this.appService.getData();
  }

  @Post('/add-two-numbers')
  @Header('Content-Type', 'application/json')
  @ApiOperation({ summary: 'Get Add' })
  @ApiResponse({ status: HttpStatus.OK, description: 'result' })
  @HttpCode(204)
  getAdd(@Body() body: CreateNumberDto): number {
    return this.appService.calculate_Add(body.firstNumber, body.secondNumber);
  }
}
