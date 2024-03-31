export interface ITask {
	id?: number;
	completed: boolean;
	name: string;
	userId: number;
}

export interface ITaskSchema {
	tasks: ITask[];
	isLoading: boolean;
	error: string;
}
