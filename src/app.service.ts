import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  serverRunning() {
    return 'Hi: Server is running';
  }
}
