import { Test, TestingModule } from '@nestjs/testing';
import { IntegracaoController } from './integracao.controller';
import { IntegracaoService } from './integracao.service';

describe('IntegracaoController', () => {
  let controller: IntegracaoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [IntegracaoController],
      providers: [IntegracaoService],
    }).compile();

    controller = module.get<IntegracaoController>(IntegracaoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
