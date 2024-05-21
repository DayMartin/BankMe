import { Injectable } from '@nestjs/common';
import { CreateRecebiveiDto } from './dto/create-recebivei.dto';
import { UpdateRecebiveiDto } from './dto/update-recebivei.dto';

@Injectable()
export class RecebiveisService {
  create(createRecebiveiDto: CreateRecebiveiDto) {
    return 'This action adds a new recebivei';
  }

  findAll() {
    return `This action returns all recebiveis`;
  }

  findOne(id: number) {
    return `This action returns a #${id} recebivei`;
  }

  update(id: number, updateRecebiveiDto: UpdateRecebiveiDto) {
    return `This action updates a #${id} recebivei`;
  }

  remove(id: number) {
    return `This action removes a #${id} recebivei`;
  }
}
