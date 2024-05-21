import { Test, TestingModule } from '@nestjs/testing';
import { CedentesService } from './cedentes.service';

describe('CedentesService', () => {
  let service: CedentesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CedentesService],
    }).compile();

    service = module.get<CedentesService>(CedentesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
