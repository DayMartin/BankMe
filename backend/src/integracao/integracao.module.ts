import { Module } from '@nestjs/common';
import { IntegracaoService } from './integracao.service';
import { IntegracaoController } from './integracao.controller';

@Module({
  controllers: [IntegracaoController],
  providers: [IntegracaoService],
})
export class IntegracaoModule {}
