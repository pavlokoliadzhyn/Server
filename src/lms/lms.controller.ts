import { Body, Controller, Post } from '@nestjs/common';
import { LmsService } from './lms.service';

interface createUserRequest {
  email: string;
  password: string;
  username: string;
}

@Controller('lms')
export class LmsController {
  constructor(private readonly lmsService: LmsService) {}

  @Post()
  async createUser(@Body() body: createUserRequest): Promise<any> {
    try {
      const result = await Promise.all([this.lmsService.createLmsUser(body)]);
      return { success: true, result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
