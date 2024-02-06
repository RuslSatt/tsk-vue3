import { host } from '@/app/http';
import { useUserStore } from '@/app/providers/store/store';

export const registration = async (email: string, password: string, username: string) => {
	const response = await host.post('auth/registration', {
		email: email,
		username: username,
		password: password
	});

	const store = useUserStore();

	store.setUser(response.data.user);
	localStorage.setItem('token', response.data.token);

	return response.data;
};
