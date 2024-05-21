import { Injectable } from '@nestjs/common';
import { CreateCedenteDto } from './dto/create-cedente.dto';
import { UpdateCedenteDto } from './dto/update-cedente.dto';

@Injectable()
export class CedentesService {
  create(createCedenteDto: CreateCedenteDto) {
    return 'This action adds a new cedente';
  }

  findAll() {
    return `This action returns all cedentes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cedente`;
  }

  update(id: number, updateCedenteDto: UpdateCedenteDto) {
    return `This action updates a #${id} cedente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cedente`;
  }
}
