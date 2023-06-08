import { IsString, MinLength } from "class-validator";

export class createCategoryDto{
    @IsString()
    @MinLength(5)
    category: string
}