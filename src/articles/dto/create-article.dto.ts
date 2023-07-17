import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @MinLength(5)
  @ApiProperty()
  title: string;

  @ApiProperty({ required: false })
  @IsString()
  @IsOptional()
  @MaxLength(300)
  description?: string;
  
  @ApiProperty()
  @IsString()
  body: string;
  
  @ApiProperty({ required: false })
  @IsBoolean()
  @IsOptional()
  published?: boolean;
}
