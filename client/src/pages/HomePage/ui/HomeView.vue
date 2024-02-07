<template>
	<div>Home Page</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/entities/user/model/store/userStore';
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';

const userStore = useUserStore();

const initUser = () => {
	userStore.initUser();
	if (!userStore.authUser) {
		const router = useRouter();
		router.push('/auth');
	}
};

onMounted(initUser);
</script>

<style scoped></style>
