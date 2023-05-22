import { Module } from '@nestjs/common';
import { BookService } from './book.service';
import { BookController } from './book.controller';
import { AppService } from '../app.service';

@Module({
  controllers: [BookController],
  providers: [BookService, AppService]

})
export class BookModule {}
