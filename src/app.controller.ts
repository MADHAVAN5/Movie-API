import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { movieDto } from './dtos/movie.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-all')
  getAll() {
    return this.appService.getAll();
  }

  @Post('/add-movie')
  addMovie(@Body() movieDto: movieDto) {
    return this.appService.addMovie(movieDto);
  }
}
