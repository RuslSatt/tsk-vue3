<template>
	<div class="wrapper">
		<nav-bar @hide-menu="onHideMenu"></nav-bar>
		<div class="main">
			<side-bar></side-bar>
			<div class="main__content">
				<router-view></router-view>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { useUserStore } from '@/entities/user/model/store/userStore';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import NavBar from '@/widgets/NavBar';
import SideBar from '@/widgets/SideBar';
import { useTaskStore } from '@/entities/task';

const userStore = useUserStore();
const taskStore = useTaskStore();
const menu = ref();

const initUser = () => {
	userStore.initUser();
	if (!userStore.authUser) {
		const router = useRouter();
		router.push('/auth');
	} else {
		taskStore.getTasks(userStore.authUser.user.id);
	}
};

const hideMenu = ref(false);

const onHideMenu = () => {
	menu.value.hide = hideMenu.value;
};

onMounted(initUser);
</script>

<style scoped>
.wrapper {
	display: flex;
	height: 100%;
	flex-direction: column;
}
.main {
	display: flex;
	flex: 1 1 0;
	min-height: 1px;
}

.main__content {
	display: flex;
	flex: 1;
	flex-direction: column;
	padding: 10px;
}
</style>
