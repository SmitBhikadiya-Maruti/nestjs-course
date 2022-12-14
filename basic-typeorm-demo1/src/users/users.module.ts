import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Todo } from '../db/entities/todo.entity';
import { User } from '../db/entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User, Todo])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
