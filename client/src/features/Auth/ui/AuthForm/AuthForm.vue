<template>
	<p-card class="card">
		<template v-if="isLogin" #title>Авторизация</template>
		<template v-else #title>Регистрация</template>

		<template #content>
			<form @onsubmit.prevent class="form">
				<span class="register">
					<span v-if="isLogin">Нет аккаунта?</span>
					<span v-else>Уже есть аккаунт?</span>

					<p-button v-if="isLogin" v-on:click="handlerClick" class="link" link>Регистрация</p-button>
					<p-button v-else v-on:click="handlerClick" class="link" link>Вход</p-button>
				</span>

				<p-input-text placeholder="Email" id="email" v-model="email" />
				<p-input-text v-if="!isLogin" placeholder="Username" v-model="username" />

				<p-password placeholder="Password" toggleMask v-model="password"></p-password>
				<p-password
					v-if="!isLogin"
					placeholder="Confirm password"
					toggleMask
					v-model="confirmPassword"
				></p-password>

				<p-button v-on:click="login" v-if="isLogin" class="button">Войти</p-button>
				<p-button v-on:click="registration" v-else class="button">Зарегистрироваться</p-button>
			</form>
		</template>
	</p-card>
</template>

<script lang="ts">
import { host } from '@/app/http/index';
export default {
	data() {
		return {
			email: '',
			username: '',
			password: '',
			confirmPassword: '',
			isLogin: true
		};
	},
	methods: {
		handlerClick() {
			this.email = '';
			this.password = '';
			this.username = '';
			this.confirmPassword = '';
			this.isLogin = !this.isLogin;
		},
		async login() {
			const response = await host.post('auth/login', {
				email: this.email,
				password: this.password
			});

			const token = response.data;

			if (token) {
				this.$router.push('/');
			}
		},
		async registration() {
			const response = await host.post('auth/registration', {
				email: this.email,
				username: this.username,
				password: this.password
			});

			const token = response.data;

			if (token) {
				this.$router.push('/');
			}
		}
	}
};
</script>

<style scoped>
.card {
	text-align: center;
}
.form {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.button {
	align-self: flex-end;
}

.register {
	display: flex;
	align-items: center;
	gap: 5px;
	margin-bottom: 10px;
}

.link {
	display: inline;
	padding: 0;
}
</style>
