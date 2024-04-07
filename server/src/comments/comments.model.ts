import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from 'sequelize-typescript';
import { Task } from 'src/tasks/tasks.model';

interface CommentCreationAttrs {
    content: string;
    taskId: number;
}

@Table({ tableName: 'comments' })
export class Comment extends Model<Comment, CommentCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING })
    content: string;

    @ForeignKey(() => Task)
    @Column({ type: DataType.INTEGER })
    taskId: number;

    @BelongsTo(() => Task)
    task: Task;
}
