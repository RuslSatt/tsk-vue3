import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Task } from './tasks.model';
import { CreateTaskDto } from './dto/create-task.dto';

@Injectable()
export class TasksService {
    constructor(@InjectModel(Task) private taskModel: typeof Task) {}

    async create(dto: CreateTaskDto) {
        const task = await this.taskModel.create(dto);
        return task;
    }

    async getById(userId: number) {
        const task = await this.taskModel.findAll({ where: { userId }, include: { all: true } });
        return task;
    }

    async update(task: Task) {
        this.taskModel.update(task, {
            where: { id: task.id },
        });
    }

    async delete(id: number) {
        this.taskModel.destroy({ where: { id } });
    }
}
