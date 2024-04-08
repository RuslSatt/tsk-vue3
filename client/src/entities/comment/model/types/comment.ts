export interface IComment {
	id: number;
	content: string;
	taskId: number;
}

export interface ICommentSchema {
	comment: IComment[];
}
