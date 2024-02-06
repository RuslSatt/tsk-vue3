import { host } from '@/app/http';

export const login = async (email: string, password: string) => {
	const response = await host.post('auth/login', {
		email,
		password
	});

	return response.data;
};
