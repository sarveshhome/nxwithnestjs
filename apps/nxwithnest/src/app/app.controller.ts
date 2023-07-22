import { Body, Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Get('/add-two-numbers')
  getAdd(@Body() body) {
    return this.appService.calculate_Add(body);
  }
}
