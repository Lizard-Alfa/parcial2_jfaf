import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EventosCulturalesService } from './eventos_culturales.service';
import { CreateEventoCulturalDto } from './dto/create-evento_cultural.dto';
import { UpdateEventoCulturalDto } from './dto/update-evento_cultural.dto';

@Controller('eventos-culturales')
export class EventosCulturalesController {
  constructor(private readonly eventosService: EventosCulturalesService) {}

  @Post()
  create(@Body() createEventoCulturalDto: CreateEventoCulturalDto) {
    return this.eventosService.create(createEventoCulturalDto);
  }

  @Get()
  findAll() {
    return this.eventosService.findAll();
  }

  @Get('recinto/:id')
  findByRecinto(@Param('id') id: string) {
    return this.eventosService.findByRecinto(+id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventoCulturalDto: UpdateEventoCulturalDto) {
    return this.eventosService.update(+id, updateEventoCulturalDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventosService.remove(+id);
  }
}
