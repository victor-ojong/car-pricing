import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(private userSerivce: UsersService) {}
  signup(email: string, password: string) {
    const user = this.userSerivce.findByEmail(email);

    if (user) {
      return {
        success: 'fail',
        message: 'Email already in use',
      };
    }
  }

  login(email: string, password: string) {
    //
  }
}
