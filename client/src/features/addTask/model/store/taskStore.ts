import type { ITask } from './../types/task';
import { defineStore } from 'pinia';
import { TaskService } from '../services/taskService';
import type { ITaskSchema } from '../types/task';

const initialState: ITaskSchema = {
	tasks: [],
	isLoading: false,
	error: ''
};

export const useTaskStore = defineStore('task', {
	state: () => initialState,

	actions: {
		async create(task: ITask) {
			this.isLoading = true;
			try {
				const createdTask = await TaskService.create(task.name, task.userId);
				if (createdTask) this.tasks.push(createdTask);
			} catch (e: any) {
				this.error = e.message;
			}
			this.isLoading = false;
		},

		async getTasks(userId: number) {
			this.isLoading = true;
			try {
				const tasks = await TaskService.get(userId);
				if (tasks) this.tasks = tasks;
			} catch (e: any) {
				this.error = e.message;
			}
			this.isLoading = false;
		}
	}
});
