import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class LmsService {
  async createLmsUser() {
    const LmsApiUrl = 'https://maxbeauty.learnworlds.com/admin/api/users';
    const accessToken = 'ywkODns3BvE3538WAmUEW5tH0lxeNIMN3H50sIQb';
    const clientId = '65d8a994f99de245150c5623';

    const data = [
      'email:test2602_1@gmail.com',
      'username:Test 2602',
      'password:100500sad',
      'is_admin: false',
    ];

    try {
      const response = await axios.post(LmsApiUrl, data, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
          'lw-client': clientId,
        },
      });

      return response.data;
    } catch (error) {
      throw new Error(`Failed to make POST request: ${error.message}`);
    }
  }
}
