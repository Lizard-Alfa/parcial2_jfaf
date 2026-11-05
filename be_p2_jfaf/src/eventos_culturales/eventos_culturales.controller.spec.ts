import { Test, TestingModule } from '@nestjs/testing';
import { EventosCulturalesController } from './eventos_culturales.controller';
import { EventosCulturalesService } from './eventos_culturales.service';

describe('EventosCulturalesController', () => {
  let controller: EventosCulturalesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EventosCulturalesController],
      providers: [EventosCulturalesService],
    }).compile();

    controller = module.get<EventosCulturalesController>(EventosCulturalesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
