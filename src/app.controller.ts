import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return { name: 'matheus', app_service_name: process.env.APP_SERVICE_NAME };
  }
}
