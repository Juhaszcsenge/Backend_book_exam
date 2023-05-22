import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Rental {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  book_id: number;
  @Column()
  start_date: string;
  @Column()
  end_date: string;
}
