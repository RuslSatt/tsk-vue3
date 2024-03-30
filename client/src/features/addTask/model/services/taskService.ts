import { api } from '@/app/http';

export class TaskService {
	static async create(name: string, userId: number) {
		try {
			const response = await api.post('tasks', {
				name,
				userId
			});

			return response.data;
		} catch (e: any) {
			throw new Error(e.message);
		}
	}

	static async get(userId: number) {
		try {
			const response = await api.get(`tasks/${userId}`);

			return response.data;
		} catch (e: any) {
			throw new Error(e.message);
		}
	}
}
