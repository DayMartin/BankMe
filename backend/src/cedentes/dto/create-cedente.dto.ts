import {
  IsNotEmpty,
  IsUUID,
  IsEmail,
  IsString,
  MaxLength,
} from 'class-validator';

export class CreateCedenteDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  document: string;

  @IsEmail()
  @MaxLength(140)
  @IsNotEmpty()
  email: string;

  @IsString()
  @MaxLength(20)
  @IsNotEmpty()
  phone: string;

  @IsString()
  @MaxLength(140)
  @IsNotEmpty()
  name: string;
}
