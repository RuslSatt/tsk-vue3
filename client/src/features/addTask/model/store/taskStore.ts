import type { ITask } from './../types/task';
import { defineStore } from 'pinia';
import { TaskService } from '../services/taskService';
import type { ITaskSchema } from '../types/task';

const initialState: ITaskSchema = {
	tasks: [],
	selectedTask: undefined,
	isOpenPage: false,
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
				if (tasks) {
					for (const task of tasks) {
						if (task.deadline) {
							task.deadline = new Date(task.deadline);
						}
					}
					this.tasks = tasks;
				}
			} catch (e: any) {
				this.error = e.message;
			}
			this.isLoading = false;
		},

		async deleteTask(id: number) {
			this.isLoading = true;
			try {
				await TaskService.delete(id);
			} catch (e: any) {
				this.error = e.message;
			}
			this.isLoading = false;
		},

		async updateTask(task: ITask) {
			this.isLoading = true;
			try {
				await TaskService.update(task);
			} catch (e: any) {
				this.error = e.message;
			}
			this.isLoading = false;
		},

		selectTask(task: ITask | undefined) {
			this.selectedTask = task;
		}
	}
});
