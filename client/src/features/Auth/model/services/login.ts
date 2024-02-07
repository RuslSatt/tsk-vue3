import { api } from '@/app/http';
import type { IUser } from '@/entities/user';

export const login = async (email: string, password: string): Promise<IUser> => {
	try {
		const response = await api.post('auth/login', {
			email,
			password
		});

		return response.data;
	} catch (e: any) {
		throw new Error(e.message);
	}
};
