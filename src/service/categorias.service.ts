import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createCategoryDto } from 'src/dto/create-category.dto';
import { Category } from 'src/entities/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriasService {
    constructor(@InjectRepository(Category) private repoCategory: Repository<Category>){}

    // crea una nuevo producto
    async create(createCategory: createCategoryDto){
        const newCategory = this.repoCategory.create(createCategory)
        return await this.repoCategory.save(newCategory)
    }

    // envia la lista de toda las categorias
    async finAll(){
        return await this.repoCategory.find()
    }
}
