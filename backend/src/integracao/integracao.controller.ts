import { Controller, Post, Body, BadRequestException } from '@nestjs/common';
import { IntegracaoService } from './integracao.service';
import { CreateIntegracaoDto } from './dto/create-integracao.dto';

@Controller('integracao')
export class IntegracaoController {
  constructor(private readonly integracaoService: IntegracaoService) {}

  @Post('payable')
  async createPayable(@Body() createIntegracaoDto: CreateIntegracaoDto) {
    const { recebivel, cedente } = createIntegracaoDto;

    const errors = await this.integracaoService.validateData(
      recebivel,
      cedente,
    );
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    await this.integracaoService.createPayable(recebivel, cedente);
    return { recebivel, cedente };
  }
}
