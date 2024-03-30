<template>
	<div>
		<p-button @click="addTask"> Добавить задачу </p-button>
		<input v-model="name" type="text" />

		<ul id="array-rendering">
			<li v-for="task in store.tasks" :key="task.id">
				{{ task.name }}
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { useTaskStore, type ITask } from '@/features/addTask';
import { useUserStore } from '@/entities/user';
import { ref } from 'vue';

const name = ref('');

const store = useTaskStore();
const userStore = useUserStore();

const addTask = async () => {
	const authUser = userStore.getUser;

	if (!authUser) return;

	const task: ITask = {
		name: name.value,
		userId: authUser.user.id
	};

	await store.create(task);
};
</script>

<style scoped></style>
