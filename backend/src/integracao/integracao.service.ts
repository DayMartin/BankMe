import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { validate } from 'class-validator';
import { CreateCedenteDto } from 'src/cedentes/dto/create-cedente.dto';
import { CreateRecebiveiDto } from 'src/recebiveis/dto/create-recebivei.dto';

@Injectable()
export class IntegracaoService {
  private prisma = new PrismaClient();
  async validateData(
    createRecebiveiDto: CreateRecebiveiDto,
    createCedenteDto: CreateCedenteDto,
  ) {
    const payableErrors = await validate(createRecebiveiDto);
    const assignorErrors = await validate(createCedenteDto);

    return [...payableErrors, ...assignorErrors];
  }

  async createPayable(
    createRecebiveiDto: CreateRecebiveiDto,
    createCedenteDto: CreateCedenteDto,
  ) {
    await this.prisma.assignor.upsert({
      where: { id: createCedenteDto.id },
      update: { ...createCedenteDto },
      create: { ...createCedenteDto },
    });

    return this.prisma.payable.create({
      data: {
        ...createRecebiveiDto,
        assignor: {
          connect: { id: createCedenteDto.id },
        },
      },
    });
  }
}
