import { IsEnum, IsString, MinLength } from "class-validator";
import { UserType } from "../entities/user.entity";


export class CreateUserDto{

    @IsString()
    @MinLength(10)
    user: string

    @IsEnum(UserType)
    user_type: UserType;

    @IsString()
    @MinLength(10)
    name: string

    @IsString()
    password: string
}