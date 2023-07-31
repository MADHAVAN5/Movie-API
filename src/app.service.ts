import { Inject, Injectable } from '@nestjs/common';
import { Db } from 'mongodb';
import { movieDto } from './dtos/movie.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
) {}


  getHello(): string {
    return 'Hello World!';
  }

  async addMovie(body: movieDto) {
    var response = await this.db.collection('movie').insertOne(body);
    return response;
  }  
}
