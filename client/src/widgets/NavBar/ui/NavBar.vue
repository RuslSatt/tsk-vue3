<template>
	<header class="header">
		<!-- <div class="menu-button">
			<el-button type="primary" circle :icon="Menu"></el-button>
		</div>
		<div class="buttons">
			<el-button type="primary" circle @click="onLogout" :icon="User" />
		</div> -->
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
</style>
