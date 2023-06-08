import { Body, Controller, Get, Post } from '@nestjs/common';
import { createCategoryDto } from 'src/dto/create-category.dto';
import { CategoriasService } from 'src/service/categorias.service';

@Controller('api/categorias')
export class CategoriasController {
    constructor(private readonly categoryService: CategoriasService){}

    @Post()
    create(@Body() createCategoryDto: createCategoryDto){
        return this.categoryService.create(createCategoryDto)
    }

    @Get()
    findAll(){
        return this.categoryService.finAll()
    }
}
