import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Server InlazeMovies is Running !!! <3';
  }
}