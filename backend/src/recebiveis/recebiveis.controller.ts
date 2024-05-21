import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecebiveisService } from './recebiveis.service';
import { CreateRecebiveiDto } from './dto/create-recebivei.dto';
import { UpdateRecebiveiDto } from './dto/update-recebivei.dto';

@Controller('recebiveis')
export class RecebiveisController {
  constructor(private readonly recebiveisService: RecebiveisService) {}

  @Post()
  create(@Body() createRecebiveiDto: CreateRecebiveiDto) {
    return this.recebiveisService.create(createRecebiveiDto);
  }

  @Get()
  findAll() {
    return this.recebiveisService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recebiveisService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRecebiveiDto: UpdateRecebiveiDto) {
    return this.recebiveisService.update(+id, updateRecebiveiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recebiveisService.remove(+id);
  }
}
