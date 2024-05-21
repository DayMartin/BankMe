import { Test, TestingModule } from '@nestjs/testing';
import { RecebiveisService } from './recebiveis.service';

describe('RecebiveisService', () => {
  let service: RecebiveisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RecebiveisService],
    }).compile();

    service = module.get<RecebiveisService>(RecebiveisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
