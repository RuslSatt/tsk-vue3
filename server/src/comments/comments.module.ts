import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Comment } from './comments.model';
import { Task } from 'src/tasks/tasks.model';

@Module({
    providers: [CommentsService],
    controllers: [CommentsController],
    imports: [SequelizeModule.forFeature([Comment, Task])],
    exports: [CommentsService],
})
export class CommentsModule {}
