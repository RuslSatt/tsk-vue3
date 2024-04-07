import { Module } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { User } from 'src/users/users.model';
import { Task } from './tasks.model';
import { Comment } from 'src/comments/comments.model';

@Module({
    providers: [TasksService],
    controllers: [TasksController],
    imports: [SequelizeModule.forFeature([User, Task, Comment])],
    exports: [TasksService],
})
export class TasksModule {}
