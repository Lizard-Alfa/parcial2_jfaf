import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import {
  IsDateString,
  IsDefined,
  IsIn,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
} from 'class-validator';

export class CreateEventoCulturalDto {
  @ApiProperty()
  @IsDefined({ message: 'El id del recinto es obligatorio' })
  @IsInt({ message: 'El id del recinto debe ser tipo numérico' })
  readonly id_recinto: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El título es obligatorio' })
  @IsString({ message: 'El título debe ser de tipo cadena' })
  @MaxLength(150, { message: 'El título no puede tener más de 150 caracteres' })
  @Transform(({ value }): string | undefined => (typeof value == 'string' ? value.trim() : value))
  readonly titulo: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'El artista principal es obligatorio' })
  @IsString({ message: 'El artista principal debe ser de tipo cadena' })
  @MaxLength(100, {
    message: 'El artista principal no puede tener más de 100 caracteres',
  })
  @Transform(({ value }): string | undefined => (typeof value == 'string' ? value.trim() : value))
  readonly artista_principal: string;

  @ApiProperty()
  @IsNotEmpty({ message: 'La duración en minutos es obligatoria' })
  @IsInt({ message: 'La duración debe ser de tipo numérico entero' })
  @Min(1, { message: 'La duración debe ser mayor a 0 minutos' })
  readonly duracion_minutos: number;

  @ApiProperty()
  @IsNotEmpty({ message: 'El precio de entrada es obligatorio' })
  @IsNumber(
    { maxDecimalPlaces: 2 },
    { message: 'El precio debe ser un número decimal con máximo 2 decimales' },
  )
  @Min(0, { message: 'El precio no puede ser negativo' })
  readonly precio_entrada: number;

  @ApiProperty()
  @IsDefined({ message: 'La fecha del evento es obligatoria' })
  @IsDateString({}, { message: 'La fecha del evento debe ser de tipo fecha (YYYY-MM-DD)' })
  readonly fecha_evento: Date;

  @ApiProperty({
    description: 'Estado del evento',
    enum: ['Programado', 'Agotado', 'Cancelado'],
    default: 'Programado',
  })
  @IsNotEmpty({ message: 'El estado es obligatorio' })
  @IsString({ message: 'El estado debe ser de tipo cadena' })
  @IsIn(['Programado', 'Agotado', 'Cancelado'], {
    message: 'El estado debe ser uno de los siguientes valores: Programado, Agotado, Cancelado',
  })
  readonly estado: string;
}
