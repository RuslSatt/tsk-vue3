import { registration } from './../services/registration';
import { useUserStore } from '@/entities/user/model/store/userStore';
import { login } from '../services/login';
import { defineStore } from 'pinia';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
import type { IUser } from '@/entities/user';

export const useAuthStore = defineStore('auth', () => {
	const email = ref('');
	const username = ref('');
	const password = ref('');
	const confirmPassword = ref('');
	const isLoading = ref(false);
	const isConfirm = ref(true);
	const error = ref('');

	const userStore = useUserStore();
	const router = useRouter();

	async function loginUser() {
		try {
			const user = await login(email.value, password.value);
			if (user) saveUser(user);
		} catch (e: any) {
			error.value = e.message;
		}
	}

	async function registrationUser() {
		try {
			if (password.value === confirmPassword.value) {
				const user = await registration(email.value, password.value, username.value);
				if (user) saveUser(user);
			} else {
				isConfirm.value = false;
			}
		} catch (e: any) {
			error.value = e.message;
		}
	}

	function saveUser(user: IUser) {
		userStore.setUser(user);
		localStorage.setItem('user', JSON.stringify(user));
		$reset();
		router.push('/');
	}

	function $reset() {
		email.value = '';
		password.value = '';
		confirmPassword.value = '';
		username.value = '';
		isLoading.value = false;
		isConfirm.value = true;
		error.value = '';
	}

	return {
		email,
		username,
		password,
		confirmPassword,
		isLoading,
		isConfirm,
		error,
		loginUser,
		registrationUser,
		$reset
	};
});
