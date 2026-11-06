import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Recinto } from '../../recintos/entities/recinto.entity';

@Entity('eventos_culturales')
export class EventoCultural {
  @PrimaryGeneratedColumn('identity')
  id: number;

  @Column('integer', { name: 'id_recinto' })
  idRecinto: number;

  @Column('varchar', { length: 150 })
  titulo: string;

  @Column('varchar', { length: 100, name: 'artista_principal' })
  artistaPrincipal: string;

  @Column('integer', { name: 'duracion_minutos' })
  duracionMinutos: number;

  @Column('decimal', { name: 'precio_entrada', precision: 10, scale: 2 })
  precioEntrada: number;

  @Column('date', { name: 'fecha_evento' })
  fechaEvento: Date;

  @Column('varchar', { length: 30, name: 'categoria_evento', default: 'Concierto' })
  categoriaEvento: string;

  @Column('varchar', { length: 20, default: 'Programado' })
  estado: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fechaCreacion: Date;

  @UpdateDateColumn({ name: 'fecha_modificacion' })
  fechaModificacion: Date;

  @DeleteDateColumn({ name: 'fecha_eliminacion' })
  fechaEliminacion: Date;

  @ManyToOne(() => Recinto, recinto => recinto.eventos)
  @JoinColumn({ name: 'id_recinto', referencedColumnName: 'id' })
  recinto: Recinto;
}
