import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { User } from 'src/users/entities/user.entity';


@Injectable()
export class JwtGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const user = context.switchToHttp().getRequest<Request>().user as User;
    if (user.user_type === 'user') return true;
    return false;
  }
}