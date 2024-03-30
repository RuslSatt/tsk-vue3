import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { Task } from './tasks.model';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Post()
    create(@Body() taskDto: CreateTaskDto) {
        return this.tasksService.create(taskDto);
    }

    @Get('/:userId')
    getById(@Param('userId') userId: number) {
        return this.tasksService.getById(userId);
    }

    @Put()
    update(@Body() task: Task) {
        return this.tasksService.update(task);
    }

    @Delete('/:id')
    delete(@Param('id') id: number) {
        this.tasksService.delete(id);
    }
}
