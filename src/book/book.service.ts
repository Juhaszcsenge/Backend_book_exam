import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { DataSource } from 'typeorm';
import { Books } from './entities/book.entity';
import { Rental } from '../rentals/entities/rental.entity';

@Injectable()
export class BookService {
  constructor(private dataSource: DataSource) {}
  async create(createBookDto: CreateBookDto) {
    const bookRepo = this.dataSource.getRepository(Books);
    const newBooks = new Books();
    newBooks.author = createBookDto.author;
    newBooks.title = createBookDto.title;
    newBooks.page_count = createBookDto.page_count;
    newBooks.publish_year = createBookDto.publish_year;
    await bookRepo.save(newBooks);
  }
  async findAll() {
    return await this.dataSource.getRepository(Books).find();
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookDto: UpdateBookDto) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
