import { IsNumber, IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  title: string;
  author: string;
  @IsNumber()
  publish_year: number;
  page_count: number;
}
