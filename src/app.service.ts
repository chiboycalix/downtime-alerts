import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AppService {
  async getAPIStatus(): Promise<{ status: 'ok' | 'fail' }> {
    try {
      const res = await axios.get(process.env.API_URL);
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
