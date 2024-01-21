import { Controller, Get } from '@nestjs/common';

@Controller('reports')
export class ReportsController {
  @Get()
  getMessage() {
    return 'Hi Today';
  }
}
