import { BelongsTo, Column, DataType, ForeignKey, HasMany, Model, Table } from 'sequelize-typescript';
import { Comment } from 'src/comments/comments.model';
import { User } from 'src/users/users.model';

interface TaskCreationAttrs {
    name: string;
    userId: number;
}

type Priority = 'low' | 'medium' | 'high';

@Table({ tableName: 'tasks' })
export class Task extends Model<Task, TaskCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, allowNull: false })
    name: string;

    @Column({ type: DataType.BOOLEAN })
    completed: boolean;

    @Column({ type: DataType.DATE })
    deadline: Date;

    @Column({ type: DataType.STRING })
    priority: Priority;

    @ForeignKey(() => User)
    @Column({ type: DataType.INTEGER })
    userId: number;

    @BelongsTo(() => User)
    user: User;

    @HasMany(() => Comment)
    comments: Comment[];
}
