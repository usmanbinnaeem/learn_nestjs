/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Cat } from 'src/interfaces/cat.interface';
import { CreateCatDto } from './dto/create-cat.dto';
import { UpdateCatDto } from './dto/update-cat.dto';

@Injectable()
export class CatsService {
  private readonly cats: Cat[] = []

  create(cat: Cat) {
    this.cats.push(cat)
  }

  findAll(): Cat[] {
    return this.cats;
  }
}

