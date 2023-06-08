import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/user.service';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(luser: string, password: string) {
    const user = await this.usersService.finByUser(luser);
    if (user !== null) {
      const isValid = await compare(password, user.password);
      if (isValid) {
        return user;
      }
    }

    return null;
  }

  async generateToken(user: User) {
    const payload = {
      user: user.user,
      sub: user.id,
    };
    const token = this.jwtService.sign(payload);
    return token;
  }
}