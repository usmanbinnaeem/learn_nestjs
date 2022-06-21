/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';

@Module({
  controllers: [CatsController],
})
export class AppModule { }
