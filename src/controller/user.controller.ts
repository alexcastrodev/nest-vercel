import { Body, Controller, Post, Get } from '@nestjs/common';
import type { CreateUserDto } from '../interface/create-user-dto';
import { User } from '../entities/user.entity';
import { InjectModel } from '@nestjs/sequelize';

@Controller('users')
export class UserController {
  constructor(
    @InjectModel(User)
    private userModel: typeof User
  ) {}

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.userModel.create({
      ...createUserDto
    });
  }


  @Get()
  async findAll(): Promise<User[]> {
    return this.userModel.findAll();
  }
}
