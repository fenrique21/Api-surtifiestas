import { IsInt, IsNumber, IsOptional, IsString, MinLength} from "class-validator";

export class CreateProductoDto{
    @IsString()
    @MinLength(5)
    name: string

    @IsString()
    @IsOptional()
    codigo: string

    @IsInt()
    cantidad: number

    @IsNumber()
    idcategory: number
}