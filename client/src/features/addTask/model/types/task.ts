export interface ITask {
	id?: number;
	completed: boolean;
	name: string;
	userId: number;
}

export interface ITaskSchema {
	tasks: ITask[];
	selectedTask?: ITask;
	isOpenPage: boolean;
	isLoading: boolean;
	error: string;
}
