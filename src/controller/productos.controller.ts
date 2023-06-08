import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBasicAuth } from '@nestjs/swagger';
import { JwtGuard } from 'src/auth/guards/jwt.guard';
import { CreateProductoDto } from 'src/dto/create-producto.dto';
import { ProductosService } from 'src/service/productos.service';

// @UseGuards(AuthGuard('jwt'), JwtGuard)
@Controller('api/productos')
export class ProductosController {
    constructor(private readonly productoService: ProductosService){}
    @Post()
    create(@Body() createProductoDto: CreateProductoDto){
        return this.productoService.create(createProductoDto)
    }

    @Get()
    findAll(){
        return this.productoService.findAll()
    }
}
