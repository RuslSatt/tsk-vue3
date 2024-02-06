import type { IUser } from '@/entities/user';
import type { IUserSchema } from '@/entities/user';
import { defineStore } from 'pinia';

const initialState: IUserSchema = {
	authUser: undefined
};

export const useUserStore = defineStore('user', {
	state: () => initialState,
	actions: {
		setUser(user: IUser) {
			this.authUser = user;
		}
	}
});
