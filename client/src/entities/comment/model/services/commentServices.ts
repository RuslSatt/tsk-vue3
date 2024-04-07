import type { IComment } from './../types/comment';
import { api } from '@/app/http';

export class CommentService {
	static async create(content: string, taskId: number) {
		try {
			const response = await api.post('comments', {
				content,
				taskId
			});

			return response.data;
		} catch (e: any) {
			throw new Error(e.message);
		}
	}

	static async get(taskId: number) {
		try {
			const response = await api.get(`comments/${taskId}`);

			return response.data;
		} catch (e: any) {
			throw new Error(e.message);
		}
	}

	static async delete(id: number) {
		try {
			const response = await api.delete(`comments/${id}`);

			return response.data;
		} catch (e: any) {
			throw new Error(e.message);
		}
	}

	static async update(comment: IComment) {
		try {
			const response = await api.put(`comments`, comment);

			return response.data;
		} catch (e: any) {
			throw new Error(e.message);
		}
	}
}
