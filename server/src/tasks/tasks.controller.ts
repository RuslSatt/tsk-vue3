import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

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
}
