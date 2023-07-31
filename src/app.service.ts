import { Inject, Injectable } from '@nestjs/common';
import { Db, ObjectId } from 'mongodb';
import { movieDto } from './dtos/movie.dto';
import { filterDto } from './dtos/filter.dto';

@Injectable()
export class AppService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private db: Db,
  ) { }


  async getAll() {
    var response = await this.db.collection('movie').find({}).toArray();
    return response;
  }

  async addMovie(body: movieDto) {
    var response = await this.db.collection('movie').insertOne(body);
    return response;
  }

  async getMovie(id) {
    var response = await this.db.collection('movie').findOne({ _id: new ObjectId(id) });
    return response;
  }

  async getPaginated(body: filterDto) {
    const perPage = body.size;
    const page = body.page-1;
    var response = await this.db.collection('movie').find({}).skip(perPage * page).limit(perPage).toArray();
    return response;
  }
}
