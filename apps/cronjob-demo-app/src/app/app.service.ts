import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class AppService {
 
  //create cronjob method
  @Cron(CronExpression.EVERY_30_SECONDS)
  cron(){
    console.log("cronjob running");
    return "cronjob running";
  }
  async job(){
    console.log("async  job running");
    return "async  job running";
  }
}
