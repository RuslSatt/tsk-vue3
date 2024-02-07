import { api } from '@/app/http';
import type { IUser } from '@/entities/user';

export const registration = async (email: string, password: string, username: string): Promise<IUser> => {
	const response = await api.post('auth/registration', {
		email: email,
		username: username,
		password: password
	});

	return response.data;
};
