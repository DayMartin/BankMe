import { PartialType } from '@nestjs/mapped-types';
import { CreateCedenteDto } from './create-cedente.dto';

export class UpdateCedenteDto extends PartialType(CreateCedenteDto) {}
