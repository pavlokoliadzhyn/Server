import { Controller, Get } from '@nestjs/common';
import { LmsService } from './lms.service';

@Controller('lms')
export class LmsController {
  constructor(private readonly lmsService: LmsService) {}

  @Get()
  async createUser() {
    try {
      const result = await this.lmsService.createLmsUser();
      return { success: true, result };
    } catch (error) {
      return { success: false, error: error.message };
    }
  }
}
