export interface ITask {
	id?: number;
	completed: boolean;
	name: string;
	userId: number;
	deadline: Date | undefined;
	priority: TaskPriority;
}

export type TaskPriority = 'Низкий' | 'Средний' | 'Высокий';

export interface ITaskSchema {
	tasks: ITask[];
	selectedTask?: ITask;
	isOpenPage: boolean;
	isLoading: boolean;
	error: string;
}
