import { host } from '@/app/http';

export const registration = async (email: string, password: string, username: string) => {
	const response = await host.post('auth/registration', {
		email: email,
		username: username,
		password: password
	});

	return response.data;
};
