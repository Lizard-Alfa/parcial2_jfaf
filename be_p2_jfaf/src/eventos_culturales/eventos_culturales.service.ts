import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventoCulturalDto } from './dto/create-evento_cultural.dto';
import { UpdateEventoCulturalDto } from './dto/update-evento_cultural.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EventoCultural } from './entities/evento_cultural.entity';
import { Repository } from 'typeorm';

@Injectable()
export class EventosCulturalesService {
  constructor(
    @InjectRepository(EventoCultural)
    private readonly eventosRepository: Repository<EventoCultural>,
  ) {}

  async create(createEventoDto: CreateEventoCulturalDto): Promise<EventoCultural> {
    let evento = await this.eventosRepository.findOne({
      where: {
        titulo: createEventoDto.titulo,
        recinto: { id: createEventoDto.idRecinto },
      },
      relations: { recinto: true },
    });
    if (evento) throw new ConflictException('El evento ya existe en ese recinto');

    evento = new EventoCultural();
    Object.assign(evento, createEventoDto);
    return this.eventosRepository.save(evento);
  }

  async findAll(): Promise<EventoCultural[]> {
    return this.eventosRepository.find({
      relations: { recinto: true },
      order: { fechaEvento: 'ASC' },
    });
  }

  async findByRecinto(idRecinto: number): Promise<EventoCultural[]> {
    return this.eventosRepository.find({
      where: { recinto: { id: idRecinto } },
      relations: { recinto: true },
      order: { fechaEvento: 'ASC' },
    });
  }

  async findOne(id: number): Promise<EventoCultural> {
    const evento = await this.eventosRepository.findOne({
      where: { id },
      relations: { recinto: true },
    });
    if (!evento) throw new NotFoundException('El evento cultural no existe');
    return evento;
  }

  async update(id: number, updateEventoDto: UpdateEventoCulturalDto): Promise<EventoCultural> {
    const evento = await this.findOne(id);
    Object.assign(evento, updateEventoDto);
    return this.eventosRepository.save(evento);
  }

  async remove(id: number): Promise<EventoCultural> {
    const evento = await this.findOne(id);
    return this.eventosRepository.softRemove(evento);
  }
}
