import { IsNotEmpty } from '@nestjs/class-validator';

export class filterDto {
  
  @IsNotEmpty()
  readonly page: number;
  
  @IsNotEmpty()
  readonly size: number;

}