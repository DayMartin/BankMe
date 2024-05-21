import { Module } from '@nestjs/common';
import { RecebiveisService } from './recebiveis.service';
import { RecebiveisController } from './recebiveis.controller';

@Module({
  controllers: [RecebiveisController],
  providers: [RecebiveisService],
})
export class RecebiveisModule {}
