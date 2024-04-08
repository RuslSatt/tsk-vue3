<template>
	<p-card class="card">
		<template #title>{{ isLogin ? 'Авторизация' : 'Регистрация' }}</template>

		<template #content>
			<form @onsubmit.prevent class="form">
				<span class="register">
					<span>{{ isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?' }}</span>

					<p-button v-on:click="changeView" class="link" link>{{
						isLogin ? 'Регистрация' : 'Вход'
					}}</p-button>
				</span>

				<div class="input-block">
					<p-input-text placeholder="Email" id="email" v-model="authStore.email" />
					<small class="error" v-if="v$.email.$errors.length">{{ v$.email.$errors[0].$message }}</small>
				</div>

				<div v-if="!isLogin" class="input-block">
					<p-input-text placeholder="Username" v-model="authStore.username" />
					<small class="error" v-if="v$.username.$errors.length">{{ v$.username.$errors[0].$message }}</small>
				</div>

				<div class="input-block">
					<p-password toggleMask placeholder="Password" v-model="authStore.password"></p-password>
					<small class="error" v-if="v$.password.$errors.length">{{ v$.password.$errors[0].$message }}</small>
				</div>

				<div class="input-block">
					<p-password
						v-if="!isLogin"
						toggleMask
						placeholder="Confirm password"
						v-model="authStore.confirmPassword"
					></p-password>
				</div>

				<p-button v-on:click="handlerClick" class="button"
					>{{ isLogin ? 'Войти' : 'Зарегистрироваться' }}
				</p-button>
			</form>
		</template>
	</p-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useAuthStore } from '../../model/store/authStore';
import { useVuelidate } from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';

const authStore = useAuthStore();

const rules = {
	username: { required },
	password: { required },
	email: { required, email }
};

const v$ = useVuelidate(rules, authStore);

const isLogin = ref(true);

const changeView = () => {
	authStore.$reset();
	isLogin.value = !isLogin.value;
};

const handlerClick = async () => {
	if (!isLogin.value) {
		const result = await v$.value.$validate();
		if (!result) return;
	}

	isLogin.value ? await authStore.loginUser() : await authStore.registrationUser();
};
</script>

<style scoped>
.card {
	text-align: center;
	width: 350px;
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

.p-password {
	flex-direction: column-reverse;
}

.input-block {
	display: flex;
	flex-direction: column;
	gap: 5px;
	text-align: left;
}

.error {
	color: red;
}
</style>
