import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateProductoDto } from 'src/dto/create-producto.dto';
import { Producto } from 'src/entities/producto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductosService {
    constructor(@InjectRepository(Producto) private repoProducto: Repository<Producto>){}

    // crea un nuevo producto
    async create(createProductoDto: CreateProductoDto){
        const newProducto = this.repoProducto.create(createProductoDto)
        return await this.repoProducto.save(newProducto)
    }
    
    // muestra el listado de todo los  productos
    async findAll(){
        return await this.repoProducto.find()
    }
    
    // muestra el producto con el id recibido
    async findOne(id: number){
        return await this.repoProducto.findOneBy({id})
    }
}

