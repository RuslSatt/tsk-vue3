import { HasMany, Column, DataType, Model, Table } from 'sequelize-typescript';
import { Task } from 'src/tasks/tasks.model';

interface UserCreationAttrs {
    email: string;
    username: string;
    password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationAttrs> {
    @Column({ type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true })
    id: number;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email: string;

    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    username: string;

    @Column({ type: DataType.STRING, allowNull: false })
    password: string;

    @HasMany(() => Task)
    tasks: Task[];
}
