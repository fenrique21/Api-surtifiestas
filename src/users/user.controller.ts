import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginDto } from 'src/dto/login.dto';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './user.service';

@Controller('api/users')
export class UsersController {
    constructor(private readonly userService: UsersService){}

    @Post()
    create(@Body() createUserDto: CreateUserDto){
        return this.userService.create(createUserDto)
    }
}
