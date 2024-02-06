<template>
	<p-card class="card">
		<template v-if="isLogin" #title>Авторизация</template>
		<template v-else #title>Регистрация</template>

		<template #content>
			<form @onsubmit.prevent class="form">
				<span class="register">
					<span v-if="isLogin">Нет аккаунта?</span>
					<span v-else>Уже есть аккаунт?</span>

					<p-button v-if="isLogin" v-on:click="changeView" class="link" link>Регистрация</p-button>
					<p-button v-else v-on:click="changeView" class="link" link>Вход</p-button>
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

				<p-button v-on:click="handlerLogin" v-if="isLogin" class="button">Войти</p-button>
				<p-button v-on:click="handlerRegistration" v-else class="button">Зарегистрироваться</p-button>
			</form>
		</template>
	</p-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { login } from '@/features/Auth/model/services/login';
import { registration } from '@/features/Auth/model/services/registration';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const username = ref('');
const isLogin = ref(true);

const changeView = () => {
	email.value = '';
	password.value = '';
	confirmPassword.value = '';
	username.value = '';
	isLogin.value = !isLogin.value;
};

const router = useRouter();

const handlerLogin = async () => {
	const result = await login(email.value, password.value);
	if (result) router.push('/');
};

const handlerRegistration = async () => {
	const result = await registration(email.value, password.value, username.value);
	if (result) router.push('/');
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
