import { host } from '@/app/http';
import { useUserStore } from '@/app/providers/store/store';

export const login = async (email: string, password: string) => {
	const response = await host.post('auth/login', {
		email,
		password
	});

	const store = useUserStore();

	store.setUser(response.data.user);
	localStorage.setItem('token', response.data.token);

	return response.data;
};
