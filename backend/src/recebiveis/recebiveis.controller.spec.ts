import { Test, TestingModule } from '@nestjs/testing';
import { RecebiveisController } from './recebiveis.controller';
import { RecebiveisService } from './recebiveis.service';

describe('RecebiveisController', () => {
  let controller: RecebiveisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RecebiveisController],
      providers: [RecebiveisService],
    }).compile();

    controller = module.get<RecebiveisController>(RecebiveisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
