export interface IComment {
	content: string;
	taskId: number;
}

export interface ICommentSchema {
	comment: IComment[];
}
