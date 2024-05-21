import { Type } from 'class-transformer';
import { ValidateNested } from 'class-validator';

import { CreateCedenteDto } from 'src/cedentes/dto/create-cedente.dto';
import { CreateRecebiveiDto } from 'src/recebiveis/dto/create-recebivei.dto';

export class CreateIntegracaoDto {
  @ValidateNested()
  @Type(() => CreateRecebiveiDto)
  recebivel: CreateRecebiveiDto;

  @ValidateNested()
  @Type(() => CreateCedenteDto)
  cedente: CreateCedenteDto;
}
