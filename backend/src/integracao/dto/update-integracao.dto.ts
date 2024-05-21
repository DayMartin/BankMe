import { PartialType } from '@nestjs/mapped-types';
import { CreateIntegracaoDto } from './create-integracao.dto';

export class UpdateIntegracaoDto extends PartialType(CreateIntegracaoDto) {}
