<template>
	<div>
		<p-button class="btn" @click="dialogVisible = true"> Добавить задачу </p-button>

		<p-dialog
			:style="{ width: '50vw' }"
			:breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
			modal
			v-model:visible="dialogVisible"
		>
			<template #header>
				<div>
					<span>Задача</span>
				</div>
			</template>
			<p-input-text class="dialog-name" placeholder="Название задачи" v-model="name"></p-input-text>
			<div class="dialog-buttons">
				<p-button @click="dialogVisible = false">Отмена</p-button>
				<p-button type="primary" @click="addTask">Создать</p-button>
			</div>
		</p-dialog>

		<task-list></task-list>
	</div>
</template>

<script setup lang="ts">
import TaskList from '@/features/addTask';

import { useTaskStore, type ITask } from '@/features/addTask';
import { useUserStore } from '@/entities/user';
import { ref } from 'vue';

const name = ref('');
const dialogVisible = ref(false);

const taskStore = useTaskStore();
const userStore = useUserStore();

const addTask = async () => {
	const authUser = userStore.getUser;

	if (!authUser) return;

	const task: ITask = {
		name: name.value,
		userId: authUser.user.id,
		completed: false
	};

	taskStore.create(task);

	dialogVisible.value = false;
};
</script>

<style scoped>
.btn {
	margin-bottom: 10px;
}

.dialog-name {
	margin-bottom: 10px;
	width: 100%;
}

.dialog-buttons {
	display: flex;
	gap: 5px;
	justify-content: flex-end;
}
</style>
