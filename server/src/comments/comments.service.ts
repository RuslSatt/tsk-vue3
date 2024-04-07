import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './comments.model';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {
    constructor(@InjectModel(Comment) private commentModel: typeof Comment) {}

    async create(dto: CreateCommentDto) {
        const comment = await this.commentModel.create(dto);
        return comment;
    }

    async getByTaskId(taskId: number) {
        const comments = await this.commentModel.findAll({ where: { taskId }, include: { all: true } });
        return comments;
    }

    async update(comment: Comment) {
        this.commentModel.update(comment, {
            where: { id: comment.id },
        });
    }

    async delete(id: number) {
        this.commentModel.destroy({ where: { id } });
    }
}
