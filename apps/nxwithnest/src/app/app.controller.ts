import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

@Get('/getdata')
  getData() {
    return this.appService.getData();
  }

  @Post('/add-two-numbers')
  getAdd(@Body() body: CreateNumberDto):number {
    return this.appService.calculate_Add(body.firstNumber, body.secondNumber);
  }
}
