<template>
	<ul class="list">
		<el-card
			v-for="task in taskStore.tasks"
			:key="task.id"
			class="card"
			body-style="display: flex; align-items: center; height: 35px"
			shadow="hover"
		>
			<p-checkbox v-model="checked" />
			<el-text @click="toggleEdit">{{ task.name }}</el-text>
			<el-button type="success" :icon="Edit" circle class="btn"></el-button>
			<el-button @click="deleteTask(task)" type="danger" :icon="Delete" circle class="btn"></el-button>
		</el-card>
	</ul>
</template>

<script lang="ts">
import { useTaskStore, type ITask } from '@/features/addTask';
import { defineComponent } from 'vue';
import { Delete, Edit } from '@element-plus/icons-vue';

export default defineComponent({
	setup() {
		const taskStore = useTaskStore();

		return { taskStore, Delete, Edit };
	},

	data() {
		return {
			isEdit: false,
			readonly: true,
			checked: false
		};
	},

	methods: {
		async deleteTask(task: ITask) {
			if (!task.id) return;

			await this.taskStore.deleteTask(task.id);
			await this.taskStore.getTasks(task.userId);

			console.log('delete');
		},

		toggleEdit() {
			this.isEdit = !this.isEdit;
			this.readonly = !this.isEdit;
		},

		async saveEdited(task: ITask) {
			this.isEdit = !this.isEdit;

			await this.taskStore.updateTask(task);
			await this.taskStore.getTasks(task.userId);
		}
	}
});
</script>

<style scoped>
.list {
	display: flex;
	flex-direction: column;
	gap: 10px;
}

.card {
	cursor: pointer;
}

.btn {
	margin-left: auto;
}

.btn-container {
	display: flex;
	margin-left: auto;
}
</style>
