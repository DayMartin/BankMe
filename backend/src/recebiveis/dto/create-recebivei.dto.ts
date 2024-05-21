import { IsNotEmpty, IsUUID, IsNumber, IsDateString } from 'class-validator';

export class CreateRecebiveiDto {
  @IsUUID()
  @IsNotEmpty()
  id: string;

  @IsNumber()
  @IsNotEmpty()
  value: number;

  @IsDateString()
  @IsNotEmpty()
  emissionDate: string;

  @IsUUID()
  @IsNotEmpty()
  assignor: string;
}
