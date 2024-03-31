<template>
	<el-card class="card">
		<template #header>
			{{ isLogin ? 'Авторизация' : 'Регистрация' }}
		</template>

		<form @onsubmit.prevent class="form">
			<span class="register">
				<span>{{ isLogin ? 'Нет аккаунта?' : 'Уже есть аккаунт?' }}</span>

				<el-button v-on:click="changeView" class="link" link>{{ isLogin ? 'Регистрация' : 'Вход' }}</el-button>
			</span>

			<div class="input-block">
				<el-input placeholder="Email" id="email" v-model="authStore.email" />
			</div>

			<div v-if="!isLogin" class="input-block">
				<el-input placeholder="Username" v-model="authStore.username" />
			</div>

			<div class="input-block">
				<el-input type="password" toggleMask placeholder="Password" v-model="authStore.password"></el-input>
			</div>

			<div class="input-block">
				<el-input
					v-if="!isLogin"
					toggleMask
					placeholder="Confirm password"
					v-model="authStore.confirmPassword"
				/>
			</div>

			<el-button v-on:click="handlerClick" class="button">{{
				isLogin ? 'Войти' : 'Зарегистрироваться'
			}}</el-button>
		</form>

		<template #footer>Footer content</template>
	</el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { useAuthStore } from '../../model/store/authStore';
import { useVuelidate } from '@vuelidate/core';
import { required, email } from '@vuelidate/validators';

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

	isLogin.value ? authStore.loginUser() : authStore.registrationUser();
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
