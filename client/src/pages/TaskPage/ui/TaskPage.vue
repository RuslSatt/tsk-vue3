<template>
	<div>
		<el-button class="btn" @click="dialogVisible = true"> Добавить задачу </el-button>

		<el-dialog v-model="dialogVisible" title="Задача" align-center>
			<el-input placeholder="Название задачи" v-model="name" type="text" />
			<template #footer>
				<div class="dialog-footer">
					<el-button @click="dialogVisible = false">Cancel</el-button>
					<el-button type="primary" @click="addTask"> Confirm </el-button>
				</div>
			</template>
		</el-dialog>
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
		userId: authUser.user.id
	};

	taskStore.create(task);

	dialogVisible.value = false;
};
</script>

<style scoped>
.btn {
	margin-bottom: 10px;
}
</style>
