import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User) private userModel: typeof User) {}

    async create(dto: CreateUserDto) {
        const user = await this.userModel.create(dto);
        return user;
    }

    async getAll() {
        const users = await this.userModel.findAll({ include: { all: true } });
        return users;
    }

    async getByEmail(email: string) {
        const user = await this.userModel.findOne({ where: { email }, include: { all: true } });
        return user;
    }
}
