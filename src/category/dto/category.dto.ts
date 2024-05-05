import { IsString, Length } from 'class-validator';

export class CreateCategoryDto {
  @Length(3, 32)
  @IsString()
  name: string;
}
