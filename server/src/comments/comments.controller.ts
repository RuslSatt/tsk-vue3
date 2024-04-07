import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { Comment } from './comments.model';
import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentsController {
    constructor(private commentService: CommentsService) {}

    @Post()
    create(@Body() taskDto: CreateCommentDto) {
        return this.commentService.create(taskDto);
    }

    @Get('/:taskId')
    getById(@Param('taskId') taskId: number) {
        return this.commentService.getByTaskId(taskId);
    }

    @Put()
    update(@Body() task: Comment) {
        return this.commentService.update(task);
    }

    @Delete('/:id')
    delete(@Param('id') id: number) {
        this.commentService.delete(id);
    }
}
