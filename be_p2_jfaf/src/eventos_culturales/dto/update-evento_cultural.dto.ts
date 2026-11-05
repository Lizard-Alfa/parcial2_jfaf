import { PartialType } from '@nestjs/mapped-types';
import { CreateEventoCulturalDto } from './create-evento_cultural.dto';

export class UpdateEventoCulturalDto extends PartialType(CreateEventoCulturalDto) {}
