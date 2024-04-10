import { api } from '@/app/http';
import type { ITask } from '@/entities/task';

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

	static async delete(id: number) {
		try {
			const response = await api.delete(`tasks/${id}`);

			return response.data;
		} catch (e: any) {
			throw new Error(e.message);
		}
	}

	static async update(task: ITask) {
		try {
			const response = await api.put(`tasks`, task);

			return response.data;
		} catch (e: any) {
			throw new Error(e.message);
		}
	}
}
