import type { IUser, IUserSchema } from '../types/user';
import { defineStore } from 'pinia';

const initialState: IUserSchema = {
	authUser: undefined
};

export const useUserStore = defineStore('user', {
	state: () => initialState,
	actions: {
		setUser(user: IUser) {
			this.authUser = user;
		},
		initUser() {
			const user = localStorage.getItem('user');
			if (user) {
				this.authUser = JSON.parse(user);
			}
		},
		logout() {
			this.authUser = undefined;
			localStorage.removeItem('user');
		}
	}
});
