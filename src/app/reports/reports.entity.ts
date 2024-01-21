import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Report {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  model: string;

  @Column()
  price: number;

  @Column()
  make: string;

  @Column()
  year: number;

  @Column()
  mileage: string;

  @Column()
  longitude: number;

  @Column()
  latitude: number;
}
