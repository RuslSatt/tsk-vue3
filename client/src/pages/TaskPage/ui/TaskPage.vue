<template>
	<div>
		<p-button class="btn" @click="addTask"> Добавить задачу </p-button>
		<p-input-text v-model="name" type="text" />
		<task-list></task-list>
	</div>
</template>

<script setup lang="ts">
import TaskList from '@/features/addTask';
import { useTaskStore, type ITask } from '@/features/addTask';
import { useUserStore } from '@/entities/user';
import { ref } from 'vue';

const name = ref('');

const taskStore = useTaskStore();
const userStore = useUserStore();

const addTask = async () => {
	const authUser = userStore.getUser;

	if (!authUser) return;

	const task: ITask = {
		name: name.value,
		userId: authUser.user.id
	};

	taskStore.create(task);
};
</script>

<style scoped>
.btn {
	margin-bottom: 10px;
}
</style>
