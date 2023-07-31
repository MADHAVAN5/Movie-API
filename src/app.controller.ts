import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { movieDto } from './dtos/movie.dto';
import { filterDto } from './dtos/filter.dto';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('get-all')
  getAll() {
    return this.appService.getAll();
  }

  @Get('get-single/:id')
  getMovie(@Param('id') id: number) {
    return this.appService.getMovie(id);
  }

  @Get('get-paginated')
  getPaginated(@Body() filterDto: filterDto) {
    return this.appService.getPaginated(filterDto);
  }

  @Post('add-movie')
  addMovie(@Body() movieDto: movieDto) {
    return this.appService.addMovie(movieDto);
  }
}
