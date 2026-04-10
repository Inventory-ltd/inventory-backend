import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

interface HealthResponse {
  status: string;
  port?: string;
  environment?: string|null;
}

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('health')
  getHealth(): HealthResponse {
    return {
      status: 'ok',
      port: process.env.PORT ?? 'no port found',
      environment: process.env.NODE_ENV ?? process.env.ENVIRONMENT  ?? 'no env file found',
    }
  }
}
