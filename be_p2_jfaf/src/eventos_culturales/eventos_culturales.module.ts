import { Module } from '@nestjs/common';
import { EventoCultural } from './entities/evento_cultural.entity';
import { EventosCulturalesService } from './eventos_culturales.service';
import { EventosCulturalesController } from './eventos_culturales.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EventoCultural])],
  controllers: [EventosCulturalesController],
  providers: [EventosCulturalesService],
})
export class EventosCulturalesModule {}
