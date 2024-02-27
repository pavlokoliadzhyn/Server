import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { LmsController } from './lms.controller';
import { LmsService } from './lms.service';

@Module({
  imports: [HttpModule],
  controllers: [LmsController],
  providers: [LmsService],
})
export class LmsModule {}
