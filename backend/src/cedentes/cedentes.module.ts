import { Module } from '@nestjs/common';
import { CedentesService } from './cedentes.service';
import { CedentesController } from './cedentes.controller';

@Module({
  controllers: [CedentesController],
  providers: [CedentesService],
})
export class CedentesModule {}
