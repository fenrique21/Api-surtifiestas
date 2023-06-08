import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from 'src/dto/login.dto';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repoUser: Repository<User>){}

    // crea un nuevo usuario
    async create(createUser: CreateUserDto){
        const newUser = this.repoUser.create(createUser)
        return await this.repoUser.save(newUser)
    }

    async finByUser(luser: string ){
        const loginUser = await this.repoUser.findOneBy({
            user: luser
        })
        return loginUser
    }
}
