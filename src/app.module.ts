import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RentalsModule } from './rentals/rentals.module';
import { BookModule } from './book/book.module';
import { Books } from './book/entities/book.entity';
import { Rental } from './rentals/entities/rental.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'database',
      entities: [
        Books,
        Rental,
        /* List of entities here */
      ],
      synchronize: true,
    }),
    RentalsModule,
    BookModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
