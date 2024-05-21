import { PartialType } from '@nestjs/mapped-types';
import { CreateRecebiveiDto } from './create-recebivei.dto';

export class UpdateRecebiveiDto extends PartialType(CreateRecebiveiDto) {}
