import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CedentesService } from './cedentes.service';
import { CreateCedenteDto } from './dto/create-cedente.dto';
import { UpdateCedenteDto } from './dto/update-cedente.dto';

@Controller('cedentes')
export class CedentesController {
  constructor(private readonly cedentesService: CedentesService) {}

  @Post()
  create(@Body() createCedenteDto: CreateCedenteDto) {
    return this.cedentesService.create(createCedenteDto);
  }

  @Get()
  findAll() {
    return this.cedentesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cedentesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCedenteDto: UpdateCedenteDto) {
    return this.cedentesService.update(+id, updateCedenteDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cedentesService.remove(+id);
  }
}
