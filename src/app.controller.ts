import { Controller } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  getAPIStatus(): Promise<any> {
    return this.appService.getAPIStatus();
  }
  onModuleInit() {
    setInterval(() => {
      this.getAPIStatus().then((calix) => {
        console.log(calix);
      });
    }, 2000);
  }
}
