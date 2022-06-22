/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CatsModule } from './modules/cats/cats.module';
@Module({
  imports: [CatsModule],
})
export class AppModule { }
