import { Body, Controller, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    constructor(private tasksService: TasksService) {}

    @Post()
    create(@Body() taskDto: CreateTaskDto) {
        return this.tasksService.create(taskDto);
    }

    @Get()
    getAll() {
        return this.tasksService.getAll();
    }
}
