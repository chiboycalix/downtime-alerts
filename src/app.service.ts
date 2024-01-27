import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getAPIStatus(): Promise<any> {
    try {
      const res = await axios.get(`http://localhost:2000/api/v1/healthcheck`);
      if (res.data.status === 'ok') {
        return { status: 'ok' };
      }
    } catch (error) {
      return {
        status: 'fail',
      };
    }
  }
}
