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
				<p-input-text placeholder="Email" id="email" v-model="username" />
				<p-password placeholder="Password" toggleMask v-model="password"></p-password>
				<p-password v-if="!isLogin" placeholder="Confirm password" toggleMask v-model="password"></p-password>

				<p-button v-if="isLogin" type="submit" class="button">Войти</p-button>
				<p-button v-else type="submit" class="button">Зарегистрироваться</p-button>
			</form>
		</template>
	</p-card>
</template>

<script lang="ts">
export default {
	data() {
		return {
			username: '',
			password: '',
			isLogin: true
		};
	},
	methods: {
		handlerClick() {
			this.username = '';
			this.password = '';
			this.isLogin = !this.isLogin;
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
