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

				<p-input-text placeholder="Email" id="email" v-model="authStore.email" />
				<p-input-text v-if="!isLogin" placeholder="Username" v-model="authStore.username" />

				<p-password placeholder="Password" toggleMask v-model="authStore.password"></p-password>
				<p-password
					v-if="!isLogin"
					placeholder="Confirm password"
					toggleMask
					v-model="authStore.confirmPassword"
				></p-password>

				<p-button v-on:click="authStore.loginUser" v-if="isLogin" class="button">Войти</p-button>
				<p-button v-on:click="authStore.registrationUser" v-else class="button">Зарегистрироваться</p-button>
			</form>
		</template>
	</p-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useAuthStore } from '../../model/store/authStore';

const authStore = useAuthStore();

const isLogin = ref(true);

const changeView = () => {
	authStore.$reset();
	isLogin.value = !isLogin.value;
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
