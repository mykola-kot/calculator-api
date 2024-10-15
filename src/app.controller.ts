import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { EvaluateDto } from './evaluate.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('evaluate')
  async evaluate(@Body() data: EvaluateDto) {
    return this.appService.evaluate(data.expression);
  }
}
