import { Test, TestingModule } from '@nestjs/testing';
import { CedentesController } from './cedentes.controller';
import { CedentesService } from './cedentes.service';

describe('CedentesController', () => {
  let controller: CedentesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CedentesController],
      providers: [CedentesService],
    }).compile();

    controller = module.get<CedentesController>(CedentesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
