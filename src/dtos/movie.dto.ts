import { IsNotEmpty } from '@nestjs/class-validator';

export class movieDto {
  
  @IsNotEmpty()
  readonly name: string;
  
  @IsNotEmpty()
  readonly rating: number;

  @IsNotEmpty()
  readonly language: number;
}