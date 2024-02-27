import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, firstValueFrom } from 'rxjs';
import { AxiosError } from 'axios';

interface userData {
  email: string;
  username: string;
  password: string;
}

@Injectable()
export class LmsService {
  private readonly logger = new Logger(LmsService.name);
  constructor(private readonly httpService: HttpService) {}

  async createLmsUser(userData: userData): Promise<userData> {
    try {
      const headers = {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.LMS_ACCESS_TOKEN}`,
        'lw-client': process.env.LMS_CLIENT_ID,
      };

      const { data } = await firstValueFrom(
        this.httpService
          .post<userData>(process.env.LMS_API_URL, userData, { headers })
          .pipe(
            catchError((error: AxiosError) => {
              this.logger.error(error.response.data);
              throw 'An error happened!';
            }),
          ),
      );
      return data;
    } catch (error) {}
  }
}
