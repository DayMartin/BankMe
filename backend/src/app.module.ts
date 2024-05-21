import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecebiveisModule } from './recebiveis/recebiveis.module';
import { CedentesModule } from './cedentes/cedentes.module';
import { IntegracaoModule } from './integracao/integracao.module';

@Module({
  imports: [RecebiveisModule, CedentesModule, IntegracaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
