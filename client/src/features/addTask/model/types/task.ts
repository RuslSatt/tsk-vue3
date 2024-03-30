export interface ITask {
	id?: number;
	name: string;
	userId: number;
}

export interface ITaskSchema {
	tasks: ITask[];
	isLoading: boolean;
	error: string;
}
