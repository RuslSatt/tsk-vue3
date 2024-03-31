<template>
	<header class="header">
		<div class="menu-button">
			<p-button class="icon" severity="secondary" text rounded icon="pi pi-bars"></p-button>
		</div>
		<div class="buttons">
			<p-button class="icon" severity="secondary" text rounded icon="pi pi-user"></p-button>
			<p-button @click="onLogout" class="icon" severity="secondary" text rounded icon="pi pi-sign-out"></p-button>
		</div>
	</header>
</template>

<script setup lang="ts">
import { useUserStore } from '@/entities/user';
import { useRouter } from 'vue-router';

const userStore = useUserStore();
const router = useRouter();

const onLogout = () => {
	userStore.logout();
	router.push('/auth');
};
</script>

<style scoped>
.header {
	min-height: 30px;
	background-color: var(--surface-300);
	display: flex;
	align-items: center;
	padding: 5px 10px;
	border-bottom: 1px solid var(--surface-400);
}

.buttons {
	margin-left: auto;
	display: flex;
	gap: 10px;
}

.icon {
	width: 2rem;
	height: 2rem;
	padding: 0.1rem;
	color: var(--text-color);
}
</style>
